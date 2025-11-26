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

<div class="max-w-4xl mx-auto relative">
	<svg class="absolute -top-8 right-0 w-2/3 h-24" viewBox="0 0 400 100" preserveAspectRatio="xMaxYMin slice">
		<path d="M 0,50 Q 100,0 200,40 T 400,50" fill="none" stroke="#2E3192" stroke-width="10" />
		<path d="M 0,50 Q 100,0 200,40 T 400,50" fill="none" stroke="#F5F1E8" stroke-width="6" transform="translate(0, 6)" />
		<path d="M 0,50 Q 100,0 200,40 T 400,50" fill="none" stroke="#FF6B35" stroke-width="6" transform="translate(0, 12)" />
	</svg>

	<h1 class="text-2xl font-bold text-[#2E3192] mb-2">GOOD MORNING, {username.toUpperCase()}</h1>
	<h2 class="text-3xl font-bold text-[#2E3192] mb-6">TODAY TASK</h2>

	<!-- Date Selector -->
	<div class="bg-[#C4D82E] rounded-[2.5rem] p-4 mb-6">
		<div class="flex gap-3 justify-center overflow-x-auto">
			{#each [20, 21, 22, 23] as date, i}
				<button
					class="px-6 py-3 rounded-2xl {i === 0 ? 'bg-[#2E3192] text-white' : 'bg-[#F5F1E8] text-[#2E3192]'} font-bold flex-shrink-0 border-2 {i === 0 ? 'border-[#2E3192]' : 'border-[#FF6B35]'}"
				>
					<div class="text-xl">{date}</div>
					<div class="text-sm">Nov</div>
					<div class="w-3 h-3 rounded-full {i === 0 ? 'bg-white' : 'bg-[#FF6B35]'} mx-auto mt-1"></div>
				</button>
			{/each}
		</div>
	</div>

	<!-- Tasks List -->
	<div class="mb-6">
		<h3 class="text-3xl font-bold text-[#2E3192] mb-4">TO DO</h3>
		<div class="bg-[#C4D82E] rounded-[2.5rem] p-6">
			<div class="space-y-3">
				{#each tasks as task}
					<div class="flex items-start gap-3">
						<div class="w-5 h-5 rounded-full bg-[#FF6B35] flex-shrink-0 mt-1"></div>
						<div class="flex-1">
							<p class="font-bold text-[#2E3192] text-lg leading-tight {task.completed ? 'line-through' : ''}">{task.title}</p>
							<p class="text-[#2E3192]">at {task.dueDate}</p>
						</div>
					</div>
				{:else}
					<p class="text-[#2E3192]">No tasks</p>
				{/each}
			</div>
		</div>
	</div>
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
