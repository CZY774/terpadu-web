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

		<!-- Mobile Header -->
		<header class="bg-[#FF6B35] p-4 flex justify-end md:hidden">
			<button on:click={() => showSidebar = true} class="text-white">
				<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
		</header>

		<!-- Main Content -->
		<main class="flex-1 p-4 md:p-8 pb-24 md:pb-8">
			{@render children()}
		</main>

		<!-- Bottom Navigation -->
		<nav class="fixed bottom-0 left-0 right-0 bg-[#FF6B35] flex justify-around py-4 md:hidden">
			<a href="/home" class="flex flex-col items-center text-white {$page.url.pathname === '/home' ? 'opacity-100' : 'opacity-60'}">
				<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<circle cx="12" cy="12" r="10" stroke-width="2" />
				</svg>
				<span class="text-xs mt-1 font-bold">HOME</span>
			</a>
			<a href="/schedule" class="flex flex-col items-center text-white {$page.url.pathname === '/schedule' ? 'opacity-100' : 'opacity-60'}">
				<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<rect x="3" y="4" width="18" height="18" rx="2" stroke-width="2" />
				</svg>
				<span class="text-xs mt-1 font-bold">SCHEDULE</span>
			</a>
			<button class="flex flex-col items-center text-white">
				<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<circle cx="12" cy="12" r="10" stroke-width="2" />
					<path d="M12 8v8m-4-4h8" stroke-width="2" />
				</svg>
			</button>
			<a href="/tasks" class="flex flex-col items-center text-white {$page.url.pathname === '/tasks' ? 'opacity-100' : 'opacity-60'}">
				<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke-width="2" />
				</svg>
				<span class="text-xs mt-1 font-bold">TASK</span>
			</a>
			<a href="/account" class="flex flex-col items-center text-white {$page.url.pathname === '/account' ? 'opacity-100' : 'opacity-60'}">
				<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke-width="2" />
				</svg>
				<span class="text-xs mt-1 font-bold">ACCOUNT</span>
			</a>
		</nav>
	</div>
{/if}
