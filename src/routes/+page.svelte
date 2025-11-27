<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		setTimeout(() => goto('/login'), 2000);
	});
</script>

<div class="min-h-screen bg-[#C4D82E] flex items-center justify-center relative overflow-hidden">
	<svg class="absolute top-0 right-0 w-full h-64" viewBox="0 0 1000 200" preserveAspectRatio="none">
		<path d="M 0,80 Q 250,20 500,80 T 1000,80" fill="none" stroke="#2E3192" stroke-width="28" stroke-linecap="round" />
		<path d="M 0,80 Q 250,20 500,80 T 1000,80" fill="none" stroke="#F5F1E8" stroke-width="18" transform="translate(0, 18)" stroke-linecap="round" />
		<path d="M 0,80 Q 250,20 500,80 T 1000,80" fill="none" stroke="#FF6B35" stroke-width="18" transform="translate(0, 36)" stroke-linecap="round" />
	</svg>
	
	<svg class="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1000 200" preserveAspectRatio="none">
		<path d="M 0,120 Q 250,180 500,120 T 1000,120" fill="none" stroke="#FF6B35" stroke-width="28" stroke-linecap="round" />
		<path d="M 0,120 Q 250,180 500,120 T 1000,120" fill="none" stroke="#F5F1E8" stroke-width="18" transform="translate(0, -18)" stroke-linecap="round" />
		<path d="M 0,120 Q 250,180 500,120 T 1000,120" fill="none" stroke="#2E3192" stroke-width="18" transform="translate(0, -36)" stroke-linecap="round" />
	</svg>

	<div class="text-center z-10">
		<img src="/logo.png" alt="Gerbang Waktu" class="w-80 md:w-[300px] lg:w-[350px] mx-auto drop-shadow-2xl" />
	</div>
</div>
