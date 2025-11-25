<script lang="ts">
	import { onMount } from 'svelte';
	import { getTasks, addTask, updateTask } from '$lib/db';

	let username = $state('');
	let tasks = $state([]);
	let showModal = $state(false);

	let newTask = $state({ title: '', dueDate: '' });

	onMount(() => {
		username = localStorage.getItem('username') || 'LOU';
		loadTasks();
	});

	function loadTasks() {
		tasks = getTasks().filter(t => !t.completed);
	}

	function handleAddTask() {
		if (newTask.title && newTask.dueDate) {
			addTask(newTask.title, '', newTask.dueDate, '');
			loadTasks();
			showModal = false;
			newTask = { title: '', dueDate: '' };
		}
	}

	function toggleTask(id: string, completed: boolean) {
		updateTask(id, { completed: !completed });
		loadTasks();
	}
</script>

<div class="max-w-4xl mx-auto">
	<h1 class="text-3xl font-bold text-[#2E3192] mb-4">GOOD MORNING, {username.toUpperCase()}</h1>
	<h2 class="text-2xl font-bold text-[#2E3192] mb-6">TODAY TASK</h2>

	<!-- Date Selector -->
	<div class="bg-[#C4D82E] rounded-[2.5rem] p-6 mb-6">
		<div class="flex gap-3 justify-center overflow-x-auto">
			{#each [20, 21, 22, 23] as date, i}
				<button
					class="px-8 py-4 rounded-2xl {i === 0 ? 'bg-[#2E3192] text-white' : 'bg-[#F5F1E8] text-[#2E3192]'} font-bold flex-shrink-0"
				>
					<div class="text-2xl">{date}</div>
					<div class="text-sm">Nov</div>
					<div class="w-3 h-3 rounded-full {i === 0 ? 'bg-white' : 'bg-[#FF6B35]'} mx-auto mt-2"></div>
				</button>
			{/each}
		</div>
	</div>

	<!-- Tasks List -->
	<div class="bg-[#C4D82E] rounded-[2.5rem] p-8">
		<h3 class="text-2xl font-bold text-[#2E3192] mb-6">TO DO</h3>
		<div class="space-y-4">
			{#each tasks as task}
				<div class="flex items-center gap-4">
					<button
						on:click={() => toggleTask(task.id, task.completed)}
						class="w-6 h-6 rounded-full border-4 border-[#FF6B35] {task.completed ? 'bg-[#FF6B35]' : 'bg-transparent'} flex-shrink-0"
					></button>
					<div class="flex-1">
						<p class="font-bold text-[#2E3192] text-lg {task.completed ? 'line-through' : ''}">{task.title}</p>
						<p class="text-[#2E3192]">Due: {task.dueDate}</p>
					</div>
				</div>
			{:else}
				<p class="text-[#2E3192] text-lg">No tasks</p>
			{/each}
		</div>
	</div>

	<!-- Add Button -->
	<button
		on:click={() => showModal = true}
		class="fixed bottom-28 right-6 w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition"
	>
		<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" />
		</svg>
	</button>
</div>

<!-- Modal -->
{#if showModal}
	<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
		<div class="bg-[#F5F1E8] rounded-[2.5rem] p-8 w-full max-w-md">
			<h3 class="text-3xl font-bold text-[#2E3192] mb-6">NEW TASK</h3>
			<form on:submit|preventDefault={handleAddTask} class="space-y-4">
				<input
					type="text"
					bind:value={newTask.title}
					placeholder="NAME TASK"
					class="w-full px-6 py-4 rounded-2xl bg-gray-200 focus:outline-none font-bold"
				/>
				<input
					type="date"
					bind:value={newTask.dueDate}
					placeholder="DEADLINE"
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
