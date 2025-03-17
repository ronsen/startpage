<script lang="ts">
	import type { Action } from "svelte/action";

	const time: Action = (node) => {
		$effect(() => {
			const interval = setInterval(() => {
				const time = new Date();
				const hours = time.getHours().toString().padStart(2, "0");
				const minutes = time.getMinutes().toString().padStart(2, "0");
				const seconds = time.getSeconds().toString().padStart(2, "0");

				node.textContent = `${hours}:${minutes}:${seconds}`;
			}, 1000);

			return () => {
				clearInterval(interval);
			};
		});
	};
</script>

<div class="flex justify-between gap-3 uppercase text-xs font-bold">
	<div>{new Date().toDateString()}</div>
	<div use:time></div>
</div>
