<script lang="ts">
	import { onMount } from 'svelte';
	import { getSchedules, getTasks, type Schedule, type Task } from '$lib/db';

	let completedSchedules = $state<Schedule[]>([]);
	let completedTasks = $state<Task[]>([]);

	onMount(() => {
		completedSchedules = getSchedules().filter((s) => s.completed);
		completedTasks = getTasks().filter((t) => t.completed);
	});
</script>

<div class="max-w-2xl mx-auto">
	<h1 class="text-3xl font-bold text-[#2E3192] mb-8">RECORD</h1>

	<div class="space-y-8">
		<section>
			<h2 class="text-2xl font-bold text-[#2E3192] mb-4">COMPLETED SCHEDULES</h2>
			<div class="bg-[#C4D82E] rounded-[3rem] p-6 min-h-[200px]">
				{#if completedSchedules.length > 0}
					<div class="space-y-4">
						{#each completedSchedules as schedule (schedule.id)}
							<div class="flex items-start gap-3">
								<div class="w-5 h-5 rounded-full bg-[#FF6B35] flex-shrink-0 mt-1"></div>
								<div>
									<p class="font-bold text-[#2E3192] text-lg">{schedule.title}</p>
									<p class="text-[#2E3192]">{schedule.date} at {schedule.time}</p>
								</div>
							</div>
						{/each}
					</div>
				{:else}
					<p class="text-[#2E3192]">No completed schedules</p>
				{/if}
			</div>
		</section>

		<section>
			<h2 class="text-2xl font-bold text-[#2E3192] mb-4">COMPLETED TASKS</h2>
			<div class="bg-[#C4D82E] rounded-[3rem] p-6 min-h-[200px]">
				{#if completedTasks.length > 0}
					<div class="space-y-4">
						{#each completedTasks as task (task.id)}
							<div class="flex items-start gap-3">
								<div class="w-5 h-5 rounded-full bg-[#FF6B35] flex-shrink-0 mt-1"></div>
								<div>
									<p class="font-bold text-[#2E3192] text-lg">{task.title}</p>
									<p class="text-[#2E3192]">Due: {task.dueDate}</p>
								</div>
							</div>
						{/each}
					</div>
				{:else}
					<p class="text-[#2E3192]">No completed tasks</p>
				{/if}
			</div>
		</section>
	</div>
</div>
