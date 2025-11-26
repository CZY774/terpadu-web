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

<div class="max-w-4xl mx-auto relative">
	<svg class="absolute -top-8 right-0 w-2/3 h-24" viewBox="0 0 400 100" preserveAspectRatio="xMaxYMin slice">
		<path d="M 0,50 Q 100,0 200,40 T 400,50" fill="none" stroke="#2E3192" stroke-width="10" />
		<path d="M 0,50 Q 100,0 200,40 T 400,50" fill="none" stroke="#F5F1E8" stroke-width="6" transform="translate(0, 6)" />
		<path d="M 0,50 Q 100,0 200,40 T 400,50" fill="none" stroke="#FF6B35" stroke-width="6" transform="translate(0, 12)" />
	</svg>

	<h1 class="text-2xl font-bold text-[#2E3192] mb-2">GOOD MORNING, {username.toUpperCase()}</h1>
	<h2 class="text-3xl font-bold text-[#2E3192] mb-6">MY SCHEDULE</h2>

	<!-- Today's Schedules -->
	<div class="bg-[#C4D82E] rounded-[2.5rem] p-6 mb-6">
		<div class="space-y-3">
			{#each schedules as schedule}
				<div class="flex items-start gap-3">
					<div class="w-5 h-5 rounded-full bg-[#FF6B35] flex-shrink-0 mt-1"></div>
					<div>
						<p class="font-bold text-[#2E3192] text-lg leading-tight">{schedule.title}</p>
						<p class="text-[#2E3192]">{schedule.time}</p>
					</div>
				</div>
			{:else}
				<p class="text-[#2E3192]">No schedules</p>
			{/each}
		</div>
	</div>

	<!-- Calendar -->
	<div class="mb-6">
		<h3 class="text-3xl font-bold text-[#2E3192] mb-4">CALENDAR</h3>
		<div class="bg-[#C4D82E] rounded-[2.5rem] p-6">
			<h4 class="text-xl font-bold text-[#2E3192] mb-4">NOVEMBER</h4>
			<div class="grid grid-cols-7 gap-2 text-center">
				{#each ['S','M','T','W','T','F','S'] as day}
					<div class="font-bold text-[#2E3192]">{day}</div>
				{/each}
				{#each Array.from({length: 30}, (_, i) => i + 1) as day}
					<button
						class="w-10 h-10 rounded-full {day === selectedDate ? 'bg-[#2E3192] text-white' : 'text-[#2E3192]'} font-bold hover:bg-[#2E3192] hover:text-white transition"
						on:click={() => selectedDate = day}
					>
						{day}
					</button>
				{/each}
			</div>
		</div>
	</div>

	<!-- Category Icons -->
	<div class="mb-6">
		<h3 class="text-3xl font-bold text-[#2E3192] mb-4">CATEGORY EVENT</h3>
		<div class="flex gap-4 justify-center flex-wrap">
			<div class="w-24 h-24 bg-[#C4D82E] rounded-3xl flex items-center justify-center">
				<img src="/Artboard 9.png" alt="Category" class="w-16 h-16" />
			</div>
			<div class="w-24 h-24 bg-[#C4D82E] rounded-3xl flex items-center justify-center">
				<img src="/Artboard 3.png" alt="Category" class="w-16 h-16" />
			</div>
			<div class="w-24 h-24 bg-[#C4D82E] rounded-3xl flex items-center justify-center">
				<img src="/Artboard 4.png" alt="Category" class="w-16 h-16" />
			</div>
			<div class="w-24 h-24 bg-[#C4D82E] rounded-3xl flex items-center justify-center">
				<img src="/Artboard 5.png" alt="Category" class="w-16 h-16" />
			</div>
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
