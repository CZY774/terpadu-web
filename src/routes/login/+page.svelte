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

<div class="min-h-screen bg-[#F5F1E8] flex flex-col items-center justify-center p-4 relative overflow-hidden">
	<svg class="absolute top-0 right-0 w-full h-48" viewBox="0 0 800 200" preserveAspectRatio="none">
		<path d="M 400,50 Q 600,0 800,100 L 800,0 L 0,0 L 0,100 Q 200,150 400,50" fill="none" stroke="#2E3192" stroke-width="16" />
		<path d="M 400,50 Q 600,0 800,100 L 800,0 L 0,0 L 0,100 Q 200,150 400,50" fill="none" stroke="#F5F1E8" stroke-width="12" transform="translate(0, 8)" />
		<path d="M 400,50 Q 600,0 800,100 L 800,0 L 0,0 L 0,100 Q 200,150 400,50" fill="none" stroke="#FF6B35" stroke-width="12" transform="translate(0, 16)" />
	</svg>

	<div class="w-full max-w-md z-10 mt-20">
		<div class="bg-[#C4D82E] rounded-t-[3rem] p-8 text-center relative">
			<img src="/Artboard 1_logo.png" alt="Gerbang Waktu" class="w-56 mx-auto mb-4" />
			<img src="/Artboard 2.png" alt="Mascot" class="w-24 absolute -bottom-12 left-8" />
		</div>

		<div class="bg-[#F5F1E8] px-8 pb-8 pt-16">
			<h2 class="text-2xl font-bold text-[#2E3192] text-center mb-1">It's Time to unlocked</h2>
			<h3 class="text-xl font-bold text-[#2E3192] text-center mb-8">New Experiment</h3>

			<form on:submit|preventDefault={handleLogin}>
				<div class="bg-[#C4D82E] rounded-[2.5rem] p-8 space-y-6">
					<h4 class="text-3xl font-bold text-[#2E3192] text-center mb-6">LOGIN</h4>
					
					<div>
						<label class="block text-[#2E3192] font-bold mb-2 text-lg">Username</label>
						<input
							type="text"
							bind:value={username}
							class="w-full px-6 py-4 rounded-full bg-[#FF6B35] text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-[#2E3192] font-bold"
							required
						/>
					</div>

					<div>
						<label class="block text-[#2E3192] font-bold mb-2 text-lg">Password</label>
						<input
							type="password"
							bind:value={password}
							class="w-full px-6 py-4 rounded-full bg-[#FF6B35] text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-[#2E3192] font-bold"
							required
						/>
					</div>

					<button
						type="submit"
						class="w-full py-5 bg-[#FF6B35] text-[#2E3192] font-bold text-2xl rounded-full hover:bg-[#ff8555] transition mt-4"
					>
						LOGIN
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
