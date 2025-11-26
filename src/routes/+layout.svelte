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

		<header class="bg-[#FF6B35] rounded-b-[2.5rem] p-5 flex justify-end">
			<button onclick={() => showSidebar = true} class="text-white">
				<svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
					<rect x="3" y="5" width="18" height="3" rx="1.5" />
					<rect x="3" y="10.5" width="18" height="3" rx="1.5" />
					<rect x="3" y="16" width="18" height="3" rx="1.5" />
				</svg>
			</button>
		</header>

		<main class="flex-1 p-6 md:p-10 pb-28">
			{@render children()}
		</main>

		<BottomNav onAddClick={() => showModal = true} />
	</div>
{/if}
