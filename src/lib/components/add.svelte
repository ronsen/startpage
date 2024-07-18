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
	><i class="bi bi-plus-circle"></i></button
>

<dialog bind:this={create} class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
				><i class="bi bi-x"></i></button
			>
		</form>
		<h3 class="text-lg font-bold">Add new link</h3>
		<div class="py-4">
			<form on:submit={submit}>
				<div class="mb-4">
					<input
						type="text"
						bind:value={name}
						placeholder="Name"
						class="input input-bordered w-full"
						required
					/>
				</div>
				<div class="mb-4">
					<input
						type="url"
						bind:value={url}
						placeholder="URL"
						class="input input-bordered w-full"
						required
					/>
				</div>
				<button type="submit" class="btn btn-primary">Save</button>
			</form>
		</div>
	</div>
</dialog>
