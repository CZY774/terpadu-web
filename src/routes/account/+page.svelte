<script lang="ts">
	import { onMount } from 'svelte';
	import { getStreak } from '$lib/db';

	let username = $state('');
	let streak = $state(1);

	onMount(() => {
		username = localStorage.getItem('username') || 'LOU';
		streak = getStreak();
	});
</script>

<div class="max-w-2xl mx-auto">
	<div class="flex items-center gap-6 mb-8">
		<div class="w-32 h-32 rounded-full border-4 border-[#FF6B35] bg-white"></div>
		<h1 class="text-3xl font-bold text-[#2E3192]">{username.toUpperCase()}</h1>
	</div>

	<div class="bg-[#C4D82E] rounded-[3rem] p-8 relative">
		<img src="/right-ribbon.png" alt="Mascot" class="w-32 absolute -top-6 right-10" />

		<div class="mb-8">
			<h2 class="text-2xl font-bold text-[#2E3192] mb-6">YOUR STREAK</h2>
			<div class="bg-[#2E3192] rounded-full p-5 flex justify-between items-center gap-2">
				{#each [1, 2, 3, 4, 5, 6] as day}
					<div
						class="w-12 h-12 rounded-full {day === streak
							? 'bg-[#FF6B35]'
							: 'bg-[#F5F1E8]'} flex items-center justify-center font-bold text-[#2E3192] text-lg"
					>
						{day}
					</div>
				{/each}
			</div>
		</div>

		<div class="space-y-4">
			<h2 class="text-2xl font-bold text-[#2E3192] mb-4">CATEGORY LIST</h2>
			<a href="/tasks" class="block text-2xl font-bold text-[#2E3192] py-2">MY TASK</a>
			<a href="/schedule" class="block text-2xl font-bold text-[#2E3192] py-2">SCHEDULE</a>
			<button class="block text-2xl font-bold text-[#2E3192] py-2">RECORD</button>
		</div>
	</div>
</div>
