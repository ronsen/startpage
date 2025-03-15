<script lang="ts">
	import { Search } from "@lucide/svelte";

	let q: HTMLInputElement;
	let e: HTMLSelectElement;

	let engine = $state("GOOGLE");

	function handleSubmit() {
		const key: string = q.value.replaceAll(" ", "+");
		const egn: string = e.value;

		let url: string = "";

		if (egn == "GOOGLE") {
			url = `https://www.google.com/search?q=${key}`;
		} else if (egn == "BING") {
			url = `https://www.bing.com/search?q=${key}`;
		} else if (egn == "YAHOO") {
			url = `https://search.yahoo.com/search?p=${key}`;
		} else if (egn == "BRAVE") {
			url = `https://search.brave.com/search?q=${key}`;
		} else if (egn == "YOUTUBE") {
			url = `https://www.youtube.com/results?search_query=${key}`;
		} else {
			url = `https://duckduckgo.com/?q=${key}&ia=web`;
		}

		window.location.href = url;
	}
</script>

<form method="get" onsubmit={handleSubmit}>
	<div class="flex">
		<!-- svelte-ignore a11y_autofocus -->
		<input
			autofocus
			bind:this={q}
			class="w-full p-2 border border-zinc-100 dark:border-black bg-zinc-100 dark:bg-black dark:text-white/90 focus:outline-hidden rounded-l-lg"
			required
			type="text"
		/>
		<select
			bind:this={e}
			bind:value={engine}
			class="p-2 border border-zinc-100 dark:border-black bg-zinc-100 dark:bg-black dark:text-white/90 focus:outline-hidden"
		>
			<option disabled selected>{engine}</option>
			<option value="DUCKDUCKGO">DuckDuckGo</option>
			<option value="BING">Bing</option>
			<option value="BRAVE">Brave</option>
			<option value="GOOGLE">Google</option>
			<option value="YAHOO">Yahoo!</option>
			<option value="YOUTUBE">YouTube</option>
		</select>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button
			class="p-2 border border-zinc-100 dark:bg-black bg-zinc-100 dark:border-black dark:text-white/90 focus:outline-hidden rounded-r-lg cursor-pointer"
			type="submit"><Search size={16} /></button
		>
	</div>
</form>
