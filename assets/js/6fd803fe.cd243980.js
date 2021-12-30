"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97230],{76382:function(e){e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new Raycaster.","params":[{"name":"doIgnoreFunction","desc":"Returns true to ignore","lua_type":"(data: RaycastData) -> boolean"}],"returns":[],"function_type":"static","source":{"line":25,"path":"src/raycaster/src/Shared/Raycaster.lua"}},{"name":"Ignore","desc":"Ignores the value","params":[{"name":"tableOrInstance","desc":"","lua_type":"Instance | { Instance }"}],"returns":[],"function_type":"method","source":{"line":44,"path":"src/raycaster/src/Shared/Raycaster.lua"}},{"name":"FindPartOnRay","desc":"Repeats raycasts until exhausted attempts, or a result is found.","params":[{"name":"ray","desc":"","lua_type":"Ray"}],"returns":[{"desc":"","lua_type":"RaycastData?"}],"function_type":"method","source":{"line":63,"path":"src/raycaster/src/Shared/Raycaster.lua"}}],"properties":[{"name":"IgnoreList","desc":"Current ignore list","lua_type":"{ Instance }","readonly":true,"source":{"line":90,"path":"src/raycaster/src/Shared/Raycaster.lua"}},{"name":"Filter","desc":"The current filter function","lua_type":"function","source":{"line":95,"path":"src/raycaster/src/Shared/Raycaster.lua"}},{"name":"IgnoreWater","desc":"Whether or not to ignore water","lua_type":"boolean","source":{"line":100,"path":"src/raycaster/src/Shared/Raycaster.lua"}},{"name":"MaxCasts","desc":"Total number of casts allowed","lua_type":"number","source":{"line":105,"path":"src/raycaster/src/Shared/Raycaster.lua"}}],"types":[{"name":"RaycastData","desc":"Raycast data used by filter functions of the Raycaster.","fields":[{"name":"Part","lua_type":"Instance","desc":""},{"name":"Position","lua_type":"Vector3","desc":""},{"name":"Normal","lua_type":"Vector3","desc":""},{"name":"Material","lua_type":"Enum.Material","desc":""}],"source":{"line":20,"path":"src/raycaster/src/Shared/Raycaster.lua"}}],"name":"Raycaster","desc":"Repeats raycasting attempts while ignoring items via a filter function","source":{"line":5,"path":"src/raycaster/src/Shared/Raycaster.lua"}}')}}]);