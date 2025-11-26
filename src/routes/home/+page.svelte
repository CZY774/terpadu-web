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
	<h1 class="text-2xl font-bold text-[#2E3192] mb-6">GOOD MORNING, {username.toUpperCase()}!</h1>

	<!-- Today Events -->
	<div class="bg-[#C4D82E] rounded-[2.5rem] p-6 mb-6 relative">
		<img src="/Artboard 5.png" alt="Mascot" class="w-20 absolute -top-8 left-4" />
		<h2 class="text-xl font-bold text-[#2E3192] mb-4 pt-6">TODAY EVENT</h2>
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
				<p class="text-[#2E3192]">No events today</p>
			{/each}
		</div>
	</div>

	<!-- My Tasks -->
	<div class="bg-[#C4D82E] rounded-[2.5rem] p-6 relative pb-20">
		<img src="/Artboard 2.png" alt="Mascot" class="w-32 absolute -bottom-2 right-4" />
		<h2 class="text-xl font-bold text-[#2E3192] mb-4">MY TASK</h2>
		<div class="space-y-3">
			{#each tasks as task}
				<div class="flex items-start gap-3">
					<div class="w-5 h-5 rounded-full bg-[#FF6B35] flex-shrink-0 mt-1"></div>
					<div>
						<p class="font-bold text-[#2E3192] text-lg leading-tight">{task.title}</p>
						<p class="text-[#2E3192]">at {task.dueDate}</p>
					</div>
				</div>
			{:else}
				<p class="text-[#2E3192]">No pending tasks</p>
			{/each}
		</div>
	</div>
</div>
