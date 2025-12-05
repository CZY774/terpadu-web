<script lang="ts">
	import { onMount } from 'svelte';
	import { getSchedules, updateSchedule, type Schedule } from '$lib/db';

	let username = $state('');
	let schedules = $state<Schedule[]>([]);

	onMount(() => {
		username = localStorage.getItem('username') || 'LOU';
		loadSchedules();
	});

	function loadSchedules() {
		schedules = getSchedules().filter((s) => s.date === new Date().toISOString().split('T')[0]);
	}

	function toggleComplete(id: string, completed: boolean) {
		updateSchedule(id, { completed });
		loadSchedules();
	}
</script>

<div class="relative" style="padding: 40px 20px 120px 20px;">
	<!-- Decorative Wave -->
	<svg
		class="absolute top-0 right-0 w-[400px] h-[150px] pointer-events-none transform rotate-x-180 -translate-y-1/2"
		style="z-index: 20;"
		viewBox="0 0 300 150"
		preserveAspectRatio="none"
	>
		<path
			d="M 400,0 C 320,15 240,40 160,60 C 80,80 40,90 0,95"
			fill="none"
			stroke="#2E3192"
			stroke-width="25"
			stroke-linecap="round"
		/>
		<path
			d="M 400,10 C 320,25 240,50 160,70 C 80,90 40,100 0,105"
			fill="none"
			stroke="#E8E3D5"
			stroke-width="20"
			stroke-linecap="round"
		/>
		<path
			d="M 400,18 C 320,33 240,58 160,78 C 80,98 40,108 0,113"
			fill="none"
			stroke="#FF6B35"
			stroke-width="15"
			stroke-linecap="round"
		/>
		/>
	</svg>

	<div class="max-w-2xl mx-auto relative" style="z-index: 1;">
		<h1 class="text-base sm:text-lg font-bold text-[#2E3192] mb-0.5">
			GOOD MORNING, {username.toUpperCase()}
		</h1>
		<h2 class="text-3xl sm:text-4xl font-bold text-[#2E3192] mb-3 sm:mb-4">MY SCHEDULE</h2>

		<div
			class="bg-[#C4D82E] rounded-[2.5rem] sm:rounded-[3rem] p-4 sm:p-5 mb-3 sm:mb-4 min-h-[120px] sm:min-h-[130px]"
		>
			{#if schedules.length > 0}
				<div class="space-y-2 sm:space-y-2.5">
					{#each schedules as schedule (schedule.id)}
						<div class="flex items-start gap-2 sm:gap-2.5">
							<button
								onclick={() => toggleComplete(schedule.id, !schedule.completed)}
								class="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#FF6B35] flex-shrink-0 mt-1 {schedule.completed
									? 'bg-[#FF6B35]'
									: 'bg-white'}"
								aria-label="Toggle complete"
							></button>
							<div class={schedule.completed ? 'opacity-50' : ''}>
								<p class="font-bold text-[#2E3192] text-lg sm:text-xl leading-tight">
									{schedule.title}
								</p>
								<p class="text-[#2E3192] text-sm sm:text-base">{schedule.time}</p>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<h3 class="text-3xl sm:text-4xl font-bold text-[#2E3192] mb-2 sm:mb-3">CALENDAR</h3>
		<div class="bg-[#C4D82E] rounded-[2.5rem] sm:rounded-[3rem] p-4 sm:p-5 mb-3 sm:mb-4">
			<h4 class="text-lg sm:text-xl font-extrabold text-black mb-2 sm:mb-3">NOVEMBER</h4>
			<div class="grid grid-cols-7 gap-1.5 sm:gap-2.5 text-center mb-1 sm:mb-1.5">
				{#each ['S', 'M', 'T', 'W', 'T', 'F', 'S'] as day, i (i)}
					<div class="font-bold text-black text-sm sm:text-base">{day}</div>
				{/each}
			</div>
			<div class="grid grid-cols-7 gap-1.5 sm:gap-2.5 text-center">
				{#each Array.from({ length: 30 }, (_, i) => i + 1) as day (day)}
					<button
						class="w-7 h-7 sm:w-9 sm:h-9 rounded-full {day === 20
							? 'bg-[#2E3192] text-white'
							: 'text-black'} font-bold text-sm sm:text-base hover:bg-[#2E3192] hover:text-white transition"
					>
						{day}
					</button>
				{/each}
			</div>
		</div>

		<h3 class="text-3xl sm:text-4xl font-bold text-[#2E3192] mb-2 sm:mb-3">CATEGORY EVENT</h3>
		<div class="grid grid-cols-4 gap-2 sm:gap-3 max-w-md mx-auto">
			<button
				class="aspect-square bg-linear-to-br from-[#C4D82E] to-[#B8CC28] rounded-[1.2rem] sm:rounded-3xl flex items-center justify-center p-2 sm:p-3 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.3)] sm:shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
				aria-label="Book Category"
			>
				<svg viewBox="0 0 100 100" fill="none" class="w-full h-full">
					<defs>
						<linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
							<stop offset="100%" style="stop-color:#FF8C69;stop-opacity:1" />
						</linearGradient>
					</defs>
					<path
						d="M30 20 L70 20 Q75 20 75 25 L75 75 Q75 80 70 80 L30 80 Q25 80 25 75 L25 25 Q25 20 30 20 Z"
						fill="url(#bookGrad)"
						stroke="#D94A2A"
						stroke-width="2"
					/>
					<rect x="35" y="30" width="30" height="3" rx="1.5" fill="#FFA080" />
					<rect x="35" y="40" width="25" height="2.5" rx="1.25" fill="#FFA080" />
					<rect x="35" y="48" width="28" height="2.5" rx="1.25" fill="#FFA080" />
					<rect x="35" y="56" width="22" height="2.5" rx="1.25" fill="#FFA080" />
				</svg>
			</button>

			<button
				class="aspect-square bg-linear-to-br from-[#C4D82E] to-[#B8CC28] rounded-[1.2rem] sm:rounded-3xl flex items-center justify-center p-2 sm:p-3 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.3)] sm:shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
				aria-label="Hand Category"
			>
				<svg viewBox="0 0 100 100" fill="none" class="w-full h-full">
					<defs>
						<linearGradient id="handGrad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
							<stop offset="100%" style="stop-color:#FF8C69;stop-opacity:1" />
						</linearGradient>
					</defs>
					<ellipse cx="32" cy="48" rx="10" ry="16" fill="url(#handGrad)" />
					<ellipse cx="45" cy="43" rx="10" ry="18" fill="url(#handGrad)" />
					<ellipse cx="58" cy="45" rx="10" ry="17" fill="url(#handGrad)" />
					<ellipse cx="70" cy="48" rx="9" ry="15" fill="url(#handGrad)" />
					<path
						d="M25 64 Q30 72 40 76 Q50 79 60 76 Q70 72 75 64 L75 55 Q75 50 70 48 Q60 45 50 45 Q40 45 30 48 Q25 50 25 55 Z"
						fill="url(#handGrad)"
					/>
				</svg>
			</button>

			<button
				class="aspect-square bg-linear-to-br from-[#C4D82E] to-[#B8CC28] rounded-[1.2rem] sm:rounded-3xl flex items-center justify-center p-2 sm:p-3 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.3)] sm:shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
				aria-label="Carrot Category"
			>
				<svg viewBox="0 0 100 100" fill="none" class="w-full h-full">
					<defs>
						<linearGradient id="carrotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
							<stop offset="100%" style="stop-color:#FF8C69;stop-opacity:1" />
						</linearGradient>
					</defs>
					<path d="M47 25 L50 18 L53 25 L51 80 Q50 85 49 80 Z" fill="url(#carrotGrad)" />
					<path
						d="M42 28 Q38 30 36 36 L33 42"
						stroke="url(#carrotGrad)"
						stroke-width="3"
						stroke-linecap="round"
						fill="none"
					/>
					<path
						d="M58 28 Q62 30 64 36 L67 42"
						stroke="url(#carrotGrad)"
						stroke-width="3"
						stroke-linecap="round"
						fill="none"
					/>
					<path
						d="M45 30 Q42 32 40 38"
						stroke="url(#carrotGrad)"
						stroke-width="2.5"
						stroke-linecap="round"
						fill="none"
					/>
					<path
						d="M55 30 Q58 32 60 38"
						stroke="url(#carrotGrad)"
						stroke-width="2.5"
						stroke-linecap="round"
						fill="none"
					/>
				</svg>
			</button>

			<button
				class="aspect-square bg-linear-to-br from-[#C4D82E] to-[#B8CC28] rounded-[1.2rem] sm:rounded-3xl flex items-center justify-center p-2 sm:p-3 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.3)] sm:shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
				aria-label="People Category"
			>
				<svg viewBox="0 0 100 100" fill="none" class="w-full h-full">
					<defs>
						<linearGradient id="peopleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
							<stop offset="100%" style="stop-color:#FF8C69;stop-opacity:1" />
						</linearGradient>
					</defs>
					<circle cx="35" cy="32" r="11" fill="url(#peopleGrad)" />
					<path
						d="M35 43 Q28 50 28 60 L28 75 Q28 77 26 77 L24 77 Q22 77 22 75 L22 60 Q22 48 35 43"
						fill="url(#peopleGrad)"
					/>
					<path
						d="M35 43 Q42 50 42 60 L42 75 Q42 77 44 77 L46 77 Q48 77 48 75 L48 60 Q48 48 35 43"
						fill="url(#peopleGrad)"
					/>
					<circle cx="65" cy="32" r="11" fill="url(#peopleGrad)" />
					<path
						d="M65 43 Q58 50 58 60 L58 75 Q58 77 56 77 L54 77 Q52 77 52 75 L52 60 Q52 48 65 43"
						fill="url(#peopleGrad)"
					/>
					<path
						d="M65 43 Q72 50 72 60 L72 75 Q72 77 74 77 L76 77 Q78 77 78 75 L78 60 Q78 48 65 43"
						fill="url(#peopleGrad)"
					/>
				</svg>
			</button>
		</div>
	</div>
</div>
