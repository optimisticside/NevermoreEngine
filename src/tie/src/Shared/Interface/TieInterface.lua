--[=[
	@class TieInterface
]=]

local require = require(script.Parent.loader).load(script)

local TieUtils = require("TieUtils")
local TieSignalInterface = require("TieSignalInterface")
local TiePropertyInterface = require("TiePropertyInterface")

local TieInterface = {}
TieInterface.ClassName = "TieInterface"
TieInterface.__index = TieInterface

function TieInterface.new(definition, adornee)
	local self = setmetatable({}, TieInterface)

	self._definition = assert(definition, "No definition")
	self._adornee = assert(adornee, "No adornee")
	self._memberDefinitionMap = self._definition:GetMemberMap()

	return self
end

function TieInterface:IsImplemented()
	local adornee = rawget(self, "_adornee")
	local definition = rawget(self, "_definition")

	return definition:HasImplementation(adornee)
end

function TieInterface:ObserveIsImplemented()
	local adornee = rawget(self, "_adornee")
	local definition = rawget(self, "_definition")

	return definition:ObserveIsImplemented(adornee)
end

function TieInterface:__index(index)
	local member = rawget(self, "_memberDefinitionMap")[index]
	local definition = rawget(self, "_definition")
	if member then
		if member.ClassName == "TieMethodDefinition" then
			local adornee = rawget(self, "_adornee")
			return function(firstArg, ...)
				if firstArg ~= self then
					error(("Must call methods with self as first parameter (Hint use `%s:%s()` instead of `%s.%s()`)"):format(
						definition:GetName(),
						member:GetMemberName(),
						definition:GetName(),
						member:GetMemberName()))
				end

				local folder = adornee:FindFirstChild(definition:GetContainerName())
				if not folder then
					error("No folder")
				end

				local bindableFunction = folder:FindFirstChild(member:GetMemberName())
				if not bindableFunction then
					error("No bindableFunction")
				end

				return TieUtils.decode(bindableFunction:Invoke(TieUtils.encode(...)))
			end;
		elseif member.ClassName == "TieSignalDefinition" then
			-- TODO: Signal implementation
			local adornee = rawget(self, "_adornee")

			return TieSignalInterface.new(adornee, member)
		elseif member.ClassName == "TiePropertyDefinition" then
			local adornee = rawget(self, "_adornee")

			return TiePropertyInterface.new(adornee, member)
		else
			error(("Unknown member definition %q"):format(tostring(member.ClassName)))
		end
	elseif TieInterface[index] then
		return TieInterface[index]
	else
		error(("Bad %q is not a member of %s"):format(tostring(index), definition:GetContainerName()))
	end
end

return TieInterface