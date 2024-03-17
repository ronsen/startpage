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
		client: {"start":"_app/immutable/entry/start.hyXYFoyr.js","app":"_app/immutable/entry/app.DRQ06gT8.js","imports":["_app/immutable/entry/start.hyXYFoyr.js","_app/immutable/chunks/entry.CyY1ZB4d.js","_app/immutable/chunks/scheduler.T6Z1JCpH.js","_app/immutable/entry/app.DRQ06gT8.js","_app/immutable/chunks/scheduler.T6Z1JCpH.js","_app/immutable/chunks/index.BvfX4X9Y.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-iCKZHill.js')),
			__memo(() => import('./chunks/1-qGfWTqnE.js')),
			__memo(() => import('./chunks/2-Ct_eaf8Z.js')),
			__memo(() => import('./chunks/3-CYqMZQj3.js'))
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
