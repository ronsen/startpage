<script lang="ts">
	import type { PageServerData } from "./$types";

	import Clock from "$lib/components/clock.svelte";
	import Search from "$lib/components/search.svelte";
    import Link from "$lib/components/link.svelte";

	export let data: PageServerData;
</script>

<section class="mb-3">
	<Clock />
</section>

<section class="mb-10">
	<Search engine={data.engine} />
</section>

<section class="mb-10">
	<h4 class="uppercase text-xs font-bold mb-3">Favorite Links:</h4>

	<div class="grid grid-cols-3 gap-3">
		<ul>
			<li><Link url="https://www.youtube.com/" name="YouTube" /></li>
			<li><Link url="https://twitter.com/" name="Twitter" /></li>
			<li><Link url="https://www.instagram.com/" name="Instagram" /></li>
			<li><Link url="https://www.reddit.com/" name="Reddit" /></li>
			<li><Link url="https://news.ycombinator.com/" name="Hacker News" /></li>
		</ul>
		<ul>
			<li><Link url="https://www.vidio.com/" name="Vidio" /></li>
			<li><Link url="https://www.twitch.tv/" name="Twitch" /></li>
			<li><Link url="https://www.tiktok.com/" name="TikTok" /></li>
			<li><Link url="https://open.spotify.com/" name="Spotify" /></li>
			<li><Link url="https://music.youtube.com/" name="YouTube Music" /></li>
		</ul>
		<ul>
			<li><Link url="https://github.com/" name="Github" /></li>
			<li><Link url="https://www.inoreader.com/" name="Inoreader" /></li>
			<li><Link url="https://feedly.com/" name="Feedly" /></li>
			<li><Link url="https://translate.google.com/" name="Google Translate" /></li>
			<li><Link url="https://chat.openai.com/" name="ChatGPT" /></li>
		</ul>
	</div>
</section>

<section class="mb-10">
	<h4 class="uppercase text-xs font-bold mb-3">Other Links:</h4>

	<div class="grid grid-cols-3 gap-3 mb-3">
		<Link url="https://web.whatsapp.com/" name="WhatsApp" />
		<Link url="https://www.messenger.com/" name="Messenger" />
		<Link url="https://web.telegram.org/" name="Telegram" />
		<Link url="https://guritan.vercel.app/" name="Guritan" />
		<Link url="https://asikin.vercel.app/" name="Asikin" />
		<Link url="https://ayatacak.vercel.app/" name="Ayat Acak Alkitab" />
	</div>

	<div class="grid grid-cols-3 gap-3">
		<ul>
			<li><Link url="https://aniwave.to/trending" name="Aniwave" /></li>
			<li><Link url="https://psarips.com/" name="PSArips" /></li>
			<li><Link url="https://pahe.in/" name="Pahe Movies" /></li>
		</ul>
		<ul>
			<li><Link url="https://kick.com/" name="Kick" /></li>
			<li><Link url="https://www.viddsee.com/" name="Viddsee" /></li>
			<li><Link url="https://fmoviesz.to/home" name="FMoviesz" /></li>
		</ul>
		<ul>
			<li><Link url="https://www.threads.net/" name="Threads" /></li>
			<li><Link url="https://mail.hetanews.com/" name="Heta Mail" /></li>
			<li><Link url="https://www.google.com/" name="Google" /></li>
		</ul>
	</div>
</section>

<div class="absolute top-0 right-0 p-4">
	<a href="/settings" class="hover:text-white">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
			<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
			<path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
		</svg>
	</a>
</div>