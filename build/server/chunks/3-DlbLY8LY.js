import { r as redirect } from './index-DyoisQP2.js';

const load = async ({ cookies }) => {
  const engine = cookies.get("engine") ?? "DUCKDUCKGO";
  return { engine };
};
const actions = {
  default: async ({ request, cookies }) => {
    const { engine } = Object.fromEntries(await request.formData());
    cookies.set("engine", String(engine), {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30
    });
    redirect(302, "/");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DhHhhhQ0.js')).default;
const server_id = "src/routes/settings/+page.server.ts";
const imports = ["_app/immutable/nodes/3.DOGWAa0W.js","_app/immutable/chunks/scheduler.T6Z1JCpH.js","_app/immutable/chunks/index.BvfX4X9Y.js","_app/immutable/chunks/entry.DBFfIOUl.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-DlbLY8LY.js.map
