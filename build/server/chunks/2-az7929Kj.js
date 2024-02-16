const load = async ({ cookies }) => {
  const engine = cookies.get("engine") ?? "DUCKDUCKGO";
  return { engine };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-d4K_-LUX.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.wpz5UTH_.js","_app/immutable/chunks/scheduler.nyHa0Dw6.js","_app/immutable/chunks/index.NMmB5RE5.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-az7929Kj.js.map
