<script lang="ts">
	import type { LinkObject } from "$lib";
	import { CirclePlus } from "@lucide/svelte";

	let create: HTMLDialogElement;
	let name: string = $state("");
	let url: string = $state("");

	let { links, load }: { links: LinkObject[]; load: any } = $props();

	function submit() {
		const s: string | null = localStorage.getItem("links");
		if (s) {
			links = JSON.parse(s);
		}

		links.push({ name, url });
		localStorage.setItem("links", JSON.stringify(links));

		name = "";
		url = "";
		create.close();

		load();
	}
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button onclick={() => create.showModal()} class="cursor-pointer"
	><CirclePlus size={16} /></button
>

<dialog
	bind:this={create}
	class="m-auto border border-zinc-100 dark:border-zinc-800 rounded-lg shadow-lg w-full md:w-1/2 dark:text-white/60 dark:bg-zinc-900 backdrop:backdrop-blur-xs"
>
	<form onsubmit={submit}>
		<div class="p-4">
			<h3 class="font-semibold mb-3">Add new link</h3>
			<div class="mb-4">
				<input
					type="text"
					bind:value={name}
					placeholder="Name"
					class="w-full p-2 border border-zinc-200 dark:border-black dark:bg-black dark:text-white focus:outline-hidden rounded-lg"
					required
				/>
			</div>
			<div class="mb-4">
				<input
					type="url"
					bind:value={url}
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
				onclick={() => create.close()}
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
