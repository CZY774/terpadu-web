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

<div class="max-w-2xl mx-auto">
	<h1 class="text-2xl font-bold text-[#2E3192] mb-2">GOOD MORNING, {username.toUpperCase()}!</h1>
	<h2 class="text-3xl font-bold text-[#2E3192] mb-8">TODAY EVENT</h2>

	<div class="bg-[#C4D82E] rounded-[3rem] p-8 mb-8 relative min-h-[240px]">
		<img src="/Artboard 5.png" alt="Mascot" class="w-24 absolute -top-8 left-6" />
		<div class="pt-16 space-y-4">
			{#each schedules as schedule}
				<div class="flex items-start gap-3">
					<div class="w-5 h-5 rounded-full bg-[#FF6B35] flex-shrink-0 mt-1"></div>
					<div>
						<p class="font-bold text-[#2E3192] text-lg">{schedule.title}</p>
						<p class="text-[#2E3192]">{schedule.time}</p>
					</div>
				</div>
			{:else}
				<p class="text-[#2E3192]">No events today</p>
			{/each}
		</div>
	</div>

	<h2 class="text-3xl font-bold text-[#2E3192] mb-8">MY TASK</h2>

	<div class="bg-[#C4D82E] rounded-[3rem] p-8 relative min-h-[280px] pb-20">
		<div class="space-y-4">
			{#each tasks as task}
				<div class="flex items-start gap-3">
					<div class="w-5 h-5 rounded-full bg-[#FF6B35] flex-shrink-0 mt-1"></div>
					<div>
						<p class="font-bold text-[#2E3192] text-lg">{task.title}</p>
						<p class="text-[#2E3192]">at {task.dueDate}</p>
					</div>
				</div>
			{:else}
				<p class="text-[#2E3192]">No pending tasks</p>
			{/each}
		</div>
		<img src="/Artboard 2.png" alt="Mascot" class="w-36 absolute -bottom-2 right-6" />
	</div>
</div>
