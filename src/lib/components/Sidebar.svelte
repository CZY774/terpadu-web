<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	let { show = $bindable(false) } = $props();

	function logout() {
		localStorage.removeItem('isAuthenticated');
		localStorage.removeItem('username');
		show = false;
		goto(resolve('/login'));
	}

	function close() {
		show = false;
	}
</script>

{#if show}
	<div
		class="absolute inset-0 bg-black/50 z-40"
		onclick={close}
		onkeydown={(e) => e.key === 'Escape' && close()}
		role="button"
		tabindex="0"
		aria-label="Close sidebar"
	></div>
{/if}

<aside
	class="absolute top-0 right-0 h-full w-64 bg-[#FF6B35] z-50 transform transition-all duration-300 {show
		? 'translate-x-0 opacity-100'
		: 'translate-x-full opacity-0'}"
>
	<div class="p-8">
		<button onclick={close} class="text-white mb-8 ml-auto block text-3xl font-bold">✕</button>
		<img src="/logo.png" alt="Logo" class="w-44 mb-12" />
		<nav class="space-y-6 text-white font-bold text-xl">
			<a href={resolve('/account')} onclick={close} class="block">Account</a>
			<a href={resolve('/home')} onclick={close} class="block">Privacy</a>
			<a href={resolve('/home')} onclick={close} class="block">Setting</a>
		</nav>
		<button onclick={logout} class="block text-left w-full mt-12 text-white font-bold text-xl"
			>Log Out</button
		>
	</div>
</aside>
