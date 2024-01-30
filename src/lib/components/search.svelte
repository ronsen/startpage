<script lang="ts">
	let q: HTMLInputElement;
	let e: HTMLSelectElement;

	function handleSubmit() {
		const key: string  = q.value.replaceAll(' ', '+');
		const engine: string = e.value;
		
		let url: string = '';

		if (engine == 'GOOGLE') {
			url = `https://www.google.com/search?q=${key}`;
		} else if (engine == 'BING') {
			url = `https://www.bing.com/search?q=${key}`;
		} else if (engine == 'YAHOO') {
			url = `https://search.yahoo.com/search?p=${key}`;
		} else if (engine == 'BRAVE') {
			url = `https://search.brave.com/search?q=${key}`;
		} else {
			url = `https://duckduckgo.com/?q=${key}&ia=web`;
		}

		window.location.href = url;
	}
</script>

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
			</select>
		</div>
		<button type="submit" class="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-bold outline-none uppercase">Search</button>
	</div>
</form>