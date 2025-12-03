<script lang="ts">
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';

	let { onAddClick } = $props();
	let show = $state(false);

	onMount(() => {
		show = true;
	});
</script>

<nav
	class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[425px] bg-[#FF6B35] rounded-t-2xl sm:rounded-t-2xl flex justify-around items-center px-4 pt-4 pb-5 sm:pt-3 sm:pb-4 shadow-[0_-4px_12px_rgba(255,107,53,0.15)] transition-opacity duration-300 {show
		? 'opacity-100'
		: 'opacity-0'}"
>
	<a
		href={resolve('/home')}
		class="flex flex-col items-center text-white gap-1 transition-opacity {$page.url.pathname ===
		'/home'
			? 'opacity-100'
			: 'opacity-70'}"
	>
		<svg class="w-9 h-9 md:w-8 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
			<circle cx="12" cy="12" r="9" />
		</svg>
		<span class="text-xs sm:text-[0.65rem] font-bold tracking-wide">HOME</span>
	</a>
	<a
		href={resolve('/schedule')}
		class="flex flex-col items-center text-white gap-1 transition-opacity {$page.url.pathname.startsWith(
			'/schedule'
		)
			? 'opacity-100'
			: 'opacity-70'}"
	>
		<svg class="w-9 h-9 md:w-8 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
			<rect x="4" y="5" width="16" height="16" rx="2" />
		</svg>
		<span class="text-xs sm:text-[0.65rem] font-bold tracking-wide">SCHEDULE</span>
	</a>
	<button onclick={onAddClick} class="flex flex-col items-center -mt-8" aria-label="Add new item">
		<div
			class="w-16 h-16 md:w-14 sm:w-12 md:h-14 sm:h-12 bg-[#FF6B35] rounded-full flex items-center justify-center border-[5px] sm:border-4 border-[#F5F1E8] shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95 transition-transform"
		>
			<svg class="w-9 h-9 md:w-8 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="3.5"
					d="M12 4v16m8-8H4"
				/>
			</svg>
		</div>
	</button>
	<a
		href={resolve('/tasks')}
		class="flex flex-col items-center text-white gap-1 transition-opacity {$page.url.pathname.startsWith(
			'/tasks'
		)
			? 'opacity-100'
			: 'opacity-70'}"
	>
		<svg class="w-9 h-9 md:w-8 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
			<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
		</svg>
		<span class="text-xs sm:text-[0.65rem] font-bold tracking-wide">TASK</span>
	</a>
	<a
		href={resolve('/account')}
		class="flex flex-col items-center text-white gap-1 transition-opacity {$page.url.pathname ===
		'/account'
			? 'opacity-100'
			: 'opacity-70'}"
	>
		<svg class="w-9 h-9 md:w-8 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
			<path
				d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
			/>
		</svg>
		<span class="text-xs sm:text-[0.65rem] font-bold tracking-wide">ACCOUNT</span>
	</a>
</nav>
