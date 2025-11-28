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

		<header class="header-bar">
			<button onclick={() => (showSidebar = true)} class="menu-btn" aria-label="Open menu">
				<svg class="hamburger-icon" fill="currentColor" viewBox="0 0 24 24">
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

<style>
	.header-bar {
		background: #FF6B35;
		border-bottom-left-radius: 2.5rem;
		border-bottom-right-radius: 2.5rem;
		padding: 1.5rem 1.75rem;
		display: flex;
		justify-content: flex-end;
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.15);
	}

	.menu-btn {
		color: white;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0.25rem;
		transition: transform 0.2s;
	}

	.menu-btn:hover {
		transform: scale(1.05);
	}

	.menu-btn:active {
		transform: scale(0.95);
	}

	.hamburger-icon {
		width: 2.75rem;
		height: 2.75rem;
	}

	@media (max-width: 768px) {
		.header-bar {
			padding: 1.25rem 1.5rem;
		}

		.hamburger-icon {
			width: 2.5rem;
			height: 2.5rem;
		}
	}

	@media (max-width: 320px) {
		.header-bar {
			padding: 1rem 1.25rem;
			border-bottom-left-radius: 2rem;
			border-bottom-right-radius: 2rem;
		}

		.hamburger-icon {
			width: 2.25rem;
			height: 2.25rem;
		}
	}
</style>
