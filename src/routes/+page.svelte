<script lang="ts">
	import { onMount } from "svelte";
	import type { LinkObject } from "../app";

	import Clock from "$lib/components/clock.svelte";
	import Search from "$lib/components/search.svelte";
	import Link from "$lib/components/link.svelte";
	import Add from "$lib/components/add.svelte";

	let links: LinkObject[] = [];

	onMount(() => load());

	function load() {
		const s: string | null = localStorage.getItem("links");

		if (s) {
			links = JSON.parse(s);
		}
	}

	function deleteLink(url: string) {
		if (confirm("Delete this link?")) {
			const i = links.findIndex((link) => link.url == url);
			links.splice(i, 1);

			localStorage.setItem("links", JSON.stringify(links));

			load();
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

		<Add bind:links />
	</div>

	{#if links.length == 0}
		No links found.
	{/if}

	{#if links.length > 0}
		<div class="grid grid-cols-3 gap-3 leading-loose">
			{#each links as link}
				<div class="flex justify-between items-center gap-3">
					<Link url={link.url} name={link.name} />
					<button
						on:click|preventDefault={deleteLink(link.url)}
						class="hover:text-white"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-x"
							viewBox="0 0 16 16"
						>
							<path
								d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
							/>
						</svg></button
					>
				</div>
			{/each}
		</div>
	{/if}
</section>
