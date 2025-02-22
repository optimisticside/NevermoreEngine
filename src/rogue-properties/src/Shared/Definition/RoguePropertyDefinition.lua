--[=[
	@class RoguePropertyDefinition
]=]

local require = require(script.Parent.loader).load(script)

local BaseObject = require("BaseObject")
local RogueProperty = require("RogueProperty")
local ServiceBag = require("ServiceBag")
local RoguePropertyUtils = require("RoguePropertyUtils")

local RoguePropertyDefinition = setmetatable({}, BaseObject)
RoguePropertyDefinition.ClassName = "RoguePropertyDefinition"
RoguePropertyDefinition.__index = RoguePropertyDefinition

function RoguePropertyDefinition.new(name, defaultValue, roguePropertyTableDefinition)
	local self = setmetatable(BaseObject.new(), RoguePropertyDefinition)

	assert(defaultValue ~= nil, "Bad defaultValue")

	self._name = assert(name, "Bad name")
	self._defaultValue = defaultValue
	self._valueType = typeof(self._defaultValue)
	self._storageType = self:_computeStorageInstanceType()
	self._roguePropertyTableDefinition = roguePropertyTableDefinition or nil
	self._encodedDefaultValue = RoguePropertyUtils.encodeProperty(self, self._defaultValue)

	return self
end

--[=[
	@param serviceBag ServiceBag
	@param adornee Instance
	@return RogueProperty
]=]
function RoguePropertyDefinition:Get(serviceBag, adornee)
	assert(ServiceBag.isServiceBag(serviceBag), "Bad serviceBag")
	assert(typeof(adornee) == "Instance", "Bad adornee")

	return RogueProperty.new(adornee, serviceBag, self)
end


function RoguePropertyDefinition:GetPropertyTableDefinition()
	return self._roguePropertyTableDefinition
end

--[=[
	Gets the name of the rogue property
	@return string
]=]
function RoguePropertyDefinition:GetName(): string
	return self._name
end

--[=[
	Gets the default value for the property
	@return TProperty
]=]
function RoguePropertyDefinition:GetDefaultValue()
	return self._defaultValue
end

function RoguePropertyDefinition:GetValueType()
	return self._valueType
end

function RoguePropertyDefinition:GetStorageInstanceType()
	return self._storageType
end

function RoguePropertyDefinition:GetEncodedDefaultValue()
	return rawget(self, "_encodedDefaultValue")
end

function RoguePropertyDefinition:_computeStorageInstanceType()
	if self._valueType == "string" or self._valueType == "table" then
		return "StringValue"
	elseif self._valueType == "number" then
		return "NumberValue"
	elseif self._valueType == "boolean" then
		return "BoolValue"
	elseif self._valueType == "Color3" then
		return "Color3Value"
	elseif self._valueType == "BrickColor" then
		return "BrickColorValue"
	elseif self._valueType == "Vector3" then
		return "Vector3Value"
	elseif self._valueType == "CFrame" then
		return "CFrameValue"
	else
		error(("Unknown valueType %q"):format(tostring(self._valueType)))
	end
end


return RoguePropertyDefinition