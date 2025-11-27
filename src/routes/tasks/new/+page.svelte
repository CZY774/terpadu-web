<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { addTask } from '$lib/db';

	let title = $state('');
	let deadline = $state('');

	function handleSubmit() {
		if (title && deadline) {
			addTask(title, '', deadline, '');
			goto(resolve('/tasks'));
		}
	}
</script>

<div class="max-w-2xl mx-auto">
	<h1 class="text-3xl font-bold text-[#2E3192] mb-8">NEW TASK</h1>

	<form
		onsubmit={(e) => {
			e.preventDefault();
			handleSubmit();
		}}
		class="space-y-6"
	>
		<div>
			<label class="block text-[#2E3192] font-bold text-lg mb-2">NAME TASK</label>
			<input
				type="text"
				bind:value={title}
				class="w-full px-6 py-4 rounded-full bg-gray-300 focus:outline-none text-[#2E3192] font-bold placeholder:text-gray-500"
				required
			/>
		</div>

		<div>
			<label class="block text-[#2E3192] font-bold text-lg mb-2">DEADLINE</label>
			<input
				type="date"
				bind:value={deadline}
				class="w-full px-6 py-4 rounded-full bg-gray-300 focus:outline-none text-[#2E3192] font-bold"
				required
			/>
		</div>

		<div class="flex gap-4 pt-8">
			<button
				type="submit"
				class="flex-1 py-5 bg-[#FF6B35] text-white font-bold rounded-full text-lg">Save</button
			>
			<button
				type="button"
				onclick={() => goto(resolve('/tasks'))}
				class="flex-1 py-5 bg-gray-300 text-[#2E3192] font-bold rounded-full text-lg">Cancel</button
			>
		</div>
	</form>
</div>
