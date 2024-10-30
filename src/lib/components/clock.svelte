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

	const day = $derived.by(() => days[time.getDay()]);
	const date = $derived.by(() => time.getDate());
	const month = $derived.by(() => months[time.getMonth()]);
	const year = $derived.by(() => time.getFullYear());

	const hours = $derived.by(() => time.getHours().toString().padStart(2, "0"));
	const minutes = $derived.by(() =>
		time.getMinutes().toString().padStart(2, "0"),
	);
	const seconds = $derived.by(() =>
		time.getSeconds().toString().padStart(2, "0"),
	);

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
