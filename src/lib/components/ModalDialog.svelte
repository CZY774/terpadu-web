<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	let { show = $bindable(false) } = $props();

	function handleNewSchedule() {
		show = false;
		goto(resolve('/schedule/new'));
	}

	function handleNewTask() {
		show = false;
		goto(resolve('/tasks/new'));
	}
</script>

{#if show}
	<div
		class="fixed inset-0 bg-black/50 flex items-end justify-center z-50 pb-20"
		onclick={() => (show = false)}
		onkeydown={(e) => e.key === 'Escape' && (show = false)}
		role="button"
		tabindex="0"
		aria-label="Close dialog"
	>
		<div
			class="bg-[#F5F1E8] rounded-[3rem] p-6 w-full max-w-[425px] mx-4"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
			role="dialog"
			aria-modal="true"
			tabindex="-1"
		>
			<div class="space-y-3">
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
