<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		setTimeout(() => goto('/login'), 2000);
	});
</script>

<div class="min-h-screen bg-[#C4D82E] flex items-center justify-center relative overflow-hidden">
	<svg class="absolute top-0 right-0 w-full h-64" viewBox="0 0 800 200" preserveAspectRatio="xMaxYMin slice">
		<path d="M 400,50 Q 500,0 600,60 T 800,80" fill="none" stroke="#2E3192" stroke-width="16" stroke-linecap="round" />
		<path d="M 400,50 Q 500,0 600,60 T 800,80" fill="none" stroke="#F5F1E8" stroke-width="10" transform="translate(0, 10)" stroke-linecap="round" />
		<path d="M 400,50 Q 500,0 600,60 T 800,80" fill="none" stroke="#FF6B35" stroke-width="10" transform="translate(0, 20)" stroke-linecap="round" />
	</svg>
	
	<svg class="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 800 200" preserveAspectRatio="xMinYMax slice">
		<path d="M 0,120 Q 100,180 200,100 T 400,150" fill="none" stroke="#FF6B35" stroke-width="16" stroke-linecap="round" />
		<path d="M 0,120 Q 100,180 200,100 T 400,150" fill="none" stroke="#F5F1E8" stroke-width="10" transform="translate(0, -10)" stroke-linecap="round" />
		<path d="M 0,120 Q 100,180 200,100 T 400,150" fill="none" stroke="#2E3192" stroke-width="10" transform="translate(0, -20)" stroke-linecap="round" />
	</svg>

	<div class="text-center z-10">
		<img src="/logo.png" alt="Gerbang Waktu" class="w-80 mx-auto drop-shadow-2xl" />
	</div>
</div>
