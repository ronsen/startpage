<script lang="ts">
	export let url: string;
	export let name: string;

	const icon = name.charAt(0).toLowerCase();

	function popup() {
		window.open(url, "", "height=800,width=1300,toolbar=no,scrollbars=yes");
	}
</script>

<div class="inline-flex gap-2">
	<button
		class="cursor-pointer font-bold hover:text-white"
		on:click|preventDefault={popup}>{icon}</button
	>
	<a href={url} class="hover:text-white">{name}</a>
</div>
