<script lang="ts">
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';

	let { onAddClick } = $props();
</script>

<nav
	class="fixed bottom-0 left-0 right-0 bg-[#FF6B35] rounded-t-[2.5rem] flex justify-around py-4 px-4"
>
	<a
		href={resolve('/home')}
		class="flex flex-col items-center text-white {$page.url.pathname === '/home'
			? 'opacity-100'
			: 'opacity-70'}"
	>
		<svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<circle cx="12" cy="12" r="9" stroke-width="2.5" />
		</svg>
		<span class="text-xs mt-1 font-bold">HOME</span>
	</a>
	<a
		href={resolve('/schedule')}
		class="flex flex-col items-center text-white {$page.url.pathname.startsWith('/schedule')
			? 'opacity-100'
			: 'opacity-70'}"
	>
		<svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<rect x="4" y="5" width="16" height="16" rx="2" stroke-width="2.5" />
		</svg>
		<span class="text-xs mt-1 font-bold">SCHEDULE</span>
	</a>
	<button onclick={onAddClick} class="flex flex-col items-center text-white -mt-3" aria-label="Add new item">
		<div
			class="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center border-4 border-[#F5F1E8]"
		>
			<svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" />
			</svg>
		</div>
	</button>
	<a
		href={resolve('/tasks')}
		class="flex flex-col items-center text-white {$page.url.pathname.startsWith('/tasks')
			? 'opacity-100'
			: 'opacity-70'}"
	>
		<svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path d="M5 13l4 4L19 7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
		<span class="text-xs mt-1 font-bold">TASK</span>
	</a>
	<a
		href={resolve('/account')}
		class="flex flex-col items-center text-white {$page.url.pathname === '/account'
			? 'opacity-100'
			: 'opacity-70'}"
	>
		<svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<circle cx="12" cy="8" r="4" stroke-width="2.5" />
			<path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" stroke-width="2.5" stroke-linecap="round" />
		</svg>
		<span class="text-xs mt-1 font-bold">ACCOUNT</span>
	</a>
</nav>
