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

	<div class="grid grid-cols-3 gap-3 leading-loose">
		<ul>
			<li><Link url="https://www.youtube.com/" name="YouTube" icon="y" /></li>
			<li><Link url="https://twitter.com/" name="Twitter" icon="t" /></li>
			<li><Link url="https://www.instagram.com/" name="Instagram" icon="i" /></li>
			<li><Link url="https://www.reddit.com/" name="Reddit" icon="r" /></li>
			<li><Link url="https://news.ycombinator.com/" name="Hacker News" icon="h" /></li>
		</ul>
		<ul>
			<li><Link url="https://www.vidio.com/" name="Vidio" icon="v" /></li>
			<li><Link url="https://www.twitch.tv/" name="Twitch" icon="t" /></li>
			<li><Link url="https://www.tiktok.com/" name="TikTok" icon="t" /></li>
			<li><Link url="https://open.spotify.com/" name="Spotify" icon="s" /></li>
			<li><Link url="https://music.youtube.com/" name="YouTube Music" icon="y" /></li>
		</ul>
		<ul>
			<li><Link url="https://github.com/" name="Github" icon="g" /></li>
			<li><Link url="https://www.inoreader.com/" name="Inoreader" icon="i" /></li>
			<li><Link url="https://feedly.com/" name="Feedly" icon="f" /></li>
			<li><Link url="https://translate.google.com/" name="Google Translate" icon="g" /></li>
			<li><Link url="https://chat.openai.com/" name="ChatGPT" icon="c" /></li>
		</ul>
	</div>
</section>

<section class="mb-10">
	<h4 class="uppercase text-xs font-bold mb-3">Other Links:</h4>

	<div class="grid grid-cols-3 gap-3 mb-3 leading-loose">
		<Link url="https://web.whatsapp.com/" name="WhatsApp" icon="w" />
		<Link url="https://www.messenger.com/" name="Messenger" icon="m" />
		<Link url="https://web.telegram.org/" name="Telegram" icon="t" />
	</div>
</section>