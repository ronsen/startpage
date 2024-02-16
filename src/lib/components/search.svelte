<script lang="ts">
	export let engine: string;

	let q: HTMLInputElement;

	function handleSubmit() {
		const key: string  = q.value.replaceAll(' ', '+');
		
		let url: string = '';

		if (engine == 'GOOGLE') {
			url = `https://www.google.com/search?q=${key}`;
		} else if (engine == 'BING') {
			url = `https://www.bing.com/search?q=${key}`;
		} else if (engine == 'YAHOO') {
			url = `https://search.yahoo.com/search?p=${key}`;
		} else if (engine == 'BRAVE') {
			url = `https://search.brave.com/search?q=${key}`;
		} else if (engine == 'YOUTUBE') {
			url = `https://www.youtube.com/results?search_query=${key}`;
		} else {
			url = `https://duckduckgo.com/?q=${key}&ia=web`;
		}

		window.location.href = url;
	}
</script>

<form method="get" on:submit|preventDefault={handleSubmit}>
	<div class="relative">
		<div class="col-span-4">
			<!-- svelte-ignore a11y-autofocus -->
			<input bind:this={q} type="text" class="w-full p-2 pr-20 bg-zinc-600 text-gray-100 rounded-md outline-none font-bold" required autofocus>
		</div>
		<div class="absolute top-0 right-0">
			<button type="submit" class="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-r-md text-white font-bold outline-none uppercase">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
					<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
				</svg>
			</button>
		</div>
	</div>
</form>