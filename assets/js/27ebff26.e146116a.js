"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75388],{3175:function(e){e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new camera state tweener","params":[{"name":"serviceBag","desc":"Service bag to find the CameraStackService in","lua_type":"ServiceBag"},{"name":"cameraEffect","desc":"A camera effect","lua_type":"CameraLike"},{"name":"speed","desc":"Speed that the camera tweener tweens at. Defaults to 20","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"CameraStateTweener"}],"function_type":"static","source":{"line":28,"path":"src/camera/src/Client/Utility/CameraStateTweener.lua"}},{"name":"GetPercentVisible","desc":"Returns percent visible, from 0 to 1.","params":[],"returns":[{"desc":"","lua_type":"number"}],"function_type":"method","source":{"line":61,"path":"src/camera/src/Client/Utility/CameraStateTweener.lua"}},{"name":"Show","desc":"Shows the camera to fade in.","params":[{"name":"doNotAnimate?","desc":"Optional, defaults to animating","lua_type":"boolean"}],"returns":[],"function_type":"method","source":{"line":69,"path":"src/camera/src/Client/Utility/CameraStateTweener.lua"}},{"name":"Hide","desc":"Hides the camera to fade in.","params":[{"name":"doNotAnimate?","desc":"Optional, defaults to animating","lua_type":"boolean"}],"returns":[],"function_type":"method","source":{"line":77,"path":"src/camera/src/Client/Utility/CameraStateTweener.lua"}},{"name":"IsFinishedHiding","desc":"Returns true if we\'re done hiding","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":85,"path":"src/camera/src/Client/Utility/CameraStateTweener.lua"}},{"name":"Finish","desc":"Hides the tweener, and invokes the callback once the tweener\\nis finished hiding.","params":[{"name":"doNotAnimate","desc":"Optional, defaults to animating","lua_type":"boolean?"},{"name":"callback","desc":"","lua_type":"function"}],"returns":[],"function_type":"method","source":{"line":95,"path":"src/camera/src/Client/Utility/CameraStateTweener.lua"}},{"name":"GetCameraEffect","desc":"Gets the current effect we\'re tweening","params":[],"returns":[{"desc":"","lua_type":"CameraEffect"}],"function_type":"method","source":{"line":114,"path":"src/camera/src/Client/Utility/CameraStateTweener.lua"}},{"name":"GetCameraBelow","desc":"Gets the camera below this camera on the camera stack","params":[],"returns":[{"desc":"","lua_type":"CameraEffect"}],"function_type":"method","source":{"line":122,"path":"src/camera/src/Client/Utility/CameraStateTweener.lua"}},{"name":"SetTarget","desc":"Sets the percent visible target","params":[{"name":"target","desc":"","lua_type":"number"},{"name":"doNotAnimate","desc":"Optional, defaults to animating","lua_type":"boolean?"}],"returns":[{"desc":"self","lua_type":"CameraStateTweener"}],"function_type":"method","source":{"line":132,"path":"src/camera/src/Client/Utility/CameraStateTweener.lua"}},{"name":"SetSpeed","desc":"Sets the speed of transition","params":[{"name":"speed","desc":"","lua_type":"number"}],"returns":[{"desc":"self","lua_type":"CameraStateTweener"}],"function_type":"method","source":{"line":146,"path":"src/camera/src/Client/Utility/CameraStateTweener.lua"}},{"name":"SetVisible","desc":"Sets whether the tweener is visible","params":[{"name":"isVisible","desc":"","lua_type":"boolean"},{"name":"doNotAnimate","desc":"Optional, defaults to animating","lua_type":"boolean?"}],"returns":[],"function_type":"method","source":{"line":157,"path":"src/camera/src/Client/Utility/CameraStateTweener.lua"}},{"name":"GetFader","desc":"Retrieves the fading camera being used to interpolate.","params":[],"returns":[{"desc":"","lua_type":"CameraEffect"}],"function_type":"method","source":{"line":169,"path":"src/camera/src/Client/Utility/CameraStateTweener.lua"}},{"name":"Destroy","desc":"Cleans up the fader, preventing any animation at all","params":[],"returns":[],"function_type":"method","source":{"line":176,"path":"src/camera/src/Client/Utility/CameraStateTweener.lua"}}],"properties":[],"types":[],"name":"CameraStateTweener","desc":"Makes transitions between states easier. Uses the `CameraStackService` to tween in and\\nout a new camera state Call `:Show()` and `:Hide()` to do so, and make sure to\\ncall `:Destroy()` after usage","source":{"line":8,"path":"src/camera/src/Client/Utility/CameraStateTweener.lua"}}')}}]);