<script lang="ts">
    import Link from "$lib/components/link.svelte";
</script>

<section class="mb-10">
	<form action="https://duckduckgo.com/" method="get">
		<div class="grid grid-cols-5 gap-3">
			<div class="col-span-4">
				<!-- svelte-ignore a11y-autofocus -->
				<input type="text" name="q" class="w-full p-2 bg-zinc-600 text-gray-100 rounded-sm focus:outline-none" autofocus>
			</div>
			<button type="submit" class="w-full p-2 bg-blue-500 rounded-sm text-white font-bold">Search</button>
		</div>
	</form>
</section>

<section class="mb-10">
	<h4 class="uppercase text-xs font-bold mb-3">Favorites Links:</h4>

	<div class="grid grid-cols-3">
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
			<li><Link url="https://kick.com/" name="Kick" /></li>
			<li><Link url="https://www.viddsee.com/" name="Viddsee" /></li>
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

	<ul>
		<li><Link url="https://aniwave.to/trending" name="Aniwave" /></li>
		<li><Link url="https://open.spotify.com/" name="Spotify" /></li>
		<li><Link url="https://music.youtube.com/" name="YouTube Music" /></li>
		<li><Link url="https://psarips.com/" name="PSArips" /></li>
		<li><Link url="https://pahe.me/" name="Pahe Movies" /></li>
		<li><Link url="https://www.google.com/" name="Google" /></li>
	</ul>
</section>