<script lang="ts">
	import { onMount } from 'svelte';

	let username = $state('');

	onMount(() => {
		username = localStorage.getItem('username') || 'LOU';
	});
</script>

<div class="max-w-4xl mx-auto">
	<div class="flex items-center gap-6 mb-8">
		<div class="w-24 h-24 rounded-full border-4 border-[#FF6B35] bg-white"></div>
		<h1 class="text-4xl font-bold text-[#2E3192]">{username.toUpperCase()}</h1>
	</div>

	<div class="flex justify-center mb-8">
		<img src="/Artboard 5.png" alt="Mascot" class="w-32" />
	</div>

	<!-- Streak -->
	<div class="bg-[#C4D82E] rounded-[2.5rem] p-8 mb-6">
		<h2 class="text-2xl font-bold text-[#2E3192] mb-6">YOUR STREAK</h2>
		<div class="bg-[#2E3192] rounded-full p-6 flex justify-between items-center">
			{#each [1,2,3,4,5,6] as day}
				<div class="w-12 h-12 rounded-full {day === 1 ? 'bg-[#FF6B35]' : 'bg-[#F5F1E8]'} flex items-center justify-center font-bold text-[#2E3192] text-xl">
					{day}
				</div>
			{/each}
		</div>
	</div>

	<!-- Menu -->
	<div class="bg-[#C4D82E] rounded-[2.5rem] p-8 space-y-6">
		<h2 class="text-2xl font-bold text-[#2E3192] mb-6">CATEGORY LIST</h2>
		<a href="/tasks" class="block text-2xl font-bold text-[#2E3192] hover:text-[#FF6B35]">MY TASK</a>
		<a href="/schedule" class="block text-2xl font-bold text-[#2E3192] hover:text-[#FF6B35]">SCHEDULE</a>
		<button class="block text-2xl font-bold text-[#2E3192] hover:text-[#FF6B35]">RECORD</button>
	</div>
</div>
