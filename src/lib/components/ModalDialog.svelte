<script lang="ts">
	import { goto } from '$app/navigation';

	let { show = $bindable(false) } = $props();

	function handleNewSchedule() {
		show = false;
		goto('/schedule/new');
	}

	function handleNewTask() {
		show = false;
		goto('/tasks/new');
	}
</script>

{#if show}
	<div
		class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
		onclick={() => (show = false)}
	>
		<div
			class="bg-[#F5F1E8] rounded-[3rem] p-8 w-full max-w-md"
			onclick={(e) => e.stopPropagation()}
		>
			<div class="flex items-center justify-center mb-8">
				<img src="/right-ribbon.png" alt="Mascot" class="w-32" />
			</div>
			<h3 class="text-2xl font-bold text-[#2E3192] text-center mb-8">GOOD MORNING, LOU!</h3>
			<div class="space-y-4">
				<button
					onclick={handleNewSchedule}
					class="w-full py-5 bg-gray-300 text-[#2E3192] font-bold text-xl rounded-full hover:bg-gray-400 transition"
				>
					NEW SCHEDULE
				</button>
				<button
					onclick={handleNewTask}
					class="w-full py-5 bg-gray-300 text-[#2E3192] font-bold text-xl rounded-full hover:bg-gray-400 transition"
				>
					NEW TASK
				</button>
			</div>
		</div>
	</div>
{/if}
