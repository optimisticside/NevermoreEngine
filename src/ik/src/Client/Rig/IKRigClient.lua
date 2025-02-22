--[=[
	Handles IK rigging for a humanoid
	@class IKRigClient
]=]

local require = require(script.Parent.loader).load(script)

local Players = game:GetService("Players")

local IKRigBase = require("IKRigBase")
local IKConstants = require("IKConstants")
local IKRigAimerLocalPlayer = require("IKRigAimerLocalPlayer")

local IKRigClient = setmetatable({}, IKRigBase)
IKRigClient.ClassName = "IKRigClient"
IKRigClient.__index = IKRigClient

require("PromiseRemoteEventMixin"):Add(IKRigClient, IKConstants.REMOTE_EVENT_NAME)

function IKRigClient.new(humanoid, serviceBag)
	local self = setmetatable(IKRigBase.new(humanoid), IKRigClient)

	self._serviceBag = assert(serviceBag, "No serviceBag")

	self:PromiseRemoteEvent():Then(function(remoteEvent)
		self._remoteEvent = remoteEvent or error("No remoteEvent")
		self._maid:GiveTask(self._remoteEvent.OnClientEvent:Connect(function(...)
			self:_handleRemoteEventClient(...)
		end))

		if self:GetPlayer() == Players.LocalPlayer then
			self:_setupLocalPlayer(self._remoteEvent)
		end
	end)

	return self
end

--[=[
	Retrieves where the IK rig's position is, if it exists

	@return Vector3?
]=]
function IKRigClient:GetPositionOrNil()
	local rootPart = self._obj.RootPart
	if not rootPart then
		return nil
	end

	return rootPart.Position
end

--[=[
	Retrieves the local player aimer if it exists

	@return IKRigAimerLocalPlayer?
]=]
function IKRigClient:GetLocalPlayerAimer()
	return self._aimer
end

function IKRigClient:_handleRemoteEventClient(newTarget)
	assert(typeof(newTarget) == "Vector3" or newTarget == nil, "Bad newTarget")

	local torso = self:GetTorso()

	if torso then
		torso:Point(newTarget)
	end
end

function IKRigClient:_setupLocalPlayer(remoteEvent)
	self._aimer = IKRigAimerLocalPlayer.new(self._serviceBag, self, remoteEvent)
	self._maid:GiveTask(self._aimer)
end

return IKRigClient