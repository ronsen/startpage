<script lang="ts">
	import type { LinkObject } from "$lib";
	import Delete from "./delete.svelte";

	interface Props {
		url: string;
		name: string;
		links: LinkObject[];
		load: any;
	}

	let { url, name, links, load }: Props = $props();

	const icon = name.charAt(0).toLowerCase();

	function popup() {
		window.open(url, "", "height=800,width=1400,toolbar=no,scrollbars=yes");
	}
</script>

<div class="flex justify-between items-center gap-3">
	<div class="inline-flex gap-2">
		<button class="cursor-pointer font-semibold" onclick={popup}
			>{icon}</button
		>
		<a href={url}>{name}</a>
	</div>
	<Delete {url} {name} {links} {load} />
</div>
