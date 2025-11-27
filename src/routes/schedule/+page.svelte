<script lang="ts">
	import { onMount } from 'svelte';
	import { getSchedules } from '$lib/db';

	let username = $state('');
	let schedules = $state([]);
	let selectedDate = $state(20);

	onMount(() => {
		username = localStorage.getItem('username') || 'LOU';
		loadSchedules();
	});

	function loadSchedules() {
		schedules = getSchedules().filter((s) => s.date === new Date().toISOString().split('T')[0]);
	}
</script>

<div class="max-w-2xl mx-auto">
	<h1 class="text-2xl font-bold text-[#2E3192] mb-2">GOOD MORNING, {username.toUpperCase()}</h1>
	<h2 class="text-3xl font-bold text-[#2E3192] mb-8">MY SCHEDULE</h2>

	<div class="bg-[#C4D82E] rounded-[3rem] p-8 mb-8 min-h-[180px]">
		<div class="space-y-4">
			{#each schedules as schedule}
				<div class="flex items-start gap-3">
					<div class="w-5 h-5 rounded-full bg-[#FF6B35] flex-shrink-0 mt-1"></div>
					<div>
						<p class="font-bold text-[#2E3192] text-lg">{schedule.title}</p>
						<p class="text-[#2E3192]">{schedule.time}</p>
					</div>
				</div>
			{:else}
				<p class="text-[#2E3192]">No schedules</p>
			{/each}
		</div>
	</div>

	<h3 class="text-3xl font-bold text-[#2E3192] mb-6">CALENDAR</h3>
	<div class="bg-[#C4D82E] rounded-[3rem] p-8 mb-8">
		<h4 class="text-xl font-bold text-[#2E3192] mb-6">NOVEMBER</h4>
		<div class="grid grid-cols-7 gap-2 text-center mb-3">
			{#each ['S', 'M', 'T', 'W', 'T', 'F', 'S'] as day}
				<div class="font-bold text-[#2E3192]">{day}</div>
			{/each}
		</div>
		<div class="grid grid-cols-7 gap-2 text-center">
			{#each Array.from({ length: 30 }, (_, i) => i + 1) as day}
				<button
					class="w-10 h-10 rounded-full {day === 20
						? 'bg-[#2E3192] text-white'
						: 'text-[#2E3192]'} font-bold hover:bg-[#2E3192] hover:text-white transition"
					onclick={() => (selectedDate = day)}
				>
					{day}
				</button>
			{/each}
		</div>
	</div>

	<h3 class="text-3xl font-bold text-[#2E3192] mb-6">CATEGORY EVENT</h3>
	<div class="flex gap-4 justify-center flex-wrap">
		<div class="w-28 h-28 bg-[#C4D82E] rounded-[2rem] flex items-center justify-center">
			<img src="/Artboard 9.png" alt="Category" class="w-16 h-16 object-contain" />
		</div>
		<div class="w-28 h-28 bg-[#C4D82E] rounded-[2rem] flex items-center justify-center">
			<img src="/right-ribbon.png" alt="Category" class="w-16 h-16 object-contain" />
		</div>
		<div class="w-28 h-28 bg-[#C4D82E] rounded-[2rem] flex items-center justify-center">
			<img src="/full-mascot.png" alt="Category" class="w-16 h-16 object-contain" />
		</div>
		<div class="w-28 h-28 bg-[#C4D82E] rounded-[2rem] flex items-center justify-center">
			<img src="/peek-mascot.png" alt="Category" class="w-16 h-16 object-contain" />
		</div>
	</div>
</div>
