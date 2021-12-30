"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97827],{73654:function(e){e.exports=JSON.parse('{"functions":[{"name":"isPromise","desc":"Determines whether a value is a promise or not.","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":26,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"new","desc":"Constructs a new promise.\\n\\n::warning\\nDo not yield within this func callback, as it will yield on the\\nmain thread. This is a performance optimization.\\n::","params":[{"name":"func","desc":"","lua_type":"(resolve: (...) -> (), reject: (...) -> ()) -> ()?"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":41,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"spawn","desc":"Initializes a new promise with the given function in a deferred wrapper.","params":[{"name":"func","desc":"","lua_type":"(resolve: (...) -> (), reject: (...) -> ()) -> ()?"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":61,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"defer","desc":"Initializes a new promise with the given function in a deferred wrapper.","params":[{"name":"func","desc":"","lua_type":"(resolve: (...) -> (), reject: (...) -> ()) -> ()?"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":75,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"resolved","desc":"Returns a resolved promise with the following values","params":[{"name":"...","desc":"","lua_type":"Values to resolve to"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":90,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"rejected","desc":"Returns a rejected promise with the following values","params":[{"name":"...","desc":"","lua_type":"Values to reject to"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":115,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"IsPending","desc":"Returns whether or not the promise is pending","params":[],"returns":[{"desc":"True if pending, false otherwise","lua_type":"bool"}],"function_type":"method","source":{"line":132,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"IsFulfilled","desc":"Returns whether or not the promise is fulfilled","params":[],"returns":[{"desc":"True if fulfilled","lua_type":"bool"}],"function_type":"method","source":{"line":141,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"IsRejected","desc":"Returns whether or not the promise is rejected","params":[],"returns":[{"desc":"True if rejected","lua_type":"bool"}],"function_type":"method","source":{"line":150,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"Wait","desc":"Yields until the promise is complete, and errors if an error\\nexists, otherwise returns the fulfilled results.","params":[],"returns":[{"desc":"","lua_type":"T"}],"function_type":"method","yields":true,"source":{"line":161,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"Yield","desc":"Yields until the promise is complete, then returns a boolean indicating\\nthe result, followed by the values from the promise.","params":[],"returns":[{"desc":"","lua_type":"boolean, T"}],"function_type":"method","yields":true,"source":{"line":194,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"Resolve","desc":"Promise resolution procedure, resolves the given values","params":[{"name":"...","desc":"","lua_type":"T"}],"returns":[],"function_type":"method","source":{"line":225,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"_fulfill","desc":"Fulfills the promise with the value","params":[{"name":"values","desc":"Params to fulfil with","lua_type":"{ T }"},{"name":"valuesLength","desc":"","lua_type":"number"}],"returns":[],"function_type":"method","private":true,"source":{"line":288,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"Reject","desc":"Rejects the promise with the values given","params":[{"name":"...","desc":"Params to reject with","lua_type":"T"}],"returns":[],"function_type":"method","source":{"line":307,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"Then","desc":"Handlers if/when promise is fulfilled/rejected. It takes up to two arguments, callback functions\\nfor the success and failure cases of the Promise. May return the same promise if certain behavior\\nis met.\\n\\n:::info\\nWe do not comply with 2.2.4 (onFulfilled or onRejected must not be called until the execution context stack\\ncontains only platform code). This means promises may stack overflow, however, it also makes promises a lot cheaper\\n:::\\n\\nIf/when promise is rejected, all respective onRejected callbacks must execute in the order of their\\noriginating calls to then.\\n\\nIf/when promise is fulfilled, all respective onFulfilled callbacks must execute in the order of their\\noriginating calls to then.","params":[{"name":"onFulfilled","desc":"Called if/when fulfilled with parameters","lua_type":"function"},{"name":"onRejected","desc":"Called if/when rejected with parameters","lua_type":"function"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":365,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"Tap","desc":"Like then, but the value passed down the chain is the resolved value of the promise, not\\nthe value returned from onFulfilled or onRejected\\n\\nWill still yield for the result if a promise is returned, but will discard the result.","params":[{"name":"onFulfilled","desc":"","lua_type":"function"},{"name":"onRejected","desc":"","lua_type":"function"}],"returns":[{"desc":"Returns self","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":389,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"Finally","desc":"Executes upon pending stop","params":[{"name":"func","desc":"","lua_type":"function"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":421,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"Catch","desc":"Catch errors from the promise","params":[{"name":"onRejected","desc":"","lua_type":"function"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":431,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"Destroy","desc":"Rejects the current promise. Utility left for Maid task","params":[],"returns":[],"function_type":"method","source":{"line":438,"path":"src/promise/src/Shared/Promise.lua"}},{"name":"GetResults","desc":"Returns the results from the promise","params":[],"returns":[],"function_type":"method","source":{"line":445,"path":"src/promise/src/Shared/Promise.lua"}}],"properties":[],"types":[],"name":"Promise","desc":"Promises, but without error handling as this screws with stack traces, using Roblox signals\\n\\nSee: https://promisesaplus.com/","source":{"line":8,"path":"src/promise/src/Shared/Promise.lua"}}')}}]);