<script lang="ts">
	import { extractDomain } from "$lib";

	export let url: string;
	export let name: string;

	const domain: string = extractDomain(url);
	const icon: string = `https://icon.horse/icon/${domain}`;	
</script>

<a href={url} class="inline-flex items-center gap-1 hover:text-white">
	<img src={icon} class="w-4 h-4" alt={name}/>
	<span>{name}</span>
</a>
