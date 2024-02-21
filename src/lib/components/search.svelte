<script lang="ts">
	export let engine: string;

	let q: HTMLInputElement;
	let e: HTMLSelectElement;

	function handleSubmit() {
		const key: string  = q.value.replaceAll(' ', '+');
		const egn: string = e.value;

		let url: string = '';

		if (egn == 'GOOGLE') {
			url = `https://www.google.com/search?q=${key}`;
		} else if (egn == 'BING') {
			url = `https://www.bing.com/search?q=${key}`;
		} else if (egn == 'YAHOO') {
			url = `https://search.yahoo.com/search?p=${key}`;
		} else if (egn == 'BRAVE') {
			url = `https://search.brave.com/search?q=${key}`;
		} else if (egn == 'YOUTUBE') {
			url = `https://www.youtube.com/results?search_query=${key}`;
		} else {
			url = `https://duckduckgo.com/?q=${key}&ia=web`;
		}

		window.location.href = url;
	}
</script>

<form method="get" on:submit|preventDefault={handleSubmit}>
	<div class="w-full join">
		<!-- svelte-ignore a11y-autofocus -->
		<input bind:this={q} type="text" class="w-full input input-bordered join-item" required autofocus>
		<select bind:this={e} bind:value={engine} class="select select-bordered join-item">
			<option disabled selected>{engine}</option>
			<option value="DUCKDUCKGO">DuckDuckGo</option>
            <option value="BING">Bing</option>
            <option value="BRAVE">Brave</option>
            <option value="GOOGLE">Google</option>
            <option value="YAHOO">Yahoo!</option>
            <option value="YOUTUBE">YouTube</option>
		</select>
		<button type="submit" class="btn btn-primary join-item">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
				<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
			</svg>
		</button>
	</div>
</form>