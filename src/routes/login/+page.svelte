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
	<div class="absolute top-0 left-0 right-0 h-44 bg-[#C4D82E] rounded-b-[5rem] flex items-center justify-center">
		<img src="/Artboard 1_logo.png" alt="Gerbang Waktu" class="w-48 pt-4" />
	</div>

	<div class="w-full max-w-lg z-10 mt-20">
		<div class="bg-[#F5F1E8] px-6 pb-6 pt-12">
			<h2 class="text-2xl font-bold text-[#2E3192] text-center mb-1">It's Time to unlocked</h2>
			<h3 class="text-xl font-bold text-[#2E3192] text-center mb-10">New Experiment</h3>

			<form onsubmit={(e) => { e.preventDefault(); handleLogin(); }}>
				<div class="bg-[#C4D82E] rounded-[3rem] p-8 space-y-5 relative">
					<img src="/Artboard 2.png" alt="Mascot" class="w-28 absolute -top-10 -left-6" />
					
					<h4 class="text-3xl font-bold text-[#2E3192] text-center mb-4">LOGIN</h4>
					
					<div>
						<label class="block text-[#2E3192] font-bold text-lg mb-2">Username</label>
						<input
							type="text"
							bind:value={username}
							class="w-full px-6 py-4 rounded-full bg-[#FF6B35] focus:outline-none text-white placeholder:text-white/70"
							required
						/>
					</div>

					<div>
						<label class="block text-[#2E3192] font-bold text-lg mb-2">Password</label>
						<input
							type="password"
							bind:value={password}
							class="w-full px-6 py-4 rounded-full bg-[#FF6B35] focus:outline-none text-white placeholder:text-white/70"
							required
						/>
					</div>

					<button
						type="submit"
						class="w-full py-5 bg-[#FF6B35] text-[#2E3192] font-bold text-2xl rounded-full hover:bg-[#ff8555] transition mt-6"
					>
						LOGIN
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
