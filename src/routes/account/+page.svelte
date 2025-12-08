<script lang="ts">
	import { onMount } from 'svelte';
	import { getStreak } from '$lib/db';
	import { resolve } from '$app/paths';

	let username = $state('');
	let streak = $state(1);

	onMount(() => {
		username = localStorage.getItem('username') || 'LOU';
		streak = getStreak();
	});
</script>

<div style="padding: 40px 20px 120px 20px;">
	<div class="flex items-start gap-8 mb-6">
		<div class="w-24 h-24 rounded-full border-[5px] border-[#FF6B35] bg-white shrink-0"></div>
		<h1 class="text-4xl font-bold text-[#2E3192] mt-6">
			{username.toUpperCase()}
		</h1>
	</div>

	<img src="/peek-mascot.png" alt="Mascot" class="absolute z-1 top-32 right-9 w-32 h-auto" />
	<div class="bg-[#C4D82E]/60 rounded-[2.5rem] p-6 relative overflow-hidden">
		<div class="mb-6 relative z-10" style="padding: 20px;">
			<h2 class="text-2xl font-bold text-[#2E3192] mb-4">YOUR STREAK</h2>
			<div class="bg-[#2E3192] rounded-full p-4 relative">
				<svg class="absolute inset-0 w-full h-full" viewBox="0 0 600 80" preserveAspectRatio="none">
					<path
						d="M 40,40 Q 150,10 260,40 T 560,40"
						fill="none"
						stroke="#FF6B35"
						stroke-width="12"
						stroke-linecap="round"
					/>
				</svg>
				<div class="flex justify-between items-center relative z-10">
					{#each [1, 2, 3, 4, 5, 6] as day (day)}
						<div
							class="w-10 h-10 rounded-full {day === streak
								? 'bg-[#FF6B35]'
								: 'bg-[#F5F1E8]'} flex items-center justify-center font-bold text-[#2E3192] text-base"
						>
							{day}
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="space-y-3 relative z-10" style="padding: 20px;">
			<h2 class="text-2xl font-bold text-[#2E3192]">CATEGORY LIST</h2>
			<a href={resolve('/tasks')} class="block text-2xl font-bold text-[#2E3192]">MY TASK</a>
			<a href={resolve('/schedule')} class="block text-2xl font-bold text-[#2E3192]">SCHEDULE</a>
			<a href={resolve('/record')} class="block text-2xl font-bold text-[#2E3192]">RECORD</a>
		</div>
	</div>
</div>
