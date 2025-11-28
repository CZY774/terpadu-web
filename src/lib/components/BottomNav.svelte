<script lang="ts">
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';

	let { onAddClick } = $props();
</script>

<nav class="bottom-nav">
	<a
		href={resolve('/home')}
		class="nav-item {$page.url.pathname === '/home' ? 'active' : ''}"
	>
		<svg class="nav-icon" fill="currentColor" viewBox="0 0 24 24">
			<circle cx="12" cy="12" r="9" />
		</svg>
		<span class="nav-label">HOME</span>
	</a>
	<a
		href={resolve('/schedule')}
		class="nav-item {$page.url.pathname.startsWith('/schedule') ? 'active' : ''}"
	>
		<svg class="nav-icon" fill="currentColor" viewBox="0 0 24 24">
			<rect x="4" y="5" width="16" height="16" rx="2" />
		</svg>
		<span class="nav-label">SCHEDULE</span>
	</a>
	<button
		onclick={onAddClick}
		class="add-btn"
		aria-label="Add new item"
	>
		<div class="add-circle">
			<svg class="add-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M12 4v16m8-8H4" />
			</svg>
		</div>
	</button>
	<a
		href={resolve('/tasks')}
		class="nav-item {$page.url.pathname.startsWith('/tasks') ? 'active' : ''}"
	>
		<svg class="nav-icon" fill="currentColor" viewBox="0 0 24 24">
			<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
		</svg>
		<span class="nav-label">TASK</span>
	</a>
	<a
		href={resolve('/account')}
		class="nav-item {$page.url.pathname === '/account' ? 'active' : ''}"
	>
		<svg class="nav-icon" fill="currentColor" viewBox="0 0 24 24">
			<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
		</svg>
		<span class="nav-label">ACCOUNT</span>
	</a>
</nav>

<style>
	.bottom-nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FF6B35;
		border-top-left-radius: 2.5rem;
		border-top-right-radius: 2.5rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 1rem 1rem 1.25rem;
		box-shadow: 0 -4px 12px rgba(255, 107, 53, 0.15);
	}

	.nav-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: white;
		text-decoration: none;
		opacity: 0.7;
		transition: opacity 0.2s;
		gap: 0.25rem;
	}

	.nav-item.active {
		opacity: 1;
	}

	.nav-icon {
		width: 2.25rem;
		height: 2.25rem;
	}

	.nav-label {
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.02em;
	}

	.add-btn {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: transparent;
		border: none;
		cursor: pointer;
		margin-top: -2rem;
		padding: 0;
	}

	.add-circle {
		width: 4rem;
		height: 4rem;
		background: #FF6B35;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 5px solid #F5F1E8;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		transition: transform 0.2s;
	}

	.add-btn:hover .add-circle {
		transform: scale(1.05);
	}

	.add-btn:active .add-circle {
		transform: scale(0.95);
	}

	.add-icon {
		width: 2.25rem;
		height: 2.25rem;
		color: white;
	}

	@media (max-width: 768px) {
		.nav-icon {
			width: 2rem;
			height: 2rem;
		}

		.add-circle {
			width: 3.5rem;
			height: 3.5rem;
		}

		.add-icon {
			width: 2rem;
			height: 2rem;
		}
	}

	@media (max-width: 320px) {
		.bottom-nav {
			padding: 0.75rem 0.5rem 1rem;
			border-top-left-radius: 2rem;
			border-top-right-radius: 2rem;
		}

		.nav-icon {
			width: 1.75rem;
			height: 1.75rem;
		}

		.nav-label {
			font-size: 0.65rem;
		}

		.add-circle {
			width: 3rem;
			height: 3rem;
			border-width: 4px;
		}

		.add-icon {
			width: 1.75rem;
			height: 1.75rem;
		}
	}
</style>
