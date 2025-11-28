<script lang="ts">
	import { onMount } from 'svelte';
	import { getSchedules, getTasks, type Schedule, type Task } from '$lib/db';

	let username = $state('');
	let schedules = $state<Schedule[]>([]);
	let tasks = $state<Task[]>([]);

	onMount(() => {
		username = localStorage.getItem('username') || 'LOU';
		schedules = getSchedules()
			.filter((s) => s.date === new Date().toISOString().split('T')[0])
			.slice(0, 2);
		tasks = getTasks()
			.filter((t) => !t.completed)
			.slice(0, 2);
	});
</script>

<div class="max-w-[680px] mx-auto px-4">
	<h1 class="text-[2.5rem] md:text-[2rem] sm:text-[1.75rem] font-extrabold text-[#2E3192] mb-8 tracking-wide">
		GOOD MORNING, {username.toUpperCase()}!
	</h1>

	<div class="bg-[#C4D82E] rounded-[3rem] md:rounded-[2.5rem] sm:rounded-[2rem] p-10 md:p-7 sm:p-6 mb-10 relative min-h-[280px] md:min-h-[240px]">
		<img src="/peek-mascot.png" alt="Mascot" class="absolute -top-10 md:-top-8 sm:-top-8 left-6 sm:left-4 w-[140px] md:w-[90px] sm:w-[80px] h-auto z-10" />
		<h2 class="inline-block bg-[#C4D82E] text-[#2E3192] text-[2rem] md:text-[1.75rem] sm:text-[1.5rem] font-extrabold px-8 md:px-6 sm:px-6 py-4 md:py-3 sm:py-3 rounded-[2rem] mb-6 tracking-wide">
			TODAY EVENT
		</h2>
		<div class="flex flex-col gap-5 relative z-[1]">
			{#each schedules as schedule (schedule.id)}
				<div class="flex items-start gap-4">
					<div class="w-5 h-5 rounded-full bg-[#FF6B35] flex-shrink-0 mt-1"></div>
					<div>
						<p class="text-[1.5rem] md:text-[1.25rem] sm:text-[1.125rem] font-bold text-[#2E3192] leading-tight mb-1">
							{schedule.title}
						</p>
						<p class="text-[1.25rem] md:text-[1.125rem] sm:text-[1rem] text-[#2E3192] font-medium">
							{schedule.time}
						</p>
					</div>
				</div>
			{:else}
				<p class="text-[1.25rem] md:text-[1.125rem] sm:text-[1rem] text-[#2E3192] font-medium">No event today</p>
			{/each}
		</div>
	</div>

	<div class="bg-[#C4D82E] rounded-[3rem] md:rounded-[2.5rem] sm:rounded-[2rem] p-10 md:p-7 sm:p-6 mb-10 relative min-h-[280px] md:min-h-[240px]">
		<h2 class="text-[#2E3192] text-[2rem] md:text-[1.75rem] sm:text-[1.5rem] font-extrabold mb-6 tracking-wide">
			MY TASK
		</h2>
		<div class="flex flex-col gap-5 relative z-[1]">
			{#each tasks as task (task.id)}
				<div class="flex items-start gap-4">
					<div class="w-5 h-5 rounded-full bg-[#FF6B35] flex-shrink-0 mt-1"></div>
					<div>
						<p class="text-[1.5rem] md:text-[1.25rem] sm:text-[1.125rem] font-bold text-[#2E3192] leading-tight mb-1">
							{task.title}
						</p>
						<p class="text-[1.25rem] md:text-[1.125rem] sm:text-[1rem] text-[#2E3192] font-medium">
							at {task.dueDate}
						</p>
					</div>
				</div>
			{:else}
				<p class="text-[1.25rem] md:text-[1.125rem] sm:text-[1rem] text-[#2E3192] font-medium">No pending tasks</p>
			{/each}
		</div>
		<img src="/full-mascot.png" alt="Mascot" class="absolute -bottom-4 right-6 sm:right-4 w-[200px] md:w-[130px] sm:w-[110px] h-auto z-[5]" />
	</div>
</div>
