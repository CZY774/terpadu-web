<script lang="ts">
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';

	function handleLogin() {
		if (username && password) {
			localStorage.setItem('isAuthenticated', 'true');
			localStorage.setItem('username', username);
			goto('/home');
		}
	}
</script>

<div class="min-h-screen bg-[#F5F1E8] flex flex-col">
	<div class="relative h-64">
		<div class="absolute inset-0 bg-[#2E3192] rounded-b-[50%]"></div>
		<div class="absolute inset-0 bg-[#FF6B35] rounded-b-[50%] m-2"></div>
		<div class="absolute inset-0 bg-[#C4D82E] rounded-b-[50%] m-4 flex items-start justify-center pt-10">
			<img src="/logo.png" alt="Gerbang Waktu" class="w-56" />
		</div>
	</div>

	<div class="flex-1 flex flex-col items-center px-6 pt-6 pb-12">
		<h2 class="text-3xl font-bold text-[#2E3192] text-center" style="margin-bottom: 4px;">It's Time to unlocked</h2>
		<h3 class="text-3xl font-bold text-[#2E3192] text-center" style="margin-bottom: 32px;">New Experiment</h3>

		<div class="relative w-full max-w-sm">
			<img style="transform: scaleX(-1);" src="/full-mascot.png" alt="Mascot" class="w-44 absolute -left-22 -top-10 z-10" />
			
			<form onsubmit={(e) => { e.preventDefault(); handleLogin(); }} class="bg-[#C4D82E]/40 rounded-[3.5rem] w-full" style="padding: 64px 40px 48px;">
				<h4 class="text-4xl font-bold text-[#2E3192] text-center" style="margin-bottom: 48px;">LOGIN</h4>
				
				<div style="margin-bottom: 40px;">
					<label class="block text-[#2E3192] font-bold text-xl" style="margin-bottom: 4px;">Username</label>
					<input
						type="text"
						bind:value={username}
						class="w-full px-6 py-4 rounded-full bg-[#FF6B35] focus:outline-none"
						required
					/>
				</div>

				<div style="margin-bottom: 80px;">
					<label class="block text-[#2E3192] font-bold text-xl" style="margin-bottom: 4px;">Password</label>
					<input
						type="password"
						bind:value={password}
						class="w-full px-6 py-4 rounded-full bg-[#FF6B35] focus:outline-none"
						required
					/>
				</div>

				<button type="submit" class="w-full py-5 bg-[#FF6B35] text-[#2E3192] font-bold text-3xl rounded-full">
					LOGIN
				</button>
			</form>
		</div>
	</div>
</div>
