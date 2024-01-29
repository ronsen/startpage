<script lang="ts">
	import { onMount } from "svelte";

	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];

	const months = [
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
		"December"
	];

	let time = new Date();

	$: day = days[time.getDay()];
	$: date = time.getDate();
	$: month = months[time.getMonth()];
	$: year = time.getFullYear();

	$: hours = time.getHours();
	$: minutes = time.getMinutes();
	$: seconds = time.getSeconds();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="flex justify-between gap-3 uppercase text-xs text-gray-100">
	<div>{day}, {date} {month} {year}</div>
	<div>{hours}:{minutes}:{seconds}</div>
</div>
