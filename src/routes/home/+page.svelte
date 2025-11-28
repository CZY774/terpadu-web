<script lang="ts">
	import { onMount } from 'svelte';
	import { getSchedules, getTasks, type Schedule, type Task } from '$lib/db';

	let username = $state('');
	let schedules = $state<Schedule[]>([]);
	let tasks = $state<Task[]>([]);

	onMount(() => {
		username = localStorage.getItem('username') || 'LOU';
		schedules = getSchedules()
			.filter((s) => s.date === new Date().toISOString().split('T')[0])
			.slice(0, 2);
		tasks = getTasks()
			.filter((t) => !t.completed)
			.slice(0, 2);
	});
</script>

<div class="home-container">
	<h1 class="greeting">GOOD MORNING, {username.toUpperCase()}!</h1>

	<div class="event-card">
		<img src="/peek-mascot.png" alt="Mascot" class="peek-mascot" />
		<h2 class="card-title">TODAY EVENT</h2>
		<div class="card-content">
			{#each schedules as schedule (schedule.id)}
				<div class="item">
					<div class="bullet"></div>
					<div>
						<p class="item-title">{schedule.title}</p>
						<p class="item-time">{schedule.time}</p>
					</div>
				</div>
			{:else}
				<p class="empty-text">No event today</p>
			{/each}
		</div>
	</div>

	<div class="task-card">
		<h2 class="card-title-task">MY TASK</h2>
		<div class="card-content">
			{#each tasks as task (task.id)}
				<div class="item">
					<div class="bullet"></div>
					<div>
						<p class="item-title">{task.title}</p>
						<p class="item-time">at {task.dueDate}</p>
					</div>
				</div>
			{:else}
				<p class="empty-text">No pending tasks</p>
			{/each}
		</div>
		<img src="/full-mascot.png" alt="Mascot" class="full-mascot" />
	</div>
</div>

<style>
	.home-container {
		max-width: 680px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.greeting {
		font-size: clamp(1.75rem, 5vw, 2.5rem);
		font-weight: 800;
		color: #2E3192;
		margin-bottom: 2rem;
		letter-spacing: 0.02em;
	}

	.event-card, .task-card {
		background: #C4D82E;
		border-radius: 3rem;
		padding: 2rem 2.5rem;
		margin-bottom: 2.5rem;
		position: relative;
		min-height: 280px;
	}

	.peek-mascot {
		position: absolute;
		top: -2.5rem;
		left: 1.5rem;
		width: clamp(100px, 15vw, 140px);
		height: auto;
		z-index: 10;
	}

	.card-title {
		background: #C4D82E;
		color: #2E3192;
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 800;
		padding: 1rem 2rem;
		border-radius: 2rem;
		display: inline-block;
		margin-bottom: 1.5rem;
		letter-spacing: 0.03em;
	}

	.card-title-task {
		color: #2E3192;
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 800;
		margin-bottom: 1.5rem;
		letter-spacing: 0.03em;
	}

	.card-content {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		position: relative;
		z-index: 1;
	}

	.item {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
	}

	.bullet {
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 50%;
		background: #FF6B35;
		flex-shrink: 0;
		margin-top: 0.25rem;
	}

	.item-title {
		font-size: clamp(1.125rem, 3vw, 1.5rem);
		font-weight: 700;
		color: #2E3192;
		line-height: 1.3;
		margin-bottom: 0.25rem;
	}

	.item-time {
		font-size: clamp(1rem, 2.5vw, 1.25rem);
		color: #2E3192;
		font-weight: 500;
	}

	.empty-text {
		color: #2E3192;
		font-size: clamp(1rem, 2.5vw, 1.25rem);
		font-weight: 500;
	}

	.full-mascot {
		position: absolute;
		bottom: -1rem;
		right: 1.5rem;
		width: clamp(140px, 20vw, 200px);
		height: auto;
		z-index: 5;
	}

	@media (max-width: 768px) {
		.event-card, .task-card {
			padding: 1.75rem 2rem;
			border-radius: 2.5rem;
			min-height: 240px;
		}

		.peek-mascot {
			width: 90px;
			top: -2rem;
		}

		.full-mascot {
			width: 130px;
		}
	}

	@media (max-width: 320px) {
		.event-card, .task-card {
			padding: 1.5rem 1.5rem;
			border-radius: 2rem;
		}

		.peek-mascot {
			width: 80px;
		}

		.full-mascot {
			width: 110px;
		}

		.card-title {
			padding: 0.75rem 1.5rem;
		}
	}
</style>
