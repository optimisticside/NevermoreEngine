--[=[
	Provides a basis for binders that can be retrieved anywhere
	@class BinderProvider
]=]

local require = require(script.Parent.loader).load(script)

local Promise = require("Promise")

local BinderProvider = {}
BinderProvider.ClassName = "BinderProvider"
BinderProvider.__index = BinderProvider

--[=[
	Constructs a new BinderProvider.

	```lua
	local serviceBag = ServiceBag.new()

	-- Usually in a separate file!
	local binderProvider = BinderProvider.new(function(self, serviceBag)
		serviceBag:Add(Binder.new("Bird", require("Bird")))
	end)

	-- Retrieve binders
	local binders = serviceBag:GetService(binderProvider)

	-- Runs the game (including binders)
	serviceBag:Init()
	serviceBag:Start()
	```

	@param initMethod (self, serviceBag: ServiceBag)
	@return BinderProvider
]=]
function BinderProvider.new(initMethod)
	local self = setmetatable({}, BinderProvider)

	self._initMethod = initMethod or error("No initMethod")
	self._initialized = false
	self._started = false

	return self
end

--[=[
	Retrieves whether or not its a binder provider
	@param value any
	@return boolean -- True if it is a binder provider
]=]
function BinderProvider.isBinderProvider(value)
	return type(value) == "table" and value.ClassName == "BinderProvider"
end

--[=[
	Resolves to the given binder given the binderName.

	@param binderName string
	@return Promise<Binder<T>>
]=]
function BinderProvider:PromiseBinder(binderName)
	if self._bindersAddedPromise:IsFulfilled() then
		local binder = self:Get(binderName)
		if binder then
			return Promise.resolved(binder)
		else
			return Promise.rejected()
		end
	end

	return self._bindersAddedPromise
		:Then(function()
			local binder = self:Get(binderName)
			if binder then
				return binder
			else
				return Promise.rejected()
			end
		end)
end

--[=[
	Initializes itself and all binders

	@param ... ServiceBag | any
]=]
function BinderProvider:Init(...)
	assert(not self._initialized, "Already initialized")

	self._binders = {}
	self._initialized = true

	-- Pretty sure this is a bad idea
	self._bindersAddedPromise = Promise.new()
	self._startPromise = Promise.new()

	self._initMethod(self, ...)
	self._bindersAddedPromise:Resolve()
end

--[=[
	Returns a promise that will resolve once all binders are added.

	@return Promise
]=]
function BinderProvider:PromiseBindersAdded()
	return assert(self._bindersAddedPromise, "Be sure to require via serviceBag")
end

--[=[
	Returns a promise that will resolve once all binders are started.

	@return Promise
]=]
function BinderProvider:PromiseBindersStarted()
	return assert(self._startPromise, "Be sure to require via serviceBag")
end

--[=[
	Starts all of the binders.
]=]
function BinderProvider:Start()
	assert(self._initialized, "Not initialized")
	assert(not self._started, "Already started")

	self._started = true
	for _, binder in pairs(self._binders) do
		binder:Start()
	end

	self._startPromise:Resolve()
end

function BinderProvider:__index(index)
	if BinderProvider[index] then
		return BinderProvider[index]
	end

	error(("%q Not a valid binder"):format(tostring(index)))
end

--[=[
	Retrieves a binder given a tagName

	@param tagName string
	@return Binder<T>?
]=]
function BinderProvider:Get(tagName)
	assert(type(tagName) == "string", "tagName must be a string")
	return rawget(self, tagName)
end

--[=[
	Adds a binder given a tag name.

	@param binder Binder<T>
]=]
function BinderProvider:Add(binder)
	assert(not self._started, "Already inited")
	assert(not self:Get(binder:GetTag()), "Binder already exists")

	table.insert(self._binders, binder)
	self[binder:GetTag()] = binder
end

return BinderProvider