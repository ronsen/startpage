<script lang="ts">
	import type { LinkObject } from "$lib";
	import { Pencil } from "@lucide/svelte";

	interface Props {
		id: number;
		url: string;
		name: string;
		links: LinkObject[];
		load: any;
	}

	let { id, url, name, links, load }: Props = $props();

	let dialog: HTMLDialogElement;
	let newName: string = $state(name);
	let newUrl: string = $state(url);

	function submit() {
		links[id].name = newName;
		links[id].url = newUrl;
		
		localStorage.setItem("links", JSON.stringify(links));

		dialog.close();

		load();
	}
</script>

<button
	onclick={() => dialog.showModal()}
	class="cursor-pointer text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 dark:hover:text-zinc-400"
	><Pencil size={16} /></button
>

<dialog
	bind:this={dialog}
	class="m-auto border border-zinc-100 dark:border-zinc-800 rounded-lg shadow-lg w-full md:w-1/2 dark:text-white/60 dark:bg-zinc-900 backdrop:backdrop-blur-xs"
>
	<form onsubmit={submit}>
		<div class="p-4">
			<h3 class="font-semibold mb-3">Update link</h3>
			<div class="mb-4">
				<input
					type="text"
					bind:value={newName}
					placeholder="Name"
					class="w-full p-2 border border-zinc-200 dark:border-black dark:bg-black dark:text-white focus:outline-hidden rounded-lg"
					required
				/>
			</div>
			<div class="mb-4">
				<input
					type="url"
					bind:value={newUrl}
					placeholder="URL"
					class="w-full p-2 border border-zinc-200 dark:border-black dark:bg-black dark:text-white focus:outline-hidden rounded-lg"
					required
				/>
			</div>
		</div>
		<div
			class="flex justify-between gap-4 items-center p-4 bg-zinc-100 dark:bg-zinc-800"
		>
			<button
				onclick={() => dialog.close()}
				class="px-3 py-2 text-sm border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-700 text-black/90 dark:text-white/90 hover:bg-white hover:dark:bg-zinc-600 rounded-lg cursor-pointer"
				>Cancel</button
			>
			<button
				type="submit"
				class="px-3 py-2 text-sm border border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-white/90 dark:text-black/90 hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-lg cursor-pointer"
				>Save</button
			>
		</div>
	</form>
</dialog>