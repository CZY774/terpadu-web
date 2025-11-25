<script lang="ts">
	import { onMount } from 'svelte';
	import { getSchedules, addSchedule } from '$lib/db';

	let username = $state('');
	let schedules = $state([]);
	let showModal = $state(false);
	let selectedDate = $state(19);

	let newSchedule = $state({ title: '', date: '', time: '' });

	onMount(() => {
		username = localStorage.getItem('username') || 'LOU';
		loadSchedules();
	});

	function loadSchedules() {
		schedules = getSchedules().filter(s => s.date === new Date().toISOString().split('T')[0]);
	}

	function handleAddSchedule() {
		if (newSchedule.title && newSchedule.date && newSchedule.time) {
			addSchedule(newSchedule.title, '', newSchedule.date, newSchedule.time, '');
			loadSchedules();
			showModal = false;
			newSchedule = { title: '', date: '', time: '' };
		}
	}
</script>

<div class="max-w-4xl mx-auto">
	<h1 class="text-3xl font-bold text-[#2E3192] mb-4">GOOD MORNING, {username.toUpperCase()}</h1>
	<h2 class="text-2xl font-bold text-[#2E3192] mb-6">MY SCHEDULE</h2>

	<!-- Today's Schedules -->
	<div class="bg-[#C4D82E] rounded-[2.5rem] p-8 mb-6">
		<div class="space-y-4">
			{#each schedules as schedule}
				<div class="flex items-center gap-4">
					<div class="w-4 h-4 rounded-full bg-[#FF6B35]"></div>
					<div>
						<p class="font-bold text-[#2E3192] text-lg">{schedule.title}</p>
						<p class="text-[#2E3192]">{schedule.time}</p>
					</div>
				</div>
			{:else}
				<p class="text-[#2E3192] text-lg">No schedules</p>
			{/each}
		</div>
	</div>

	<!-- Calendar -->
	<div class="bg-[#C4D82E] rounded-[2.5rem] p-8 mb-6">
		<h3 class="text-2xl font-bold text-[#2E3192] mb-4">CALENDAR</h3>
		<h4 class="text-xl font-bold text-[#2E3192] mb-4">NOVEMBER</h4>
		<div class="grid grid-cols-7 gap-3 text-center">
			{#each ['S','M','T','W','T','F','S'] as day}
				<div class="font-bold text-[#2E3192] text-lg">{day}</div>
			{/each}
			{#each Array.from({length: 30}, (_, i) => i + 1) as day}
				<button
					class="w-10 h-10 rounded-full {day === selectedDate ? 'bg-[#2E3192] text-white' : 'text-[#2E3192]'} font-bold text-lg hover:bg-[#2E3192] hover:text-white transition"
					on:click={() => selectedDate = day}
				>
					{day}
				</button>
			{/each}
		</div>
	</div>

	<!-- Category Icons -->
	<div class="bg-[#C4D82E] rounded-[2.5rem] p-8">
		<h3 class="text-2xl font-bold text-[#2E3192] mb-6">CATEGORY EVENT</h3>
		<div class="flex gap-6 justify-center flex-wrap">
			<img src="/Artboard 9.png" alt="Category" class="w-20 h-20" />
			<img src="/Artboard 3.png" alt="Category" class="w-20 h-20" />
			<img src="/Artboard 4.png" alt="Category" class="w-20 h-20" />
			<img src="/Artboard 5.png" alt="Category" class="w-20 h-20" />
		</div>
	</div>
</div>

<!-- Modal -->
{#if showModal}
	<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
		<div class="bg-[#F5F1E8] rounded-[2.5rem] p-8 w-full max-w-md">
			<h3 class="text-3xl font-bold text-[#2E3192] mb-6">NEW SCHEDULE</h3>
			<form on:submit|preventDefault={handleAddSchedule} class="space-y-4">
				<input
					type="text"
					bind:value={newSchedule.title}
					placeholder="NAME EVENT"
					class="w-full px-6 py-4 rounded-2xl bg-gray-200 focus:outline-none font-bold"
				/>
				<input
					type="date"
					bind:value={newSchedule.date}
					class="w-full px-6 py-4 rounded-2xl bg-gray-200 focus:outline-none font-bold"
				/>
				<input
					type="time"
					bind:value={newSchedule.time}
					class="w-full px-6 py-4 rounded-2xl bg-gray-200 focus:outline-none font-bold"
				/>
				<div class="flex gap-3 pt-4">
					<button type="submit" class="flex-1 py-4 bg-[#FF6B35] text-white font-bold rounded-2xl text-lg">Save</button>
					<button type="button" on:click={() => showModal = false} class="flex-1 py-4 bg-gray-300 font-bold rounded-2xl text-lg">Cancel</button>
				</div>
			</form>
		</div>
	</div>
{/if}
