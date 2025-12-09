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

<div class="max-w-[425px] mx-auto px-5 pt-10 pb-5" style="padding: 40px 20px 120px 20px;">
	<div class="flex items-start gap-5 mb-6">
		<div class="w-20 h-20 rounded-full border-4 border-[#FF6B35] bg-white shrink-0"></div>
		<h1 class="text-3xl font-bold text-[#2E3192] mt-4 wrap-break-words">
			{username.toUpperCase()}
		</h1>
	</div>

	<div class="relative">
		<img
			src="/peek-mascot.png"
			alt="Mascot"
			class="absolute z-10 -top-15 right-2 w-28 h-auto pointer-events-none"
		/>
		<div class="bg-[#C4D82E]/60 rounded-[2.5rem] p-5 relative overflow-hidden">
			<div class="mb-6 relative z-20 px-4 pt-4" style="padding: 12px;">
				<h2 class="text-2xl font-bold text-[#2E3192] mb-4">YOUR STREAK</h2>
				<div class="bg-[#2E3192] rounded-full p-3 relative">
					<svg
						class="absolute inset-0 w-full h-full"
						viewBox="0 0 600 80"
						preserveAspectRatio="none"
					>
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
								class="w-9 h-9 rounded-full {day === streak
									? 'bg-[#FF6B35]'
									: 'bg-[#F5F1E8]'} flex items-center justify-center font-bold text-[#2E3192] text-sm"
							>
								{day}
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div class="space-y-4 relative z-20 px-4 pb-4" style="padding: 12px;">
				<h2 class="text-2xl font-bold text-[#2E3192] mb-2">CATEGORY LIST</h2>
				<a
					href={resolve('/tasks')}
					class="block text-xl font-bold text-[#2E3192] py-2 active:opacity-70 transition-opacity"
					>MY TASK</a
				>
				<a
					href={resolve('/schedule')}
					class="block text-xl font-bold text-[#2E3192] py-2 active:opacity-70 transition-opacity"
					>SCHEDULE</a
				>
				<a
					href={resolve('/record')}
					class="block text-xl font-bold text-[#2E3192] py-2 active:opacity-70 transition-opacity"
					>RECORD</a
				>
			</div>
		</div>
	</div>
</div>
