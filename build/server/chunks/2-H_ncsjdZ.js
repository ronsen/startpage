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
const component = async () => component_cache ??= (await import('./_page.svelte-3yTCn7gi.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.kCFI-Ezw.js","_app/immutable/chunks/scheduler.T6Z1JCpH.js","_app/immutable/chunks/index.BvfX4X9Y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-H_ncsjdZ.js.map
