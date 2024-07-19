<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import type { LinkObject } from "../../app";

	const dispatch = createEventDispatcher();

	export let url: string;
	export let name: string;
	export let links: LinkObject[];

	let destroy: HTMLDialogElement;

	const icon = name.charAt(0).toLowerCase();

	function popup() {
		window.open(url, "", "height=800,width=1300,toolbar=no,scrollbars=yes");
	}

	function deleteLink(url: string) {
		const i = links.findIndex((link) => link.url == url);
		links.splice(i, 1);

		localStorage.setItem("links", JSON.stringify(links));

		destroy.close();

		dispatch("refresh");
	}
</script>

<div class="flex justify-between items-center gap-3">
	<div class="inline-flex gap-2">
		<button
			class="cursor-pointer font-bold hover:text-white"
			on:click|preventDefault={popup}>{icon}</button
		>
		<a href={url} class="hover:text-white">{name}</a>
	</div>
	<button
		on:click|preventDefault={() => destroy.showModal()}
		class="hover:text-white"><i class="bi bi-x"></i></button
	>
</div>

<dialog bind:this={destroy} class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
				><i class="bi bi-x"></i></button
			>
		</form>
		<h3 class="text-lg font-bold">Delete this link?</h3>
		<p class="py-4">{name}</p>
		<div class="modal-action">
			<button
				on:click={() => destroy.close()}
				class="btn btn-neutral btn-sm">No</button
			>
			<button
				on:click={() => deleteLink(url)}
				class="btn btn-error btn-sm">Yes</button
			>
		</div>
	</div>
</dialog>
