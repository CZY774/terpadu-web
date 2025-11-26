<script lang="ts">
	import './layout.css';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let { children } = $props();
	let showSidebar = $state(false);

	const isAuthPage = $derived($page.url.pathname === '/' || $page.url.pathname === '/login');

	function logout() {
		localStorage.removeItem('isAuthenticated');
		localStorage.removeItem('username');
		showSidebar = false;
		goto('/login');
	}
</script>

{#if isAuthPage}
	{@render children()}
{:else}
	<div class="min-h-screen bg-[#F5F1E8] flex flex-col">
		<!-- Sidebar Overlay -->
		{#if showSidebar}
			<div class="fixed inset-0 bg-black/50 z-40" on:click={() => showSidebar = false}></div>
		{/if}

		<!-- Sidebar -->
		<aside class="fixed top-0 right-0 h-full w-80 bg-[#FF6B35] z-50 transform transition-transform duration-300 {showSidebar ? 'translate-x-0' : 'translate-x-full'}">
			<div class="p-8">
				<button on:click={() => showSidebar = false} class="text-white mb-8 ml-auto block">
					<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
				<img src="/Artboard 1_logo.png" alt="Logo" class="w-40 mb-12" />
				<nav class="space-y-6 text-white font-bold text-xl">
					<a href="/account" class="block hover:text-[#2E3192]" on:click={() => showSidebar = false}>Account</a>
					<a href="/home" class="block hover:text-[#2E3192]" on:click={() => showSidebar = false}>Privacy</a>
					<a href="/home" class="block hover:text-[#2E3192]" on:click={() => showSidebar = false}>Setting</a>
				</nav>
				<button on:click={logout} class="block text-left w-full mt-12 text-white font-bold text-xl hover:text-[#2E3192]">
					Log Out
				</button>
			</div>
		</aside>

		<!-- Header -->
		<header class="bg-[#FF6B35] rounded-b-[2rem] p-4 flex justify-end">
			<button on:click={() => showSidebar = true} class="text-white">
				<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
					<rect x="4" y="6" width="16" height="2.5" rx="1.25" />
					<rect x="4" y="11" width="16" height="2.5" rx="1.25" />
					<rect x="4" y="16" width="16" height="2.5" rx="1.25" />
				</svg>
			</button>
		</header>

		<!-- Main Content -->
		<main class="flex-1 p-4 md:p-8 pb-24">
			{@render children()}
		</main>

		<!-- Bottom Navigation -->
		<nav class="fixed bottom-0 left-0 right-0 bg-[#FF6B35] rounded-t-[2rem] flex justify-around py-4 px-4">
			<a href="/home" class="flex flex-col items-center text-white {$page.url.pathname === '/home' ? 'opacity-100' : 'opacity-70'}">
				<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<circle cx="12" cy="12" r="9" stroke-width="2.5" />
				</svg>
				<span class="text-xs mt-1 font-bold">HOME</span>
			</a>
			<a href="/schedule" class="flex flex-col items-center text-white {$page.url.pathname === '/schedule' ? 'opacity-100' : 'opacity-70'}">
				<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<rect x="4" y="5" width="16" height="16" rx="2" stroke-width="2.5" />
				</svg>
				<span class="text-xs mt-1 font-bold">SCHEDULE</span>
			</a>
			<button class="flex flex-col items-center text-white -mt-2">
				<div class="w-14 h-14 bg-[#FF6B35] rounded-full flex items-center justify-center border-4 border-[#F5F1E8]">
					<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" />
					</svg>
				</div>
			</button>
			<a href="/tasks" class="flex flex-col items-center text-white {$page.url.pathname === '/tasks' ? 'opacity-100' : 'opacity-70'}">
				<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path d="M5 13l4 4L19 7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
				<span class="text-xs mt-1 font-bold">TASK</span>
			</a>
			<a href="/account" class="flex flex-col items-center text-white {$page.url.pathname === '/account' ? 'opacity-100' : 'opacity-70'}">
				<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<circle cx="12" cy="8" r="4" stroke-width="2.5" />
					<path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" stroke-width="2.5" stroke-linecap="round" />
				</svg>
				<span class="text-xs mt-1 font-bold">ACCOUNT</span>
			</a>
		</nav>
	</div>
{/if}
