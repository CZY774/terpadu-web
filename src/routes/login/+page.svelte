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
	<div class="absolute top-0 left-0 right-0 h-32 bg-[#C4D82E] rounded-b-[4rem]">
		<img src="/Artboard 1_logo.png" alt="Gerbang Waktu" class="w-48 mx-auto pt-4" />
	</div>

	<div class="w-full max-w-md z-10 mt-32">
		<div class="bg-[#F5F1E8] px-8 pb-8 pt-8 relative">
			<h2 class="text-2xl font-bold text-[#2E3192] text-center mb-1">It's Time to unlocked</h2>
			<h3 class="text-xl font-bold text-[#2E3192] text-center mb-8">New Experiment</h3>

			<img src="/Artboard 2.png" alt="Mascot" class="w-28 absolute -top-4 left-4" />

			<form on:submit|preventDefault={handleLogin}>
				<div class="bg-[#C4D82E] rounded-[2.5rem] p-8 space-y-4">
					<h4 class="text-3xl font-bold text-[#2E3192] text-center mb-4">LOGIN</h4>
					
					<div>
						<label class="block text-[#2E3192] font-bold mb-2">Username</label>
						<input
							type="text"
							bind:value={username}
							class="w-full px-6 py-3 rounded-full bg-[#FF6B35] focus:outline-none"
							required
						/>
					</div>

					<div>
						<label class="block text-[#2E3192] font-bold mb-2">Password</label>
						<input
							type="password"
							bind:value={password}
							class="w-full px-6 py-3 rounded-full bg-[#FF6B35] focus:outline-none"
							required
						/>
					</div>

					<button
						type="submit"
						class="w-full py-4 bg-[#FF6B35] text-[#2E3192] font-bold text-xl rounded-full hover:bg-[#ff8555] transition mt-6"
					>
						LOGIN
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
