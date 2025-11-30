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

<div class="max-w-3xl mx-auto px-4">
	<div class="flex items-start gap-8 mb-6 md:mb-8">
		<div
			class="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full border-[5px] md:border-[6px] border-[#FF6B35] bg-white flex-shrink-0"
		></div>
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E3192] mt-6 md:mt-8">
			{username.toUpperCase()}
		</h1>
	</div>

	<div
		class="bg-[#C4D82E] rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] p-6 md:p-8 lg:p-10 relative overflow-hidden"
	>
		<img
			src="/peek-mascot.png"
			alt="Mascot"
			class="absolute -bottom-2 right-0 w-32 md:w-40 lg:w-48 h-auto"
			style="transform: scaleX(-1);"
		/>

		<div class="mb-6 md:mb-8 relative z-10">
			<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E3192] mb-4 md:mb-6">
				YOUR STREAK
			</h2>
			<div class="bg-[#2E3192] rounded-full p-4 md:p-5 lg:p-6 relative">
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
							class="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full {day === streak
								? 'bg-[#FF6B35]'
								: 'bg-[#F5F1E8]'} flex items-center justify-center font-bold text-[#2E3192] text-base md:text-lg lg:text-xl"
						>
							{day}
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="space-y-3 md:space-y-4 relative z-10">
			<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E3192]">CATEGORY LIST</h2>
			<a
				href={resolve('/tasks')}
				class="block text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E3192]">MY TASK</a
			>
			<a
				href={resolve('/schedule')}
				class="block text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E3192]">SCHEDULE</a
			>
			<button class="block text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E3192] text-left"
				>RECORD</button
			>
		</div>
	</div>
</div>
