<script lang="ts">
	import { onMount } from 'svelte';
	import { getTasks, type Task } from '$lib/db';

	let username = $state('');
	let tasks = $state<Task[]>([]);

	onMount(() => {
		username = localStorage.getItem('username') || 'LOU';
		loadTasks();
	});

	function loadTasks() {
		tasks = getTasks().filter((t) => !t.completed);
	}
</script>

<div class="max-w-2xl mx-auto">
	<h1 class="text-2xl font-bold text-[#2E3192] mb-2">GOOD MORNING, {username.toUpperCase()}</h1>
	<h2 class="text-3xl font-bold text-[#2E3192] mb-8">TODAY TASK</h2>

	<div class="bg-[#C4D82E] rounded-[3rem] p-6 mb-8">
		<div class="flex gap-3 justify-start overflow-x-auto">
			{#each [20, 21, 22, 23] as date, i (date)}
				<button
					class="px-6 py-3 rounded-[1.5rem] {i === 0
						? 'bg-[#2E3192] text-white'
						: 'bg-[#F5F1E8] text-[#2E3192]'} font-bold flex-shrink-0 border-2 {i === 0
						? 'border-[#2E3192]'
						: 'border-[#FF6B35]'} min-w-[90px]"
				>
					<div class="text-xl font-bold">{date}</div>
					<div class="text-sm">Nov</div>
					<div
						class="w-3 h-3 rounded-full {i === 0 ? 'bg-white' : 'bg-[#FF6B35]'} mx-auto mt-1"
					></div>
				</button>
			{/each}
		</div>
	</div>

	<h3 class="text-3xl font-bold text-[#2E3192] mb-6">TO DO</h3>
	<div class="bg-[#C4D82E] rounded-[3rem] p-8 min-h-[280px]">
		<div class="space-y-4">
			{#each tasks as task (task.id)}
				<div class="flex items-start gap-3">
					<div class="w-5 h-5 rounded-full bg-[#FF6B35] flex-shrink-0 mt-1"></div>
					<div>
						<p class="font-bold text-[#2E3192] text-lg">{task.title}</p>
						<p class="text-[#2E3192]">at {task.dueDate}</p>
					</div>
				</div>
			{:else}
				<p class="text-[#2E3192]">No tasks</p>
			{/each}
		</div>
	</div>
</div>
