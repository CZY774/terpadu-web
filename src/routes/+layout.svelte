<script lang="ts">
	import './layout.css';
	import { page } from '$app/stores';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import BottomNav from '$lib/components/BottomNav.svelte';
	import ModalDialog from '$lib/components/ModalDialog.svelte';

	let { children } = $props();
	let showSidebar = $state(false);
	let showModal = $state(false);

	const isAuthPage = $derived($page.url.pathname === '/' || $page.url.pathname === '/login');
</script>

{#if isAuthPage}
	{@render children()}
{:else}
	<div class="min-h-screen bg-[#F5F1E8] flex flex-col">
		<Sidebar bind:show={showSidebar} />
		<ModalDialog bind:show={showModal} />

		<header class="bg-[#FF6B35] rounded-b-[2.5rem] sm:rounded-b-[2rem] px-7 py-6 md:py-5 sm:py-4 flex justify-end shadow-[0_4px_12px_rgba(255,107,53,0.15)]">
			<button onclick={() => (showSidebar = true)} class="text-white hover:scale-105 active:scale-95 transition-transform" aria-label="Open menu">
				<svg class="w-11 h-11 md:w-10 sm:w-9" fill="currentColor" viewBox="0 0 24 24">
					<rect x="3" y="4" width="18" height="3.5" rx="1.75" />
					<rect x="3" y="10.25" width="18" height="3.5" rx="1.75" />
					<rect x="3" y="16.5" width="18" height="3.5" rx="1.75" />
				</svg>
			</button>
		</header>

		<main class="flex-1 p-6 md:p-10 pb-28">
			{@render children()}
		</main>

		<BottomNav onAddClick={() => (showModal = true)} />
	</div>
{/if}
