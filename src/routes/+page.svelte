<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		setTimeout(() => goto('/login'), 2000);
	});
</script>

<div class="min-h-screen bg-[#C4D82E] flex items-center justify-center relative overflow-hidden">
	<svg class="absolute top-0 right-0 w-full h-80 md:h-96 lg:h-[28rem]" viewBox="0 0 800 400" preserveAspectRatio="xMaxYMin slice">
		<path d="M 400,100 Q 500,20 600,120 T 800,160" fill="none" stroke="#2E3192" stroke-width="32" stroke-linecap="round" />
		<path d="M 400,100 Q 500,20 600,120 T 800,160" fill="none" stroke="#F5F1E8" stroke-width="20" transform="translate(0, 20)" stroke-linecap="round" />
		<path d="M 400,100 Q 500,20 600,120 T 800,160" fill="none" stroke="#FF6B35" stroke-width="20" transform="translate(0, 40)" stroke-linecap="round" />
	</svg>
	
	<svg class="absolute bottom-0 left-0 w-full h-80 md:h-96 lg:h-[28rem]" viewBox="0 0 800 400" preserveAspectRatio="xMinYMax slice">
		<path d="M 0,240 Q 100,360 200,200 T 400,300" fill="none" stroke="#FF6B35" stroke-width="32" stroke-linecap="round" />
		<path d="M 0,240 Q 100,360 200,200 T 400,300" fill="none" stroke="#F5F1E8" stroke-width="20" transform="translate(0, -20)" stroke-linecap="round" />
		<path d="M 0,240 Q 100,360 200,200 T 400,300" fill="none" stroke="#2E3192" stroke-width="20" transform="translate(0, -40)" stroke-linecap="round" />
	</svg>

	<div class="text-center z-10">
		<img src="/logo.png" alt="Gerbang Waktu" class="w-80 md:w-[300px] lg:w-[350px] mx-auto drop-shadow-2xl" />
	</div>
</div>
