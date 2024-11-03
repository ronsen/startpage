<script lang="ts">
	import type { LinkObject } from "$lib";

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
<button onclick={() => create.showModal()}
	><i class="bi bi-plus hover:bg-black hover:rounded"></i></button
>

<dialog
	bind:this={create}
	class="border border-zinc-800 rounded-lg shadow-lg w-full md:w-1/2 text-white/60 bg-zinc-900 backdrop:backdrop-blur-sm"
>
	<form onsubmit={submit}>
		<div class="p-4">
			<h3 class="font-semibold mb-3">Add new link</h3>
			<div class="mb-4">
				<input
					type="text"
					bind:value={name}
					placeholder="Name"
					class="w-full p-2 rounded-lg bg-black border border-zinc-800"
					required
				/>
			</div>
			<div class="mb-4">
				<input
					type="url"
					bind:value={url}
					placeholder="URL"
					class="w-full p-2 rounded-lg bg-black border border-zinc-800"
					required
				/>
			</div>
		</div>
		<div class="flex justify-between gap-4 items-center p-4 bg-zinc-800">
			<button
				onclick={() => create.close()}
				class="px-3 py-2 text-sm border border-zinc-700 bg-zinc-700 text-white/90 hover:bg-zinc-600 rounded-lg"
				>Cancel</button
			>
			<button
				type="submit"
				class="px-3 py-2 text-sm border border-zinc-100 bg-zinc-100 text-black/90 hover:bg-zinc-200 rounded-lg"
				>Save</button
			>
		</div>
	</form>
</dialog>
