<script lang="ts">
	import { extractDomain } from "$lib";

	export let url: string;
	export let name: string;

	const domain: string = extractDomain(url);
	const icon: string = `https://icon.horse/icon/${domain}`;

	function popup() {
		window.open(url, "", "height=800,width=1300,toolbar=no,scrollbars=yes");
	}
</script>

<div class="inline-flex items-center gap-1">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<img src={icon} class="w-4 h-4 cursor-pointer" on:click|preventDefault={popup} alt={name} />
	<a href={url} class="hover:text-white">{name}</a>
</div>