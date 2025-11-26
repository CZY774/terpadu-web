<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		setTimeout(() => goto('/login'), 2000);
	});
</script>

<div class="min-h-screen bg-[#C4D82E] flex items-center justify-center relative overflow-hidden">
	<svg class="absolute top-0 right-0 w-2/3 h-1/3" viewBox="0 0 400 200" preserveAspectRatio="xMaxYMin slice">
		<path d="M 0,50 Q 100,0 200,80 T 400,100 L 400,0 L 0,0 Z" fill="none" stroke="#2E3192" stroke-width="12" />
		<path d="M 0,50 Q 100,0 200,80 T 400,100 L 400,0 L 0,0 Z" fill="none" stroke="#F5F1E8" stroke-width="8" transform="translate(0, 8)" />
		<path d="M 0,50 Q 100,0 200,80 T 400,100 L 400,0 L 0,0 Z" fill="none" stroke="#FF6B35" stroke-width="8" transform="translate(0, 16)" />
	</svg>
	
	<svg class="absolute bottom-0 left-0 w-2/3 h-1/3" viewBox="0 0 400 200" preserveAspectRatio="xMinYMax slice">
		<path d="M 0,100 Q 100,200 200,120 T 400,150 L 400,200 L 0,200 Z" fill="none" stroke="#2E3192" stroke-width="12" />
		<path d="M 0,100 Q 100,200 200,120 T 400,150 L 400,200 L 0,200 Z" fill="none" stroke="#F5F1E8" stroke-width="8" transform="translate(0, -8)" />
		<path d="M 0,100 Q 100,200 200,120 T 400,150 L 400,200 L 0,200 Z" fill="none" stroke="#FF6B35" stroke-width="8" transform="translate(0, -16)" />
	</svg>

	<div class="text-center z-10">
		<img src="/Artboard 1_logo.png" alt="Gerbang Waktu" class="w-64 mx-auto drop-shadow-lg" />
	</div>
</div>
