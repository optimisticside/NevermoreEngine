"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99886],{47936:function(e){e.exports=JSON.parse('{"functions":[{"name":"isBrio","desc":"Returns whether a value is a Brio.\\n\\n```lua\\nprint(Brio.isBrio(\\"yolo\\")) --\x3e false\\n```","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":76,"path":"src/brio/src/Shared/Brio.lua"}},{"name":"new","desc":"Constructs a new Brio.\\n\\n\\n```lua\\nlocal brio = Brio.new(\\"a\\", \\"b\\")\\nprint(brio:GetValue()) --\x3e a b\\n```","params":[{"name":"...","desc":"Brio values","lua_type":"any"}],"returns":[{"desc":"","lua_type":"Brio"}],"function_type":"static","source":{"line":92,"path":"src/brio/src/Shared/Brio.lua"}},{"name":"GetDiedSignal","desc":"Gets a signal that will fire when the Brio dies. If the brio is already dead\\ncalling this method will error.\\n\\n:::info\\nCalling this while the brio is already dead will throw a error.\\n:::\\n\\n```lua\\nlocal brio = Brio.new(\\"a\\", \\"b\\")\\nbrio:GetDiedSignal():Connect(function()\\n\\tprint(\\"Brio died\\")\\nend)\\n\\nbrio:Kill() --\x3e Brio died\\nbrio:Kill() -- no output\\n```","params":[],"returns":[{"desc":"","lua_type":"Signal"}],"function_type":"method","source":{"line":118,"path":"src/brio/src/Shared/Brio.lua"}},{"name":"IsDead","desc":"Returns true is the brio is dead.\\n\\n```lua\\nlocal brio = Brio.new(\\"a\\", \\"b\\")\\nprint(brio:IsDead()) --\x3e false\\n\\nbrio:Kill()\\n\\nprint(brio:IsDead()) --\x3e true\\n```","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":145,"path":"src/brio/src/Shared/Brio.lua"}},{"name":"ErrorIfDead","desc":"Throws an error if the Brio is dead.\\n\\n```lua\\nbrio.DEAD:ErrorIfDead() --\x3e ERROR: [Brio.ErrorIfDead] - Brio is dead\\n```","params":[],"returns":[],"function_type":"method","source":{"line":156,"path":"src/brio/src/Shared/Brio.lua"}},{"name":"ToMaid","desc":"Constructs a new Maid which will clean up when the brio dies.\\nWill error if the Brio is dead.\\n\\n:::info\\nCalling this while the brio is already dead will throw a error.\\n:::\\n\\n```lua\\nlocal brio = Brio.new(\\"a\\")\\nlocal maid = brio:ToMaid()\\nmaid:GiveTask(function()\\n\\tprint(\\"Cleaning up!\\")\\nend)\\nbrio:Kill() --\x3e Cleaning up!\\n```","params":[],"returns":[{"desc":"","lua_type":"Maid"}],"function_type":"method","source":{"line":181,"path":"src/brio/src/Shared/Brio.lua"}},{"name":"GetValue","desc":"If the brio is not dead, will return the values unpacked from the brio.\\n\\n:::info\\nCalling this while the brio is already dead will throw a error. Values should\\nnot be used past the lifetime of the brio, and can be considered invalid.\\n:::\\n\\n```lua\\nlocal brio = Brio.new(\\"a\\", 1, 2)\\nprint(brio:GetValue()) --\x3e \\"a\\" 1 2\\nbrio:Kill()\\n\\nprint(brio:GetValue()) --\x3e ERROR: Brio is dead\\n```","params":[],"returns":[{"desc":"","lua_type":"any"}],"function_type":"method","source":{"line":211,"path":"src/brio/src/Shared/Brio.lua"}},{"name":"Destroy","desc":"Kills the Brio.\\n\\n:::info\\nYou can call this multiple times and it will not error if the brio is dead.\\n:::\\n\\n```lua\\nlocal brio = Brio.new(\\"hi\\")\\nprint(brio:GetValue()) --\x3e \\"hi\\"\\nbrio:Kill()\\n\\nprint(brio:GetValue()) --\x3e ERROR: Brio is dead\\n```","params":[],"returns":[],"function_type":"method","source":{"line":232,"path":"src/brio/src/Shared/Brio.lua"}},{"name":"Kill","desc":"Alias for Destroy.","params":[],"returns":[],"function_type":"method","source":{"line":251,"path":"src/brio/src/Shared/Brio.lua"}}],"properties":[{"name":"DEAD","desc":"An already dead brio which may be used for identity purposes.\\n\\n```lua\\nprint(Brio.DEAD:IsDead()) --\x3e true\\n```","lua_type":"Brio","source":{"line":263,"path":"src/brio/src/Shared/Brio.lua"}}],"types":[],"name":"Brio","desc":"Brios wrap a value (or tuple of values) and are used to convey the lifetime of that\\nobject. The brio is better than a maid, by providing the following constraints:\\n\\n- Can be in 2 states, dead or alive.\\n- While alive, can retrieve values.\\n- While dead, retrieving values is forbidden.\\n- Died will fire once upon death.\\n\\nBrios encapsulate the \\"lifetime\\" of a valid resource. Unlike a maid, they\\n- Can only die once, ensuring duplicate calls never occur.\\n- Have less memory leaks. Memory leaks in maids can occur when use of the maid occurs\\n  after the cleanup of the maid has occured, in certain race conditions.\\n- Cannot be reentered, i.e. cannot retrieve values after death.\\n\\n:::info\\nCalling `brio:Destroy()` or `brio:Kill()` after death does nothing. Brios cannot\\nbe resurrected.\\n:::\\n\\nBrios are useful for downstream events where you want to emit a resource. Typically\\nbrios should be killed when their source is killed. Brios are intended to be merged\\nwith downstream brios so create a chain of reliable resources.\\n\\n```lua\\nlocal brio = Brio.new(\\"a\\", \\"b\\")\\nprint(brio:GetValue()) --\x3e a b\\nprint(brio:IsDead()) --\x3e false\\n\\nbrio:GetDiedSignal():Connect(function()\\n\\tprint(\\"Hello from signal!\\")\\nend)\\nbrio:ToMaid():GiveTask(function()\\n\\tprint(\\"Hello from maid cleanup!\\")\\nend)\\nbrio:Kill()\\n--\x3e Hello from signal!\\n--\x3e Hello from maid cleanup!\\n\\nprint(brio:IsDead()) --\x3e true\\nprint(brio:GetValue()) --\x3e ERROR: Brio is dead\\n```\\n\\n## Design philosophy\\n\\nBrios are designed to solve this issue where we emit an object with a lifetime associated with it from an\\nObservable stream. This resource is only valid for some amount of time (for example, while the object is\\nin the Roblox data model).\\n\\nIn order to know how long we can keep this object/use it, we wrap the object with a Brio, which denotes\\n the lifetime of the object.\\n\\nModeling this with pure observables is very tricky because the subscriber will have to also monitor/emit\\na similar object with less clear conventions. For example  an observable that emits the object, and then nil on death.","source":{"line":58,"path":"src/brio/src/Shared/Brio.lua"}}')}}]);