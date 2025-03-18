<script lang="ts">
	import type { Action } from "svelte/action";

	const date = new Date();
	const result = date.toLocaleDateString("en-GB", {
		weekday: "short",
		day: "2-digit",
		month: "short",
		year: "numeric",
	});

	const time: Action = (node) => {
		$effect(() => {
			const interval = setInterval(() => {
				const date = new Date();
				const result = date.toLocaleTimeString("en-GB", {
					hour12: false,
				});

				node.textContent = result;
			}, 1000);

			return () => {
				clearInterval(interval);
			};
		});
	};
</script>

<div class="flex justify-between gap-3 uppercase text-xs font-bold">
	<div>{result}</div>
	<div use:time></div>
</div>
