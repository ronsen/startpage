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
		client: {"start":"_app/immutable/entry/start.sdMj_SxQ.js","app":"_app/immutable/entry/app.3nvtgqUJ.js","imports":["_app/immutable/entry/start.sdMj_SxQ.js","_app/immutable/chunks/entry.BapkU6Fp.js","_app/immutable/chunks/scheduler.nyHa0Dw6.js","_app/immutable/entry/app.3nvtgqUJ.js","_app/immutable/chunks/scheduler.nyHa0Dw6.js","_app/immutable/chunks/index.NMmB5RE5.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-NqIIjapb.js')),
			__memo(() => import('./chunks/1-UVAZTyx8.js')),
			__memo(() => import('./chunks/2-az7929Kj.js')),
			__memo(() => import('./chunks/3-k8jMfUVM.js'))
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
