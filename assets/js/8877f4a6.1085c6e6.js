"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33032],{97030:function(e){e.exports=JSON.parse('{"functions":[{"name":"Init","desc":"Initializes the service. Should be done via [ServiceBag].","params":[{"name":"_serviceBag","desc":"","lua_type":"ServiceBag"}],"returns":[],"function_type":"method","source":{"line":39,"path":"src/permissionprovider/src/Server/PermissionService.lua"}},{"name":"SetProviderFromConfig","desc":"Sets the provider from a config. See [PermissionProviderUtils.createGroupRankConfig]\\nand [PermissionProviderUtils.createSingleUserConfig].","params":[{"name":"config","desc":"","lua_type":"{ type: string }"}],"returns":[],"function_type":"method","source":{"line":53,"path":"src/permissionprovider/src/Server/PermissionService.lua"}},{"name":"Start","desc":"Starts the permission service. Should be done via [ServiceBag].","params":[],"returns":[],"function_type":"method","source":{"line":69,"path":"src/permissionprovider/src/Server/PermissionService.lua"}},{"name":"PromisePermissionProvider","desc":"Returns the permission provider","params":[],"returns":[{"desc":"","lua_type":"Promise<BasePermissionProvider>"}],"function_type":"method","source":{"line":83,"path":"src/permissionprovider/src/Server/PermissionService.lua"}}],"properties":[],"types":[],"name":"PermissionService","desc":"Provides permissions for the game. See [BasePermissionProvider].\\n\\n:::tip\\nBe sure to initialize the [PermissionServiceClient] on the client.\\n:::\\n\\n```lua\\nlocal require = require(game:GetService(\\"ReplicatedStorage\\"):WaitForChild(\\"Nevermore\\"))\\n\\nlocal PermissionProvider = require(\\"PermissionProvider\\")\\nlocal PermissionProviderUtils = require(\\"PermissionProviderUtils\\")\\n\\nreturn PermissionProvider.new(PermissionProviderUtils.createGroupRankConfig({\\n  groupId = 8668163;\\n  minAdminRequiredRank = 250;\\n  minCreatorRequiredRank = 254;\\n}))\\n```","realm":["Server"],"source":{"line":24,"path":"src/permissionprovider/src/Server/PermissionService.lua"}}')}}]);