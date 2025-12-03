<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { addSchedule, getCategories, type Category } from '$lib/db';

	const dispatch = createEventDispatcher();

	export let isOpen: boolean;

	let title: string = '';
	let description: string = '';
	let date: string = '';
	let time: string = '';
	let selectedCategory: string = '';

	let categories: Category[] = [];

	$: if (isOpen) {
		// Reset form when modal opens
		title = '';
		description = '';
		date = '';
		time = '';
		categories = getCategories();
		selectedCategory = categories.length > 0 ? categories[0].id : '';
	}

	function handleSubmit() {
		if (!title || !date || !time || !selectedCategory) {
			alert('Please fill in all required fields.');
			return;
		}

		addSchedule(title, description, date, time, selectedCategory);
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
			<h2 class="text-2xl font-bold mb-4">Add New Schedule</h2>
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
					<label for="date" class="block text-gray-700 text-sm font-bold mb-2">Date</label>
					<input
						type="date"
						id="date"
						bind:value={date}
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div class="mb-4">
					<label for="time" class="block text-gray-700 text-sm font-bold mb-2">Time</label>
					<input
						type="time"
						id="time"
						bind:value={time}
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div class="mb-4">
					<div class="block text-gray-700 text-sm font-bold mb-2">Category</div>
					<div class="grid grid-cols-4 gap-2">
						{#each categories as category (category.id)}
							<button
								type="button"
								on:click={() => (selectedCategory = category.id)}
								class="aspect-square bg-linear-to-br from-[#C4D82E] to-[#B8CC28] rounded-2xl flex items-center justify-center p-2 shadow-[inset_0_0_0_2px_{selectedCategory ===
								category.id
									? '#2E3192'
									: 'rgba(255,255,255,0.3)'}] transition-all"
								aria-label="{category.name} Category"
							>
								{#if category.name === 'Book'}
									<svg viewBox="0 0 100 100" fill="none" class="w-full h-full">
										<defs>
											<linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
												<stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
												<stop offset="100%" style="stop-color:#FF8C69;stop-opacity:1" />
											</linearGradient>
										</defs>
										<path
											d="M30 20 L70 20 Q75 20 75 25 L75 75 Q75 80 70 80 L30 80 Q25 80 25 75 L25 25 Q25 20 30 20 Z"
											fill="url(#bookGrad)"
											stroke="#D94A2A"
											stroke-width="2"
										/>
										<rect x="35" y="30" width="30" height="3" rx="1.5" fill="#FFA080" />
										<rect x="35" y="40" width="25" height="2.5" rx="1.25" fill="#FFA080" />
										<rect x="35" y="48" width="28" height="2.5" rx="1.25" fill="#FFA080" />
										<rect x="35" y="56" width="22" height="2.5" rx="1.25" fill="#FFA080" />
									</svg>
								{:else if category.name === 'Hand'}
									<svg viewBox="0 0 100 100" fill="none" class="w-full h-full">
										<defs>
											<linearGradient id="handGrad" x1="0%" y1="0%" x2="100%" y2="100%">
												<stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
												<stop offset="100%" style="stop-color:#FF8C69;stop-opacity:1" />
											</linearGradient>
										</defs>
										<ellipse cx="32" cy="48" rx="10" ry="16" fill="url(#handGrad)" />
										<ellipse cx="45" cy="43" rx="10" ry="18" fill="url(#handGrad)" />
										<ellipse cx="58" cy="45" rx="10" ry="17" fill="url(#handGrad)" />
										<ellipse cx="70" cy="48" rx="9" ry="15" fill="url(#handGrad)" />
										<path
											d="M25 64 Q30 72 40 76 Q50 79 60 76 Q70 72 75 64 L75 55 Q75 50 70 48 Q60 45 50 45 Q40 45 30 48 Q25 50 25 55 Z"
											fill="url(#handGrad)"
										/>
									</svg>
								{:else if category.name === 'Carrot'}
									<svg viewBox="0 0 100 100" fill="none" class="w-full h-full">
										<defs>
											<linearGradient id="carrotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
												<stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
												<stop offset="100%" style="stop-color:#FF8C69;stop-opacity:1" />
											</linearGradient>
										</defs>
										<path d="M47 25 L50 18 L53 25 L51 80 Q50 85 49 80 Z" fill="url(#carrotGrad)" />
										<path
											d="M42 28 Q38 30 36 36 L33 42"
											stroke="url(#carrotGrad)"
											stroke-width="3"
											stroke-linecap="round"
											fill="none"
										/>
										<path
											d="M58 28 Q62 30 64 36 L67 42"
											stroke="url(#carrotGrad)"
											stroke-width="3"
											stroke-linecap="round"
											fill="none"
										/>
										<path
											d="M45 30 Q42 32 40 38"
											stroke="url(#carrotGrad)"
											stroke-width="2.5"
											stroke-linecap="round"
											fill="none"
										/>
										<path
											d="M55 30 Q58 32 60 38"
											stroke="url(#carrotGrad)"
											stroke-width="2.5"
											stroke-linecap="round"
											fill="none"
										/>
									</svg>
								{:else if category.name === 'People'}
									<svg viewBox="0 0 100 100" fill="none" class="w-full h-full">
										<defs>
											<linearGradient id="peopleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
												<stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
												<stop offset="100%" style="stop-color:#FF8C69;stop-opacity:1" />
											</linearGradient>
										</defs>
										<circle cx="35" cy="32" r="11" fill="url(#peopleGrad)" />
										<path
											d="M35 43 Q28 50 28 60 L28 75 Q28 77 26 77 L24 77 Q22 77 22 75 L22 60 Q22 48 35 43"
											fill="url(#peopleGrad)"
										/>
										<path
											d="M35 43 Q42 50 42 60 L42 75 Q42 77 44 77 L46 77 Q48 77 48 75 L48 60 Q48 48 35 43"
											fill="url(#peopleGrad)"
										/>
										<circle cx="65" cy="32" r="11" fill="url(#peopleGrad)" />
										<path
											d="M65 43 Q58 50 58 60 L58 75 Q58 77 56 77 L54 77 Q52 77 52 75 L52 60 Q52 48 65 43"
											fill="url(#peopleGrad)"
										/>
										<path
											d="M65 43 Q72 50 72 60 L72 75 Q72 77 74 77 L76 77 Q78 77 78 75 L78 60 Q78 48 65 43"
											fill="url(#peopleGrad)"
										/>
									</svg>
								{/if}
							</button>
						{/each}
					</div>
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
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Add Schedule
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}
