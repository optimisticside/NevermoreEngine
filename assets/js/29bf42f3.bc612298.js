"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15244],{90705:function(e){e.exports=JSON.parse('{"functions":[{"name":"getPartsBoundingBox","desc":"Retrieves a bounding box for a given set of parts","params":[{"name":"parts","desc":"","lua_type":"{ Instance | { { CFrame: CFrame, Size: Vector3 } }"},{"name":"relativeTo","desc":"","lua_type":"CFrame?"}],"returns":[{"desc":"size","lua_type":"Vector3"},{"desc":"position","lua_type":"Vector3"}],"function_type":"static","source":{"line":16,"path":"src/boundingboxutils/src/Shared/BoundingBoxUtils.lua"}},{"name":"clampPointToBoundingBox","desc":"Clamps a point inside of a given bounding box\\n\\nSee: https://devforum.roblox.com/t/finding-the-closest-vector3-point-on-a-part-from-the-character/130679/2","params":[{"name":"cframe","desc":"CFrame of bounding box","lua_type":"CFrame"},{"name":"size","desc":"Size of bounding box","lua_type":"Vector3"},{"name":"point","desc":"Point to transform","lua_type":"Vector3"}],"returns":[{"desc":"Clamped point","lua_type":"Vector3"},{"desc":"Center of bounding box","lua_type":"Vector3"}],"function_type":"static","source":{"line":31,"path":"src/boundingboxutils/src/Shared/BoundingBoxUtils.lua"}},{"name":"pushPointToLieOnBoundingBox","desc":"Pushes a point to lie within the bounding box","params":[{"name":"cframe","desc":"CFrame of bounding box","lua_type":"CFrame"},{"name":"size","desc":"Size of bounding box","lua_type":"Vector3"},{"name":"point","desc":"Point to transform","lua_type":"Vector3"}],"returns":[{"desc":"","lua_type":"Vector3"}],"function_type":"static","source":{"line":49,"path":"src/boundingboxutils/src/Shared/BoundingBoxUtils.lua"}},{"name":"getChildrenBoundingBox","desc":"Given a parent, retrieve the bounding box for this parent","params":[{"name":"parent","desc":"","lua_type":"Instance"},{"name":"relativeTo","desc":"","lua_type":"CFrame?"}],"returns":[{"desc":"size","lua_type":"Vector3?"},{"desc":"position","lua_type":"Vector3?"}],"function_type":"static","source":{"line":66,"path":"src/boundingboxutils/src/Shared/BoundingBoxUtils.lua"}},{"name":"axisAlignedBoxSize","desc":"Returns the size of an axis aligned bounding box for a given CFrame","params":[{"name":"cframe","desc":"","lua_type":"CFrame"},{"name":"size","desc":"","lua_type":"Vector3"}],"returns":[],"function_type":"static","source":{"line":87,"path":"src/boundingboxutils/src/Shared/BoundingBoxUtils.lua"}},{"name":"getBoundingBox","desc":"Gets a boundingBox for the given data.\\n\\nSee: https://gist.github.com/zeux/1a67e8930df782d5474276e218831e22","params":[{"name":"data","desc":"List of things with both Size and CFrame","lua_type":"Instance | { { CFrame: CFrame; Size: Vector3 }"},{"name":"relativeTo","desc":"","lua_type":"CFrame?"}],"returns":[{"desc":"size","lua_type":"Vector3"},{"desc":"position","lua_type":"Vector3"}],"function_type":"static","source":{"line":112,"path":"src/boundingboxutils/src/Shared/BoundingBoxUtils.lua"}},{"name":"inBoundingBox","desc":"Returns if a point is in a bounding box","params":[{"name":"cframe","desc":"","lua_type":"CFrame"},{"name":"size","desc":"","lua_type":"Vector3"},{"name":"testPosition","desc":"","lua_type":"Vector3"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":166,"path":"src/boundingboxutils/src/Shared/BoundingBoxUtils.lua"}}],"properties":[],"types":[],"name":"BoundingBoxUtils","desc":"Bounding box utilties. Prefer model:GetBoundingBox() in most cases. However, sometimes grouping isn\'t possible.","source":{"line":5,"path":"src/boundingboxutils/src/Shared/BoundingBoxUtils.lua"}}')}}]);