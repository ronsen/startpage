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
	><svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="currentColor"
		class="bi bi-plus-circle"
		viewBox="0 0 16 16"
	>
		<path
			d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
		/>
		<path
			d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
		/>
	</svg></button
>

<dialog bind:this={create} class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
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
