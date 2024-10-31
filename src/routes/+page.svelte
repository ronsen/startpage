<script lang="ts">
	import { onMount } from "svelte";
	import type { LinkObject } from "$lib";

	import Clock from "$lib/components/clock.svelte";
	import Search from "$lib/components/search.svelte";
	import Link from "$lib/components/link.svelte";
	import Add from "$lib/components/add.svelte";

	let links: LinkObject[] = $state([]);

	onMount(() => load());

	function load() {
		const s: string | null = localStorage.getItem("links");

		if (s) {
			links = JSON.parse(s);
		} else {
			localStorage.setItem("links", JSON.stringify(links));
		}
	}
</script>

<section class="mb-3">
	<Clock />
</section>

<section class="mb-10">
	<Search />
</section>

<section class="mb-10">
	<div class="flex justify-between items-center gap-4 mb-4">
		<h4 class="uppercase text-xs font-bold">Favorite Links:</h4>

		<Add {links} {load} />
	</div>

	{#if links.length === 0}
		No links found.
	{/if}

	{#if links.length > 0}
		<div class="grid grid-cols-3 gap-3 leading-loose">
			{#each links as link}
				<Link
					url={link.url}
					name={link.name}
					{load}
					{links}
				/>
			{/each}
		</div>
	{/if}
</section>
