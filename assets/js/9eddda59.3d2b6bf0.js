"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4290],{73951:function(e){e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Initializes a new permission provider","params":[{"name":"config","desc":"","lua_type":"{ remoteFunctionName: string }"}],"returns":[{"desc":"","lua_type":"BasePermissionProvider"}],"function_type":"static","source":{"line":23,"path":"src/permissionprovider/src/Server/Providers/BasePermissionProvider.lua"}},{"name":"Start","desc":"Starts the permission provider. Should be done via ServiceBag.","params":[],"returns":[],"function_type":"method","source":{"line":35,"path":"src/permissionprovider/src/Server/Providers/BasePermissionProvider.lua"}},{"name":"PromiseIsCreator","desc":"Returns whether the player is a creator.","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"method","source":{"line":49,"path":"src/permissionprovider/src/Server/Providers/BasePermissionProvider.lua"}},{"name":"PromiseIsAdmin","desc":"Returns whether the player is an admin.","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"method","source":{"line":60,"path":"src/permissionprovider/src/Server/Providers/BasePermissionProvider.lua"}},{"name":"IsCreator","desc":"Returns whether the player is a creator.\\n\\n:::info\\nMay return false if not loaded. Prefer using the promise version.\\n:::","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":76,"path":"src/permissionprovider/src/Server/Providers/BasePermissionProvider.lua"}},{"name":"IsAdmin","desc":"Returns whether the player is an admin.\\n\\n:::info\\nMay return false if not loaded. Prefer using the promise version.\\n:::","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":103,"path":"src/permissionprovider/src/Server/Providers/BasePermissionProvider.lua"}}],"properties":[],"types":[],"name":"BasePermissionProvider","desc":"Basic interface for providing permissions.","realm":["Server"],"source":{"line":6,"path":"src/permissionprovider/src/Server/Providers/BasePermissionProvider.lua"}}')}}]);