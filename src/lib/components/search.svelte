<script lang="ts">
	let q: HTMLInputElement;
	let e: HTMLSelectElement;

	let engine = "GOOGLE";

	function handleSubmit() {
		const key: string = encodeURIComponent(q.value);
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

<form method="get" on:submit|preventDefault={handleSubmit}>
	<div class="w-full join">
		<!-- svelte-ignore a11y-autofocus -->
		<input
			bind:this={q}
			type="text"
			class="w-full input input-bordered join-item"
			required
			autofocus
		/>
		<select
			bind:this={e}
			bind:value={engine}
			class="select select-bordered join-item"
		>
			<option disabled selected>{engine}</option>
			<option value="DUCKDUCKGO">DuckDuckGo</option>
			<option value="BING">Bing</option>
			<option value="BRAVE">Brave</option>
			<option value="GOOGLE">Google</option>
			<option value="YAHOO">Yahoo!</option>
			<option value="YOUTUBE">YouTube</option>
		</select>
		<button type="submit" class="btn btn-neutral join-item"
			><i class="bi bi-search"></i></button
		>
	</div>
</form>
