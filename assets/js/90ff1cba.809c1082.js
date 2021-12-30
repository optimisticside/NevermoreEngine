"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92248],{83673:function(e){e.exports=JSON.parse('{"functions":[{"name":"append","desc":"Concats `target` with `source`.","params":[{"name":"target","desc":"Table to append to","lua_type":"table"},{"name":"source","desc":"Table read from","lua_type":"table"}],"returns":[{"desc":"parameter table","lua_type":"table"}],"function_type":"static","source":{"line":15,"path":"src/table/src/Shared/Table.lua"}},{"name":"merge","desc":"Shallow merges two tables without modifying either.","params":[{"name":"orig","desc":"Original table","lua_type":"table"},{"name":"new","desc":"Result","lua_type":"table"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":30,"path":"src/table/src/Shared/Table.lua"}},{"name":"values","desc":"Returns a list of all of the values that a table has.","params":[{"name":"source","desc":"Table source to extract values from","lua_type":"table"}],"returns":[{"desc":"A list with all the values the table has","lua_type":"table"}],"function_type":"static","source":{"line":47,"path":"src/table/src/Shared/Table.lua"}},{"name":"mergeLists","desc":"Shallow merges two lists without modifying either.","params":[{"name":"orig","desc":"Original table","lua_type":"table"},{"name":"new","desc":"Result","lua_type":"table"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":62,"path":"src/table/src/Shared/Table.lua"}},{"name":"swapKeyValue","desc":"Swaps keys with values, overwriting additional values if duplicated.","params":[{"name":"orig","desc":"Original table","lua_type":"table"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":79,"path":"src/table/src/Shared/Table.lua"}},{"name":"toList","desc":"Converts a table to a list.","params":[{"name":"_table","desc":"Table to convert to a list","lua_type":"table"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":93,"path":"src/table/src/Shared/Table.lua"}},{"name":"count","desc":"Counts the number of items in `_table`.\\nUseful since `__len` on table in Lua 5.2 returns just the array length.","params":[{"name":"_table","desc":"Table to count","lua_type":"table"}],"returns":[{"desc":"count","lua_type":"number"}],"function_type":"static","source":{"line":108,"path":"src/table/src/Shared/Table.lua"}},{"name":"copy","desc":"Shallow copies a table from target into a new table","params":[{"name":"target","desc":"Table to copy","lua_type":"table"}],"returns":[{"desc":"Result","lua_type":"table"}],"function_type":"static","source":{"line":122,"path":"src/table/src/Shared/Table.lua"}},{"name":"deepCopy","desc":"Deep copies a table including metatables","params":[{"name":"target","desc":"Table to deep copy","lua_type":"table"},{"name":"_context","desc":"Cntext to deepCopy the value in","lua_type":"table?"}],"returns":[{"desc":"Result","lua_type":"table"}],"function_type":"static","source":{"line":137,"path":"src/table/src/Shared/Table.lua"}},{"name":"deepOverwrite","desc":"Overwrites a table\'s value","params":[{"name":"target","desc":"Target table","lua_type":"table"},{"name":"source","desc":"Table to read from","lua_type":"table"}],"returns":[{"desc":"target","lua_type":"table"}],"function_type":"static","source":{"line":161,"path":"src/table/src/Shared/Table.lua"}},{"name":"getIndex","desc":"Gets an index by value, returning `nil` if no index is found.","params":[{"name":"haystack","desc":"To search in","lua_type":"table"},{"name":"needle","desc":"","lua_type":"Value to search for"}],"returns":[{"desc":"","lua_type":"The index of the value, if found"},{"desc":"if not found","lua_type":"nil"}],"function_type":"static","source":{"line":179,"path":"src/table/src/Shared/Table.lua"}},{"name":"stringify","desc":"Recursively prints the table. Does not handle recursive tables.","params":[{"name":"_table","desc":"Table to stringify","lua_type":"table"},{"name":"indent","desc":"Indent level","lua_type":"number?"},{"name":"output","desc":"Output string, used recursively","lua_type":"string?"}],"returns":[{"desc":"The table in string form","lua_type":"string"}],"function_type":"static","source":{"line":198,"path":"src/table/src/Shared/Table.lua"}},{"name":"contains","desc":"Returns whether `value` is within `table`","params":[{"name":"_table","desc":"To search in for value","lua_type":"table"},{"name":"value","desc":"Value to search for","lua_type":"any"}],"returns":[{"desc":"`true` if within, `false` otherwise","lua_type":"boolean"}],"function_type":"static","source":{"line":220,"path":"src/table/src/Shared/Table.lua"}},{"name":"overwrite","desc":"Overwrites an existing table with the source values.","params":[{"name":"target","desc":"Table to overwite","lua_type":"table"},{"name":"source","desc":"Source table to read from","lua_type":"table"}],"returns":[{"desc":"target","lua_type":"table"}],"function_type":"static","source":{"line":237,"path":"src/table/src/Shared/Table.lua"}},{"name":"take","desc":"Takes `count` entries from the table. If the table does not have\\nthat many entries, will return up to the number the table has to\\nprovide.","params":[{"name":"source","desc":"Source table to retrieve values from","lua_type":"table"},{"name":"count","desc":"Number of entries to take","lua_type":"number"}],"returns":[{"desc":"List with the entries retrieved","lua_type":"table"}],"function_type":"static","source":{"line":254,"path":"src/table/src/Shared/Table.lua"}},{"name":"readonly","desc":"Sets a metatable on a table such that it errors when\\nindexing a nil value","params":[{"name":"target","desc":"Table to error on indexing","lua_type":"table"}],"returns":[{"desc":"The same table, with the metatable set to readonly","lua_type":"table"}],"function_type":"static","source":{"line":278,"path":"src/table/src/Shared/Table.lua"}},{"name":"deepReadonly","desc":"Recursively sets the table as ReadOnly","params":[{"name":"target","desc":"Table to error on indexing","lua_type":"table"}],"returns":[{"desc":"The same table","lua_type":"table"}],"function_type":"static","source":{"line":288,"path":"src/table/src/Shared/Table.lua"}}],"properties":[],"types":[],"name":"Table","desc":"Provide a variety of utility table operations","source":{"line":5,"path":"src/table/src/Shared/Table.lua"}}')}}]);