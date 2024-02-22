import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute } from './ssr-mdArggYB.js';

const Clock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let day;
  let date;
  let month;
  let year;
  let hours;
  let minutes;
  let seconds;
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let time = /* @__PURE__ */ new Date();
  day = days[time.getDay()];
  date = time.getDate();
  month = months[time.getMonth()];
  year = time.getFullYear();
  hours = time.getHours().toString().padStart(2, "0");
  minutes = time.getMinutes().toString().padStart(2, "0");
  seconds = time.getSeconds().toString().padStart(2, "0");
  return `<div class="flex justify-between gap-3 uppercase text-xs text-gray-100 font-bold"><div>${escape(day)}, ${escape(date)} ${escape(month)} ${escape(year)}</div> <div>${escape(hours)}:${escape(minutes)}:${escape(seconds)}</div></div>`;
});
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { engine } = $$props;
  let q;
  let e;
  if ($$props.engine === void 0 && $$bindings.engine && engine !== void 0)
    $$bindings.engine(engine);
  return `<form method="get"><div class="w-full join"> <input type="text" class="w-full input input-bordered join-item" required autofocus${add_attribute("this", q, 0)}> <select class="select select-bordered join-item"${add_attribute("this", e, 0)}><option disabled selected${add_attribute("value", engine, 0)}>${escape(engine)}</option><option value="DUCKDUCKGO" data-svelte-h="svelte-2tadwq">DuckDuckGo</option><option value="BING" data-svelte-h="svelte-eznx9q">Bing</option><option value="BRAVE" data-svelte-h="svelte-29d6ye">Brave</option><option value="GOOGLE" data-svelte-h="svelte-jwkbey">Google</option><option value="YAHOO" data-svelte-h="svelte-1nymr4b">Yahoo!</option><option value="YOUTUBE" data-svelte-h="svelte-raqse8">YouTube</option></select> <button type="submit" class="btn btn-primary join-item" data-svelte-h="svelte-17xspnq"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path></svg></button></div></form>`;
});
function extractDomain(link) {
  const url = new URL(link);
  return url.hostname;
}
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let { name } = $$props;
  const domain = extractDomain(url);
  const icon = `https://icon.horse/icon/${domain}`;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<div class="inline-flex items-center gap-1">  <img${add_attribute("src", icon, 0)} class="w-4 h-4 cursor-pointer"${add_attribute("alt", name, 0)}> <a${add_attribute("href", url, 0)} class="hover:text-white">${escape(name)}</a></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="mb-3">${validate_component(Clock, "Clock").$$render($$result, {}, {}, {})}</section> <section class="mb-10">${validate_component(Search, "Search").$$render($$result, { engine: data.engine }, {}, {})}</section> <section class="mb-10"><h4 class="uppercase text-xs font-bold mb-3" data-svelte-h="svelte-17ucb3h">Favorite Links:</h4> <div class="grid grid-cols-3 gap-3"><ul><li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://www.youtube.com/",
      name: "YouTube"
    },
    {},
    {}
  )}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://twitter.com/",
      name: "Twitter"
    },
    {},
    {}
  )}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://www.instagram.com/",
      name: "Instagram"
    },
    {},
    {}
  )}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://www.reddit.com/",
      name: "Reddit"
    },
    {},
    {}
  )}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://news.ycombinator.com/",
      name: "Hacker News"
    },
    {},
    {}
  )}</li></ul> <ul><li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://www.vidio.com/",
      name: "Vidio"
    },
    {},
    {}
  )}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://www.twitch.tv/",
      name: "Twitch"
    },
    {},
    {}
  )}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://www.tiktok.com/",
      name: "TikTok"
    },
    {},
    {}
  )}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://open.spotify.com/",
      name: "Spotify"
    },
    {},
    {}
  )}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://music.youtube.com/",
      name: "YouTube Music"
    },
    {},
    {}
  )}</li></ul> <ul><li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://github.com/",
      name: "Github"
    },
    {},
    {}
  )}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://www.inoreader.com/",
      name: "Inoreader"
    },
    {},
    {}
  )}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://feedly.com/",
      name: "Feedly"
    },
    {},
    {}
  )}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://translate.google.com/",
      name: "Google Translate"
    },
    {},
    {}
  )}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://chat.openai.com/",
      name: "ChatGPT"
    },
    {},
    {}
  )}</li></ul></div></section> <section class="mb-10"><h4 class="uppercase text-xs font-bold mb-3" data-svelte-h="svelte-axlx55">Other Links:</h4> <div class="grid grid-cols-3 gap-3 mb-3">${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://web.whatsapp.com/",
      name: "WhatsApp"
    },
    {},
    {}
  )} ${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://www.messenger.com/",
      name: "Messenger"
    },
    {},
    {}
  )} ${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://web.telegram.org/",
      name: "Telegram"
    },
    {},
    {}
  )}</div> <div class="grid grid-cols-3 gap-3"><ul><li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://aniwave.to/trending",
      name: "Aniwave"
    },
    {},
    {}
  )}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://psarips.com/",
      name: "PSArips"
    },
    {},
    {}
  )}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://pahe.in/",
      name: "Pahe Movies"
    },
    {},
    {}
  )}</li></ul> <ul><li>${validate_component(Link, "Link").$$render($$result, { url: "https://kick.com/", name: "Kick" }, {}, {})}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://www.viddsee.com/",
      name: "Viddsee"
    },
    {},
    {}
  )}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://fmoviesz.to/home",
      name: "FMoviesz"
    },
    {},
    {}
  )}</li></ul> <ul><li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://www.threads.net/",
      name: "Threads"
    },
    {},
    {}
  )}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://mail.hetanews.com/",
      name: "Heta Mail"
    },
    {},
    {}
  )}</li> <li>${validate_component(Link, "Link").$$render(
    $$result,
    {
      url: "https://www.google.com/",
      name: "Google"
    },
    {},
    {}
  )}</li></ul></div></section> <div class="absolute top-0 right-0 p-4" data-svelte-h="svelte-1ik2hyp"><a href="/settings" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"></path><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"></path></svg></a></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3yTCn7gi.js.map
