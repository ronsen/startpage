<script lang="ts">
	import type { LinkObject } from "$lib";
	import { X } from "@lucide/svelte";

	interface Props {
		url: string;
		name: string;
		links: LinkObject[];
		load: any;
	}

	let { url, links, load }: Props = $props();

	let destroy: HTMLDialogElement;

	function deleteLink(url: string) {
		const i = links.findIndex((link) => link.url == url);
		links.splice(i, 1);

		localStorage.setItem("links", JSON.stringify(links));

		destroy.close();

		load();
	}
</script>

<button
	onclick={() => destroy.showModal()}
	class="cursor-pointer text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 dark:hover:text-zinc-400"
	><X size={16} /></button
>

<dialog
	bind:this={destroy}
	class="m-auto border border-zinc-100 dark:border-zinc-800 rounded-lg shadow-lg w-full md:w-1/2 dark:text-white/60 dark:bg-zinc-900 backdrop:backdrop-blur-xs"
>
	<div class="p-4">
		<h3 class="font-semibold mb-3">Delete this link?</h3>
		<p>{name}</p>
	</div>
	<div
		class="flex justify-between gap-4 items-center p-4 bg-zinc-100 dark:bg-zinc-800"
	>
		<button
			onclick={() => destroy.close()}
			class="px-3 py-2 text-sm border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-700 text-black/90 dark:text-white/90 hover:bg-white hover:dark:bg-zinc-600 rounded-lg cursor-pointer"
			>No</button
		>
		<button
			onclick={() => deleteLink(url)}
			class="px-3 py-2 text-sm border border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-white/90 dark:text-black/90 hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-lg cursor-pointer"
			>Yes</button
		>
	</div>
</dialog>
