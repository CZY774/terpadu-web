<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { addSchedule } from '$lib/db';

	let title = $state('');
	let startDate = $state('');
	let endDate = $state('');
	let selectedCategory = $state('');

	function handleSubmit() {
		if (title && startDate) {
			addSchedule(title, '', startDate, '', selectedCategory);
			goto(resolve('/schedule'));
		}
	}
</script>

<div class="max-w-2xl mx-auto">
	<h1 class="text-3xl font-bold text-[#2E3192] mb-8">NEW SCHEDULE</h1>

	<form
		onsubmit={(e) => {
			e.preventDefault();
			handleSubmit();
		}}
		class="space-y-6"
	>
		<div>
			<label for="event-name" class="block text-[#2E3192] font-bold text-lg mb-2">NAME EVENT</label>
			<input
				id="event-name"
				type="text"
				bind:value={title}
				class="w-full px-6 py-4 rounded-full bg-gray-300 focus:outline-none text-[#2E3192] font-bold placeholder:text-gray-500"
				required
			/>
		</div>

		<div>
			<label for="start-event" class="block text-[#2E3192] font-bold text-lg mb-2"
				>START EVENT</label
			>
			<input
				id="start-event"
				type="datetime-local"
				bind:value={startDate}
				class="w-full px-6 py-4 rounded-full bg-gray-300 focus:outline-none text-[#2E3192] font-bold"
				required
			/>
		</div>

		<div>
			<label for="end-event" class="block text-[#2E3192] font-bold text-lg mb-2">END EVENT</label>
			<input
				id="end-event"
				type="datetime-local"
				bind:value={endDate}
				class="w-full px-6 py-4 rounded-full bg-gray-300 focus:outline-none text-[#2E3192] font-bold"
			/>
		</div>

		<fieldset>
			<legend class="block text-[#2E3192] font-bold text-lg mb-4">REMAINDER :</legend>
			<div class="grid grid-cols-2 gap-3">
				<button type="button" class="py-4 bg-gray-300 text-[#2E3192] font-bold rounded-full"
					>30 MINUTE</button
				>
				<button type="button" class="py-4 bg-gray-300 text-[#2E3192] font-bold rounded-full"
					>15 MINUTE</button
				>
				<button type="button" class="py-4 bg-gray-300 text-[#2E3192] font-bold rounded-full"
					>1 HOUR</button
				>
				<button type="button" class="py-4 bg-gray-300 text-[#2E3192] font-bold rounded-full"
					>1 DAY</button
				>
			</div>
		</fieldset>

		<fieldset>
			<legend class="block text-[#2E3192] font-bold text-lg mb-4">CATEGORY EVENT</legend>
			<div class="flex gap-4 justify-center flex-wrap">
				<button
					type="button"
					class="w-24 h-24 bg-[#C4D82E] rounded-[2rem] flex items-center justify-center"
					onclick={() => (selectedCategory = 'book')}
				>
					<img src="/Artboard 9.png" alt="Category" class="w-16 h-16 object-contain" />
				</button>
				<button
					type="button"
					class="w-24 h-24 bg-[#C4D82E] rounded-[2rem] flex items-center justify-center"
					onclick={() => (selectedCategory = 'hands')}
				>
					<img src="/left-ribbon.png" alt="Category" class="w-16 h-16 object-contain" />
				</button>
				<button
					type="button"
					class="w-24 h-24 bg-[#C4D82E] rounded-[2rem] flex items-center justify-center"
					onclick={() => (selectedCategory = 'carrot')}
				>
					<img src="/full-mascot.png" alt="Category" class="w-16 h-16 object-contain" />
				</button>
				<button
					type="button"
					class="w-24 h-24 bg-[#C4D82E] rounded-[2rem] flex items-center justify-center"
					onclick={() => (selectedCategory = 'people')}
				>
					<img src="/peek-mascot.png" alt="Category" class="w-16 h-16 object-contain" />
				</button>
			</div>
		</fieldset>

		<div class="flex gap-4 pt-4">
			<button
				type="submit"
				class="flex-1 py-5 bg-[#FF6B35] text-white font-bold rounded-full text-lg">Save</button
			>
			<button
				type="button"
				onclick={() => goto(resolve('/schedule'))}
				class="flex-1 py-5 bg-gray-300 text-[#2E3192] font-bold rounded-full text-lg">Cancel</button
			>
		</div>
	</form>
</div>
