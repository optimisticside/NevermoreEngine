--[=[
	@class RogueProperty
]=]

local require = require(script.Parent.loader).load(script)

local RogueAdditiveProvider = require("RogueAdditiveProvider")
local RogueMultiplierProvider = require("RogueMultiplierProvider")
local RoguePropertyBinderGroups = require("RoguePropertyBinderGroups")
local RoguePropertyModifierUtils = require("RoguePropertyModifierUtils")
local RoguePropertyService = require("RoguePropertyService")
local Rx = require("Rx")
local RxBinderUtils = require("RxBinderUtils")
local RxBrioUtils = require("RxBrioUtils")
local RxInstanceUtils = require("RxInstanceUtils")
local RxValueBaseUtils = require("RxValueBaseUtils")
local ValueBaseUtils = require("ValueBaseUtils")
local RoguePropertyUtils = require("RoguePropertyUtils")

local RogueProperty = {}
RogueProperty.ClassName = "RogueProperty"
RogueProperty.__index = RogueProperty

function RogueProperty.new(adornee, serviceBag, definition)
	local self = setmetatable({}, RogueProperty)

	self._serviceBag = assert(serviceBag, "No serviceBag")
	self._roguePropertyBinderGroups = self._serviceBag:GetService(RoguePropertyBinderGroups)
	self._roguePropertyService = self._serviceBag:GetService(RoguePropertyService)

	self._adornee = assert(adornee, "Bad adornee")
	self._definition = assert(definition, "Bad definition")

	if self._roguePropertyService:CanInitializeProperties() then
		self:_getBaseValueObject()
	end

	return self
end

function RogueProperty:_getBaseValueObject()
	local parent
	local tableDefinition = self._definition:GetPropertyTableDefinition()
	if tableDefinition then
		parent = tableDefinition:GetContainer(self._serviceBag, self._adornee)
	else
		parent = self._adornee
	end

	if not parent then
		return nil
	end

	if self._roguePropertyService:CanInitializeProperties() then
		return ValueBaseUtils.getOrCreateValue(
			parent,
			self._definition:GetStorageInstanceType(),
			self._definition:GetName(),
			self._definition:GetEncodedDefaultValue())
	else
		return parent:FindFirstChild(self._definition:GetName())
	end
end

function RogueProperty:_observeBaseValueBrio()
	local tableDefinition = self._definition:GetPropertyTableDefinition()
	if tableDefinition then
		return tableDefinition:ObserveContainerBrio(self._serviceBag, self._adornee)
			:Pipe({
				RxBrioUtils.switchMapBrio(function(container)
					return RxInstanceUtils.observeLastNamedChildBrio(
						container,
						self._definition:GetStorageInstanceType(),
						self._definition:GetName())
				end);
			})
	else
		return RxInstanceUtils.observeLastNamedChildBrio(self._adornee, self._definition:GetStorageInstanceType(), self._definition:GetName())
	end
end

function RogueProperty:SetBaseValue(value)
	local baseValue = self:_getBaseValueObject()
	if baseValue then
		baseValue.Value = self:_encodeValue(value)
	else
		warn("Failed to get the baseValue to parent")
	end
end

function RogueProperty:GetValue()
	local propObj = self:_getBaseValueObject()
	if not propObj then
		return self._definition:GetDefaultValue()
	end

	local current = self:_decodeValue(propObj.Value)

	for _, item in pairs(self._roguePropertyService:GetProviders()) do
		current = item:GetModifiedVersion(propObj, self, current)
	end

	return current
end

function RogueProperty:GetDefinition()
	return self._definition
end


function RogueProperty:ObserveModifiersBrio()
	return self:_observeBaseValueBrio()
		:Pipe({
			RxBrioUtils.flatMapBrio(function(baseValue)
				if baseValue then
					return RxBinderUtils.observeBoundChildClassesBrio(self._roguePropertyBinderGroups.RogueModifiers:GetBinders(), baseValue)
				else
					return Rx.EMPTY
				end
			end);
		})
end

function RogueProperty:ObserveSourcesBrio()
	return self:ObserveModifiersBrio()
		:Pipe({
			RxBrioUtils.flatMapBrio(function(rogueModifier)
				return RoguePropertyModifierUtils.observeSourceLinksBrio(rogueModifier:GetObject())
			end);
		})
end

function RogueProperty:Observe()
	return self._roguePropertyService:ObserveProviderList():Pipe({
		RxBrioUtils.toBrio();
		RxBrioUtils.switchMapBrio(function()
			return self:_observeBaseValueBrio()
		end);
		RxBrioUtils.switchMapBrio(function(baseValue)
			local current
			if baseValue then
				current = RxValueBaseUtils.observeValue(baseValue)

				if self._definition:GetValueType() == "table" then
					current = current:Pipe({
						Rx.map(function(value)
							return self:_decodeValue(value)
						end)
					})
				end
			else
				current = Rx.of(self._definition:GetDefaultValue())
			end

			for _, item in pairs(self._roguePropertyService:GetProviders()) do
				current = item:ObserveModifiedVersion(baseValue, self, current)
			end

			return current
		end);
		RxBrioUtils.emitOnDeath(self._definition:GetDefaultValue());
	})
end

function RogueProperty:CreateMultiplier(amount, source)
	assert(type(amount) == "number", "Bad amount")

	local provider = self._serviceBag:GetService(RogueMultiplierProvider)
	local baseValue = self:_getBaseValueObject()

	if not baseValue then
		warn("Failed to get the baseValue to parent")
	end

	local multiplier = provider:Create(amount, source)
	multiplier.Parent = baseValue

	return multiplier
end

function RogueProperty:CreateAdditive(amount, source)
	assert(type(amount) == "number", "Bad amount")

	local provider = self._serviceBag:GetService(RogueAdditiveProvider)
	local baseValue = self:_getBaseValueObject()

	if not baseValue then
		warn("Failed to get the baseValue to parent")
	end

	local multiplier = provider:Create(amount, source)
	multiplier.Parent = baseValue

	return multiplier
end

function RogueProperty:_observeModifiersBrio()
	return RxBinderUtils.observeBoundChildClassesBrio(self._roguePropertyBinderGroups.RogueModifiers:GetAll(), self._adornee)
end

function RogueProperty:__index(index)
	if index == "Value" then
		return self:GetValue()
	elseif RogueProperty[index] then
		return RogueProperty[index]
	else
		error(("Bad index %q"):format(tostring(index)))
	end
end

function RogueProperty:_decodeValue(current)
	return RoguePropertyUtils.decodeProperty(self._definition, current)
end

function RogueProperty:_encodeValue(current)
	return RoguePropertyUtils.encodeProperty(self._definition, current)
end

return RogueProperty