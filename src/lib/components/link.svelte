<script lang="ts">
	import type { LinkObject } from "$lib";

	interface Props {
		url: string;
		name: string;
		links: LinkObject[];
		load: any;
	}

	let { url, name, links, load }: Props = $props();

	let destroy: HTMLDialogElement;

	const icon = name.charAt(0).toLowerCase();

	function popup() {
		window.open(url, "", "height=800,width=1400,toolbar=no,scrollbars=yes");
	}

	function deleteLink(url: string) {
		const i = links.findIndex((link) => link.url == url);
		links.splice(i, 1);

		localStorage.setItem("links", JSON.stringify(links));

		destroy.close();

		load();
	}
</script>

<div class="flex justify-between items-center gap-3">
	<div class="inline-flex gap-2">
		<button class="cursor-pointer font-semibold" onclick={popup}
			>{icon}</button
		>
		<a href={url}>{name}</a>
	</div>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button onclick={() => destroy.showModal()}
		><i class="bi bi-x hover:bg-black hover:rounded"></i></button
	>
</div>

<dialog
	bind:this={destroy}
	class="p-6 rounded-lg shadow-lg w-full md:w-1/2 text-white/70 bg-zinc-900 backdrop:backdrop-blur-sm"
>
	<form method="dialog">
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button class="absolute right-2 top-2"
			><i class="bi bi-x hover:bg-black hover:rounded"></i></button
		>
	</form>
	<h3 class="font-semibold">Delete this link?</h3>
	<p class="py-4">{name}</p>
	<div class="text-right">
		<button
			onclick={() => destroy.close()}
			class="px-3 py-2 text-sm border border-zinc-800 bg-zinc-800 text-white/90 hover:bg-zinc-700 rounded-lg"
			>No</button
		>
		<button
			onclick={() => deleteLink(url)}
			class="px-3 py-2 text-sm border border-red-800 bg-red-500 text-white hover:bg-red-600 rounded-lg focus:outline-none"
			>Yes</button
		>
	</div>
</dialog>
