<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { addTask, getCategories, type Category } from '$lib/db';

	const dispatch = createEventDispatcher();

	export let isOpen: boolean;

	let title: string = '';
	let description: string = '';
	let dueDate: string = '';
	let selectedCategory: string = '';

	let categories: Category[] = [];

	$: if (isOpen) {
		// Reset form when modal opens
		title = '';
		description = '';
		dueDate = '';
		categories = getCategories();
		selectedCategory = categories.length > 0 ? categories[0].id : '';
	}

	function handleSubmit() {
		if (!title || !dueDate || !selectedCategory) {
			alert('Please fill in all required fields.');
			return;
		}

		addTask(title, description, dueDate, selectedCategory);
		dispatch('close');
	}

	function handleClose() {
		dispatch('close');
	}
</script>

{#if isOpen}
	<div
		class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center"
	>
		<div class="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
			<h2 class="text-2xl font-bold mb-4">Add New Task</h2>
			<form on:submit|preventDefault={handleSubmit}>
				<div class="mb-4">
					<label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
					<input
						type="text"
						id="title"
						bind:value={title}
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div class="mb-4">
					<label for="description" class="block text-gray-700 text-sm font-bold mb-2"
						>Description</label
					>
					<textarea
						id="description"
						bind:value={description}
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					></textarea>
				</div>
				<div class="mb-4">
					<label for="dueDate" class="block text-gray-700 text-sm font-bold mb-2">Due Date</label>
					<input
						type="date"
						id="dueDate"
						bind:value={dueDate}
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div class="mb-4">
					<label for="category" class="block text-gray-700 text-sm font-bold mb-2">Category</label>
					<select
						id="category"
						bind:value={selectedCategory}
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					>
						{#each categories as category (category.id)}
							<option value={category.id}>{category.name}</option>
						{/each}
					</select>
				</div>
				<div class="flex justify-end gap-2">
					<button
						type="button"
						on:click={handleClose}
						class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Cancel
					</button>
					<button
						type="submit"
						class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Add Task
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}
