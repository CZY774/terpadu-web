<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		setTimeout(() => goto('/login'), 2000);
	});
</script>

<div class="min-h-screen bg-[#C4D82E] flex items-center justify-center relative overflow-hidden">
	<svg class="absolute top-0 right-0 w-1/2 h-1/2" viewBox="0 0 200 200">
		<path d="M 0,100 Q 50,0 100,50 T 200,100" fill="none" stroke="#2E3192" stroke-width="8" />
		<path d="M 0,100 Q 50,0 100,50 T 200,100" fill="none" stroke="#F5F1E8" stroke-width="6" transform="translate(0, 5)" />
		<path d="M 0,100 Q 50,0 100,50 T 200,100" fill="none" stroke="#FF6B35" stroke-width="6" transform="translate(0, 10)" />
	</svg>
	
	<svg class="absolute bottom-0 left-0 w-1/2 h-1/2" viewBox="0 0 200 200">
		<path d="M 0,0 Q 50,100 100,50 T 200,0" fill="none" stroke="#FF6B35" stroke-width="8" />
		<path d="M 0,0 Q 50,100 100,50 T 200,0" fill="none" stroke="#F5F1E8" stroke-width="6" transform="translate(0, 5)" />
		<path d="M 0,0 Q 50,100 100,50 T 200,0" fill="none" stroke="#2E3192" stroke-width="6" transform="translate(0, 10)" />
	</svg>

	<div class="text-center z-10">
		<img src="/Artboard 1_logo.png" alt="Gerbang Waktu" class="w-64 mx-auto drop-shadow-lg" />
	</div>
</div>
