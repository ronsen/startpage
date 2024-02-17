const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.lLQxXy5g.js","app":"_app/immutable/entry/app.BJOEiEnn.js","imports":["_app/immutable/entry/start.lLQxXy5g.js","_app/immutable/chunks/entry.TCpPYOAq.js","_app/immutable/chunks/scheduler.T6Z1JCpH.js","_app/immutable/entry/app.BJOEiEnn.js","_app/immutable/chunks/scheduler.T6Z1JCpH.js","_app/immutable/chunks/index.BvfX4X9Y.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-f5GXyBhY.js')),
			__memo(() => import('./chunks/1-VhE-TLrg.js')),
			__memo(() => import('./chunks/2-uLYmcU0z.js')),
			__memo(() => import('./chunks/3-ViSqWkaZ.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
