<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.png';
	import { goto } from '$app/navigation';

	const navItems = [
		{ name: 'Home', icon: '🏠', href: '/home' },
		{ name: 'Schedule', icon: '📅', href: '/schedule' },
		{ name: 'Tasks', icon: '✅', href: '/tasks' },
		{ name: 'Account', icon: '👤', href: '/account' }
	];

	let isSidebarOpen = false;

	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}

	function handleLogout() {
		localStorage.removeItem('isAuthenticated');
		goto('/');
	}
</script>

<aside class="h-screen w-64 bg-gray-800 text-white flex flex-col">
	<div class="p-4 flex items-center justify-center">
		<img src={logo} alt="Gerbang Waktu Logo" class="h-12" />
	</div>
	<nav class="flex-1">
		<ul>
			{#each navItems as item}
				<li>
					<a
						href={item.href}
						class="flex items-center p-4 hover:bg-gray-700 {($page.url.pathname === item.href || ($page.url.pathname === '/' && item.href === '/home')) ? 'bg-gray-700' : ''}"
					>
						<span class="mr-3">{item.icon}</span>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="p-4 border-t border-gray-700">
		<button on:click={handleLogout} class="w-full text-left p-2 hover:bg-gray-700 rounded">Logout</button>
	</div>
</aside>