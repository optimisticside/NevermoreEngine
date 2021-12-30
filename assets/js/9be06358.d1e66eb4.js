"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22489],{92708:function(e){e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new BinderProvider.\\n\\n```lua\\nlocal serviceBag = ServiceBag.new()\\n\\n-- Usually in a separate file!\\nlocal binderProvider = BinderProvider.new(function(self, serviceBag)\\n\\tserviceBag:Add(Binder.new(\\"Bird\\", require(\\"Bird\\")))\\nend)\\n\\n-- Retrieve binders\\nlocal binders = serviceBag:GetService(binderProvider)\\n\\n-- Runs the game (including binders)\\nserviceBag:Init()\\nserviceBag:Start()\\n```","params":[{"name":"initMethod","desc":"","lua_type":"(self, serviceBag: ServiceBag)"}],"returns":[{"desc":"","lua_type":"BinderProvider"}],"function_type":"static","source":{"line":36,"path":"src/binder/src/Shared/BinderProvider.lua"}},{"name":"isBinderProvider","desc":"Retrieves whether or not its a binder provider","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"True if it is a binder provider","lua_type":"boolean"}],"function_type":"static","source":{"line":57,"path":"src/binder/src/Shared/BinderProvider.lua"}},{"name":"PromiseBinder","desc":"Resolves to the given binder given the binderName.","params":[{"name":"binderName","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Promise<Binder<T>>"}],"function_type":"method","source":{"line":67,"path":"src/binder/src/Shared/BinderProvider.lua"}},{"name":"Init","desc":"Initializes itself and all binders","params":[{"name":"...","desc":"","lua_type":"ServiceBag | any"}],"returns":[],"function_type":"method","source":{"line":93,"path":"src/binder/src/Shared/BinderProvider.lua"}},{"name":"PromiseBindersAdded","desc":"Returns a promise that will resolve once all binders are added.","params":[],"returns":[{"desc":"","lua_type":"Promise"}],"function_type":"method","source":{"line":106,"path":"src/binder/src/Shared/BinderProvider.lua"}},{"name":"PromiseBindersStarted","desc":"Returns a promise that will resolve once all binders are started.","params":[],"returns":[{"desc":"","lua_type":"Promise"}],"function_type":"method","source":{"line":115,"path":"src/binder/src/Shared/BinderProvider.lua"}},{"name":"Start","desc":"Starts all of the binders.","params":[],"returns":[],"function_type":"method","source":{"line":122,"path":"src/binder/src/Shared/BinderProvider.lua"}},{"name":"Get","desc":"Retrieves a binder given a tagName","params":[{"name":"tagName","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Binder<T>?"}],"function_type":"method","source":{"line":149,"path":"src/binder/src/Shared/BinderProvider.lua"}},{"name":"Add","desc":"Adds a binder given a tag name.","params":[{"name":"binder","desc":"","lua_type":"Binder<T>"}],"returns":[],"function_type":"method","source":{"line":159,"path":"src/binder/src/Shared/BinderProvider.lua"}}],"properties":[],"types":[],"name":"BinderProvider","desc":"Provides a basis for binders that can be retrieved anywhere","source":{"line":5,"path":"src/binder/src/Shared/BinderProvider.lua"}}')}}]);