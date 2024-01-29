<script lang="ts">
    import Link from "$lib/components/link.svelte";

	let q: HTMLInputElement;
	let e: HTMLSelectElement;

	function handleSubmit() {
		const key: string  = q.value.replaceAll(' ', '+');
		const engine: string = e.value;
		let url: string = '';

		if (engine == 'DUCKDUCKGO') {
			url = `https://duckduckgo.com/?q=${key}`;
		}

		if (engine == 'GOOGLE') {
			url = `https://www.google.com/search?q=${key}`;
		}

		if (engine == 'BING') {
			url = `https://www.bing.com/search?q=${key}`;
		}

		if (engine == 'YAHOO') {
			url = `https://search.yahoo.com/search?p=${key}`;
		}

		if (engine == 'BRAVE') {
			url = `https://search.brave.com/search?q=${key}`;
		}

		if (engine == 'YANDEX') {
			url = `https://yandex.com/search/?text=${key}`;
		}

		window.location.href = url;
	}
</script>

<section class="mb-10">
	<form method="get" on:submit|preventDefault={handleSubmit}>
		<div class="grid grid-cols-7 gap-1">
			<div class="col-span-4">
				<!-- svelte-ignore a11y-autofocus -->
				<input bind:this={q}  type="text" class="w-full p-2 bg-zinc-600 text-gray-100 rounded-md outline-none font-bold" required autofocus>
			</div>
			<div class="col-span-2">
				<select bind:this={e} class="w-full p-2.5 bg-zinc-700 text-white rounded-md outline-none font-bold">
					<option value="DUCKDUCKGO">DuckDuckGo</option>
					<option value="GOOGLE">Google</option>
					<option value="BING">Bing</option>
					<option value="YAHOO">Yahoo!</option>
					<option value="BRAVE">Brave</option>
					<option value="Yandex">Yandex</option>
				</select>
			</div>
			<button type="submit" class="w-full p-2 bg-blue-500 rounded-md text-white font-bold outline-none">Search</button>
		</div>
	</form>
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

	<div class="grid grid-cols-3 gap-3">
		<ul>
			<li><Link url="https://aniwave.to/trending" name="Aniwave" /></li>
			<li><Link url="https://psarips.com/" name="PSArips" /></li>
			<li><Link url="https://pahe.me/" name="Pahe Movies" /></li>
		</ul>
		<ul>
			<li><Link url="https://open.spotify.com/" name="Spotify" /></li>
			<li><Link url="https://music.youtube.com/" name="YouTube Music" /></li>
			<li><Link url="https://www.dropbox.com/" name="Dropbox" /></li>
		</ul>
		<ul>
			<li><Link url="https://www.threads.net/" name="Threads" /></li>
			<li><Link url="https://mail.hetanews.com/" name="Heta Mail" /></li>
			<li><Link url="https://www.google.com/" name="Google" /></li>
		</ul>
	</div>
</section>