<script lang="ts">
	import type { LinkObject } from "../../app";

	let create: HTMLDialogElement;
	let name: string;
	let url: string;

	export let links: LinkObject[] = [];

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
	}
</script>

<button on:click={() => create.showModal()}
	><i class="bi bi-plus hover:bg-black hover:rounded"></i></button
>

<dialog
	bind:this={create}
	class="p-6 rounded-lg shadow-lg w-full md:w-1/2 text-white/70 bg-zinc-900"
>
	<form method="dialog">
		<button class="absolute right-2 top-2 hover:font-semibold"
			><i class="bi bi-x hover:bg-black hover:rounded"></i></button
		>
	</form>
	<h3 class="font-semibold">Add new link</h3>
	<div class="py-4">
		<form on:submit={submit}>
			<div class="mb-4">
				<input
					type="text"
					bind:value={name}
					placeholder="Name"
					class="w-full p-2 rounded-lg bg-black border border-zinc-800 focus:outline-none"
					required
				/>
			</div>
			<div class="mb-4">
				<input
					type="url"
					bind:value={url}
					placeholder="URL"
					class="w-full p-2 rounded-lg bg-black border border-zinc-800 focus:outline-none"
					required
				/>
			</div>
			<div class="text-right">
				<button
					type="submit"
					class="px-3 py-2 text-sm border border-zinc-800 bg-zinc-100 text-black hover:bg-zinc-200 rounded-lg focus:outline-none"
					>Save</button
				>
			</div>
		</form>
	</div>
</dialog>
