<script lang="ts">
	import { onMount } from 'svelte';
	import { getTasks, updateTask, type Task } from '$lib/db';
	import { SvelteDate } from 'svelte/reactivity';

	let username = $state('');
	let allTasks = $state<Task[]>([]);
	let selectedDateIndex = $state(0);
	let today = new SvelteDate();

	const dates = $derived.by(() => {
		return Array.from({ length: 4 }, (_, i) => {
			const date = new SvelteDate(today);
			date.setDate(today.getDate() + i);
			return {
				day: date.getDate(),
				month: date.toLocaleString('en-US', { month: 'short' }),
				fullDate: date.toISOString().split('T')[0]
			};
		});
	});

	const filteredTasks = $derived(
		allTasks.filter((t) => !t.completed && t.dueDate === dates[selectedDateIndex].fullDate)
	);

	onMount(() => {
		username = localStorage.getItem('username') || 'LOU';
		loadTasks();
	});

	function loadTasks() {
		allTasks = getTasks();
	}

	function toggleComplete(id: string, completed: boolean) {
		updateTask(id, { completed });
		loadTasks();
	}
</script>

<div class="max-w-2xl mx-auto" style="padding: 40px 20px 120px 20px;">
	<h1
		class="text-2xl font-bold text-[#2E3192] mb-2"
		style="letter-spacing: 0.02em; margin-bottom: 20px;"
	>
		GOOD MORNING, {username.toUpperCase()}
	</h1>
	<h2
		class="text-3xl font-bold text-[#2E3192] mb-8"
		style="letter-spacing: 0.02em; margin-bottom: 40px;"
	>
		TODAY TASK
	</h2>

	<div class="bg-[#C4D82E] rounded-[3rem] p-6 mb-8" style="margin-bottom: 40px;">
		<div class="flex gap-3 justify-start overflow-x-auto">
			{#each dates as date, i (date.fullDate)}
				<button
					onclick={() => (selectedDateIndex = i)}
					class="px-6 py-3 rounded-[1.5rem] {selectedDateIndex === i
						? 'bg-[#2E3192] text-white'
						: 'bg-[#F5F1E8] text-[#2E3192]'} font-bold flex-shrink-0 border-2 {selectedDateIndex ===
					i
						? 'border-[#2E3192]'
						: 'border-[#FF6B35]'} min-w-[90px]"
				>
					<div class="text-xl font-bold">{date.day}</div>
					<div class="text-sm">{date.month}</div>
					<div
						class="w-3 h-3 rounded-full {selectedDateIndex === i
							? 'bg-white'
							: 'bg-[#FF6B35]'} mx-auto mt-1"
					></div>
				</button>
			{/each}
		</div>
	</div>

	<h3
		class="text-3xl font-bold text-[#2E3192] mb-6"
		style="letter-spacing: 0.02em; margin-bottom: 40px; margin-top: 40px;"
	>
		TO DO
	</h3>
	<div class="bg-[#C4D82E] rounded-[3rem] p-8 min-h-[280px]">
		<div class="space-y-4">
			{#each filteredTasks as task (task.id)}
				<div class="flex items-start gap-3" style="padding: 40px">
					<button
						onclick={() => toggleComplete(task.id, true)}
						class="w-6 h-6 rounded-full border-2 border-[#FF6B35] bg-white flex-shrink-0 mt-1"
						aria-label="Mark complete"
					></button>
					<div>
						<p class="font-bold text-[#2E3192] text-lg">{task.title}</p>
						<p class="text-[#2E3192]">at {task.dueDate}</p>
					</div>
				</div>
			{:else}
				<p class="text-[#2E3192]" style="padding: 40px;">No tasks</p>
			{/each}
		</div>
	</div>
</div>
