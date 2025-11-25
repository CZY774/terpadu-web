<script lang="ts">
	import { onMount } from 'svelte';
	import { getSchedules, getTasks } from '$lib/db';

	let username = $state('');
	let schedules = $state([]);
	let tasks = $state([]);

	onMount(() => {
		username = localStorage.getItem('username') || 'LOU';
		schedules = getSchedules().filter(s => s.date === new Date().toISOString().split('T')[0]).slice(0, 2);
		tasks = getTasks().filter(t => !t.completed).slice(0, 2);
	});
</script>

<div class="max-w-4xl mx-auto">
	<h1 class="text-3xl font-bold text-[#2E3192] mb-8">GOOD MORNING, {username.toUpperCase()}!</h1>

	<!-- Today Events -->
	<div class="bg-[#C4D82E] rounded-[2.5rem] p-8 mb-6 relative">
		<img src="/Artboard 5.png" alt="Mascot" class="w-20 absolute -top-10 left-6" />
		<h2 class="text-2xl font-bold text-[#2E3192] mb-6 mt-4">TODAY EVENT</h2>
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
				<p class="text-[#2E3192] text-lg">No events today</p>
			{/each}
		</div>
	</div>

	<!-- My Tasks -->
	<div class="bg-[#C4D82E] rounded-[2.5rem] p-8 relative">
		<img src="/Artboard 2.png" alt="Mascot" class="w-24 absolute -bottom-6 right-6" />
		<h2 class="text-2xl font-bold text-[#2E3192] mb-6">MY TASK</h2>
		<div class="space-y-4 pb-8">
			{#each tasks as task}
				<div class="flex items-center gap-4">
					<div class="w-4 h-4 rounded-full bg-[#FF6B35]"></div>
					<div>
						<p class="font-bold text-[#2E3192] text-lg">{task.title}</p>
						<p class="text-[#2E3192]">Due: {task.dueDate}</p>
					</div>
				</div>
			{:else}
				<p class="text-[#2E3192] text-lg">No pending tasks</p>
			{/each}
		</div>
	</div>
</div>
