<script lang="ts">
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	let time = $state(new Date());

	const day = $derived(days[time.getDay()]);
	const date = $derived(time.getDate());
	const month = $derived(months[time.getMonth()]);
	const year = $derived(time.getFullYear());

	const hours = $derived(time.getHours().toString().padStart(2, "0"));
	const minutes = $derived(time.getMinutes().toString().padStart(2, "0"));
	const seconds = $derived(time.getSeconds().toString().padStart(2, "0"));

	$effect(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="flex justify-between gap-3 uppercase text-xs font-bold">
	<div>{day}, {date} {month} {year}</div>
	<div>{hours}:{minutes}:{seconds}</div>
</div>
