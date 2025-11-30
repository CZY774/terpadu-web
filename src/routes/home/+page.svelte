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

<div class="min-h-screen bg-[#F5F1E8]" style="padding: 40px 20px 120px 20px;">
	<div class="mx-auto">
		<h1
			class="text-[1rem] lg:text-[2.5rem] md:text-[2rem] font-extrabold text-[#2E3192] text-center"
			style="margin-bottom: 20px; letter-spacing: 0.02em;"
		>
			GOOD MORNING, {username.toUpperCase()}!
		</h1>

		<div class="relative" style="margin-bottom: 80px;">
			<img
				src="/peek-mascot.png"
				alt="Mascot"
				class="absolute w-30 lg:w-40 sm:w-40 top-[30px] md:top-[25px] sm:top-5 left-5 h-auto z-0"
			/>
			<div
				class="bg-[#C4D82E]/70 text-[#2E3192] text-[1rem] lg:text-[2rem] md:text-[1.75rem]N font-extrabold text-right rounded-[2.5rem] lg:rounded-4xl md:rounded-[1.75rem] ml-auto"
				style="padding: 24px 40px; margin-bottom: 20px; letter-spacing: 0.02em; width: 87.5%;"
			>
				TODAY EVENT
			</div>
			<div
				class="bg-[#C4D82E]/70 rounded-[3rem] lg:rounded-[2.5rem] md:rounded-4xl"
				style="padding: 60px 50px; min-height: 320px;"
			>
				<div class="flex flex-col" style="gap: 32px;">
					{#each schedules as schedule (schedule.id)}
						<div class="flex items-start" style="gap: 20px;">
							<div
								class="rounded-full bg-[#FF6B35] shrink-0"
								style="width: 28px; height: 28px; margin-top: 4px;"
							></div>
							<div>
								<p
									class="text-[2rem] lg:text-[1.75rem] md:text-[1.5rem] font-extrabold text-[#2E3192]"
									style="margin-bottom: 4px; line-height: 1.2;"
								>
									{schedule.title}
								</p>
								<p
									class="text-[1.5rem] lg:text-[1.25rem] md:text-[1.125rem] text-[#2E3192] font-medium"
								>
									{schedule.time}
								</p>
							</div>
						</div>
					{:else}
						<p
							class="text-[0.8rem] lg:text-[1.25rem] md:text-[1.125rem] text-[#2E3192] font-medium"
						>
							No event today
						</p>
					{/each}
				</div>
			</div>
		</div>

		<div class="relative" style="margin-bottom: 40px;">
			<div
				class="bg-[#C4D82E]/70 text-[#2E3192] text-[1rem] lg:text-[2rem] md:text-[1.75rem] font-extrabold rounded-[2.5rem] lg:rounded-4xl md:rounded-[1.75rem] ml-auto"
				style="padding: 24px 40px; margin-bottom: 20px; letter-spacing: 0.02em; width: 87.5%;"
			>
				MY TASK
			</div>
			<div
				class="bg-[#C4D82E]/70 rounded-[3rem] lg:rounded-[2.5rem] md:rounded-4xl relative"
				style="padding: 60px 50px; min-height: 480px;"
			>
				<div class="flex flex-col" style="gap: 32px;">
					{#each tasks as task (task.id)}
						<div class="flex items-start" style="gap: 20px;">
							<div
								class="rounded-full bg-[#FF6B35] shrink-0"
								style="width: 28px; height: 28px; margin-top: 4px;"
							></div>
							<div>
								<p
									class="text-[2rem] lg:text-[1.75rem] md:text-[1.5rem] font-extrabold text-[#2E3192]"
									style="margin-bottom: 4px; line-height: 1.2;"
								>
									{task.title}
								</p>
								<p
									class="text-[1.5rem] lg:text-[1.25rem] md:text-[1.125rem] text-[#2E3192] font-extrabold"
								>
									at {task.dueDate}
								</p>
							</div>
						</div>
					{:else}
						<p
							class="text-[0.8rem] lg:text-[1.25rem] md:text-[1.125rem] text-[#2E3192] font-medium"
						>
							No pending tasks
						</p>
					{/each}
				</div>
				<img
					src="/full-mascot.png"
					alt="Mascot"
					class="absolute w-45 lg:w-60 sm:w-60 -top-[90px] sm:-top-[120px] -right-10 h-auto z-0"
				/>
			</div>
		</div>
	</div>
</div>
