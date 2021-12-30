"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16967],{65475:function(e){e.exports=JSON.parse('{"functions":[{"name":"promiseProductInfo","desc":"Wraps [MarketplaceService.GetProductInfo] and retrieves information about","params":[{"name":"assetId","desc":"","lua_type":"number"},{"name":"infoType","desc":"","lua_type":"InfoType"}],"returns":[{"desc":"","lua_type":"Promise<AssetProductInfo | GamepassOrDeveloperProductInfo>"}],"function_type":"static","source":{"line":70,"path":"src/marketplaceutils/src/Shared/MarketplaceUtils.lua"}},{"name":"promiseUserOwnsGamePass","desc":"Retrieves whether a player owns a gamepass.","params":[{"name":"userId","desc":"","lua_type":"number"},{"name":"gamePassId","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"static","source":{"line":96,"path":"src/marketplaceutils/src/Shared/MarketplaceUtils.lua"}},{"name":"promisePlayerOwnsAsset","desc":"Retrieves whether a player owns an asset, such as a hat or some other item.","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"assetId","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"static","source":{"line":121,"path":"src/marketplaceutils/src/Shared/MarketplaceUtils.lua"}}],"properties":[],"types":[{"name":"CreatorProductInfo","desc":"Product info about the creator. See [MarketplaceService.GetProductInfo].","fields":[{"name":"CreatorType","lua_type":"string","desc":"Either User or Group"},{"name":"CreatorTargetId","lua_type":"number","desc":"The ID of the creator user or group"},{"name":"Name","lua_type":"string","desc":"The name/username of the creator"},{"name":"Id","lua_type":"number","desc":"(Use CreatorTargetId instead)"}],"source":{"line":23,"path":"src/marketplaceutils/src/Shared/MarketplaceUtils.lua"}},{"name":"AssetProductInfo","desc":"Product info result for assets.","fields":[{"name":"Creator","lua_type":"CreatorProductInfo","desc":"A table of information describing the creator of the asset"},{"name":"AssetId","lua_type":"number","desc":"If InfoType was Asset, this is the ID of the given asset."},{"name":"AssetTypeId","lua_type":"number","desc":"The type of asset (e.g. place, model, shirt)*"},{"name":"IsForSale","lua_type":"boolean","desc":"Describes whether the asset is purchasable"},{"name":"IsLimited","lua_type":"boolean","desc":"Describes whether the asset is a \\"limited item\\" that is no longer (if ever) sold"},{"name":"IsLimitedUnique","lua_type":"boolean","desc":"Describes whether the asset is a \\"limited unique\\" (\\"Limited U\\") item"},{"name":"IsNew","lua_type":"boolean","desc":"Describes whether the asset is marked as \\"new\\" in the catalog"},{"name":"Remaining","lua_type":"number","desc":"The remaining number of items a limited unique item may be sold"},{"name":"Sales","lua_type":"number","desc":"The number of items the asset has been sold"},{"name":"Name","lua_type":"string","desc":"The name shown on the asset\'s page"},{"name":"Description","lua_type":"string","desc":"The description as shown on the asset\'s page; can be nil if blank"},{"name":"PriceInRobux","lua_type":"number","desc":"The cost of purchasing the asset using Robux"},{"name":"Created","lua_type":"string","desc":"Timestamp of when the asset was created, e.g. 2018-08-01T17:55:11.98Z"},{"name":"Updated","lua_type":"string","desc":"Timestamp of when the asset was last updated by its creator, e.g. 2018-08-01T17:55:11.98Z"},{"name":"ContentRatingTypeId","lua_type":"number","desc":"Indicates whether the item is marked as 13+ in catalog"},{"name":"MinimumMembershipLevel","lua_type":"number","desc":"The minimum subscription level necessary to purchase the item"},{"name":"IsPublicDomain","lua_type":"boolean","desc":"Describes whether the asset can be taken for free"}],"source":{"line":46,"path":"src/marketplaceutils/src/Shared/MarketplaceUtils.lua"}},{"name":"GamepassOrDeveloperProductInfo","desc":"Product info result for gamepasses.","fields":[{"name":"Creator","lua_type":"CreatorProductInfo","desc":"A table of information describing the creator of the asset"},{"name":"ProductId","lua_type":"number","desc":"If the InfoType was Product, this is the product ID"},{"name":"IconImageAssetId","lua_type":"number","desc":"This is the asset ID of the product/pass icon, or 0 if there isn\'t one"},{"name":"Name","lua_type":"string","desc":"The name shown on the asset\'s page"},{"name":"Description","lua_type":"string","desc":"The description as shown on the asset\'s page; can be nil if blank"},{"name":"PriceInRobux","lua_type":"number","desc":"The cost of purchasing the asset using Robux"},{"name":"Created","lua_type":"string","desc":"Timestamp of when the asset was created, e.g. 2018-08-01T17:55:11.98Z"},{"name":"Updated","lua_type":"string","desc":"Timestamp of when the asset was last updated by its creator, e.g. 2018-08-01T17:55:11.98Z"},{"name":"ContentRatingTypeId","lua_type":"number","desc":"Indicates whether the item is marked as 13+ in catalog"},{"name":"MinimumMembershipLevel","lua_type":"number","desc":"The minimum subscription level necessary to purchase the item"},{"name":"IsPublicDomain","lua_type":"boolean","desc":"Describes whether the asset can be taken for free"}],"source":{"line":63,"path":"src/marketplaceutils/src/Shared/MarketplaceUtils.lua"}}],"name":"MarketplaceUtils","desc":"Provides utility methods for MarketplaceService","source":{"line":5,"path":"src/marketplaceutils/src/Shared/MarketplaceUtils.lua"}}')}}]);