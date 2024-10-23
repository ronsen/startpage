<script lang="ts">
	import "../app.css";
</script>

<svelte:head>
	<title>Start Page</title>
</svelte:head>

<main class="container md:w-[700px] p-6 mx-auto md:my-24">
	<slot />
</main>

<footer class="absolute bottom-0 left-0 w-full py-3">
	<div class="flex justify-center">
		<a href="https://github.com/ronsen/startpage" target="_blank"><i class="bi bi-github"></i></a>
	</div>
</footer>
