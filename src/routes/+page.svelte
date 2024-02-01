<script lang="ts">
	import Clock from "$lib/components/clock.svelte";
	import Search from "$lib/components/search.svelte";
    import Link from "$lib/components/link.svelte";
</script>

<section class="mb-3">
	<Clock />
</section>

<section class="mb-10">
	<Search />
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
		<Link url="https://guritan.vercel.app/" name="Guritan" />
		<Link url="https://asikin.vercel.app/" name="Asikin" />
		<Link url="https://ayatacak.vercel.app/" name="Ayat Acak Alkitab" />
	</div>

	<div class="grid grid-cols-3 gap-3">
		<ul>
			<li><Link url="https://aniwave.to/trending" name="Aniwave" /></li>
			<li><Link url="https://psarips.com/" name="PSArips" /></li>
			<li><Link url="https://pahe.me/" name="Pahe Movies" /></li>
		</ul>
		<ul>
			<li><Link url="https://kick.com/" name="Kick" /></li>
			<li><Link url="https://www.viddsee.com/" name="Viddsee" /></li>
			<li><Link url="https://movie-web.app/" name="movie-web" /></li>
		</ul>
		<ul>
			<li><Link url="https://www.threads.net/" name="Threads" /></li>
			<li><Link url="https://mail.hetanews.com/" name="Heta Mail" /></li>
			<li><Link url="https://www.google.com/" name="Google" /></li>
		</ul>
	</div>
</section>
