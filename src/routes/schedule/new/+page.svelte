<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { addSchedule } from '$lib/db';

	let title = $state('');
	let startDate = $state('');
	let endDate = $state('');
	let selectedCategory = $state('');

	function handleSubmit() {
		if (title && startDate) {
			addSchedule(title, '', startDate, '', selectedCategory);
			goto(resolve('/schedule'));
		}
	}
</script>

<div class="max-w-2xl mx-auto" style="padding: 40px 20px 120px 20px;">
	<h1 class="text-3xl font-bold text-[#2E3192] mb-8">NEW SCHEDULE</h1>

	<form
		onsubmit={(e) => {
			e.preventDefault();
			handleSubmit();
		}}
		class="space-y-6"
	>
		<div>
			<label for="event-name" class="block text-[#2E3192] font-bold text-lg mb-2">NAME EVENT</label>
			<input
				id="event-name"
				type="text"
				bind:value={title}
				class="w-full px-6 py-4 rounded-full bg-gray-300 focus:outline-none text-[#2E3192] font-bold placeholder:text-gray-500"
				required
			/>
		</div>

		<div>
			<label for="start-event" class="block text-[#2E3192] font-bold text-lg mb-2"
				>START EVENT</label
			>
			<input
				id="start-event"
				type="datetime-local"
				bind:value={startDate}
				class="w-full px-6 py-4 rounded-full bg-gray-300 focus:outline-none text-[#2E3192] font-bold"
				required
			/>
		</div>

		<div>
			<label for="end-event" class="block text-[#2E3192] font-bold text-lg mb-2">END EVENT</label>
			<input
				id="end-event"
				type="datetime-local"
				bind:value={endDate}
				class="w-full px-6 py-4 rounded-full bg-gray-300 focus:outline-none text-[#2E3192] font-bold"
			/>
		</div>

		<fieldset>
			<legend class="block text-[#2E3192] font-bold text-lg mb-4">REMAINDER :</legend>
			<div class="grid grid-cols-2 gap-3">
				<button type="button" class="py-4 bg-gray-300 text-[#2E3192] font-bold rounded-full"
					>30 MINUTE</button
				>
				<button type="button" class="py-4 bg-gray-300 text-[#2E3192] font-bold rounded-full"
					>15 MINUTE</button
				>
				<button type="button" class="py-4 bg-gray-300 text-[#2E3192] font-bold rounded-full"
					>1 HOUR</button
				>
				<button type="button" class="py-4 bg-gray-300 text-[#2E3192] font-bold rounded-full"
					>1 DAY</button
				>
			</div>
		</fieldset>

		<fieldset>
			<legend class="block text-[#2E3192] font-bold text-lg mb-4">CATEGORY EVENT</legend>
			<div class="flex gap-4 justify-center flex-wrap">
				<button
					type="button"
					class="w-24 h-24 bg-[#C4D82E] rounded-[2rem] flex items-center justify-center p-3 shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
					onclick={() => (selectedCategory = 'book')}
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
					type="button"
					class="w-24 h-24 bg-[#C4D82E] rounded-[2rem] flex items-center justify-center p-3 shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
					onclick={() => (selectedCategory = 'hands')}
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
					type="button"
					class="w-24 h-24 bg-[#C4D82E] rounded-[2rem] flex items-center justify-center p-3 shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
					onclick={() => (selectedCategory = 'carrot')}
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
					type="button"
					class="w-24 h-24 bg-[#C4D82E] rounded-[2rem] flex items-center justify-center p-3 shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
					onclick={() => (selectedCategory = 'people')}
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
		</fieldset>

		<div class="flex gap-4 pt-4">
			<button
				type="submit"
				class="flex-1 py-5 bg-[#FF6B35] text-white font-bold rounded-full text-lg">Save</button
			>
			<button
				type="button"
				onclick={() => goto(resolve('/schedule'))}
				class="flex-1 py-5 bg-gray-300 text-[#2E3192] font-bold rounded-full text-lg">Cancel</button
			>
		</div>
	</form>
</div>
