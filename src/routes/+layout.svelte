<script lang="ts">
	import { onMount, type Snippet } from "svelte";
	import { Code } from "@lucide/svelte";
	import "../app.css";

	onMount(() => {
		document.documentElement.classList.toggle(
			"dark",
			localStorage.theme === "dark" ||
				(!("theme" in localStorage) &&
					window.matchMedia("(prefers-color-scheme: dark)").matches),
		);
	});

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<title>Start Page</title>
</svelte:head>

<main class="container md:w-[700px] p-6 mx-auto md:my-24">
	{@render children()}
</main>

<footer class="absolute bottom-0 left-0 w-full py-3">
	<div class="flex justify-center">
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a href="https://github.com/ronsen/startpage" target="_blank"
			><Code size={16} /></a
		>
	</div>
</footer>
