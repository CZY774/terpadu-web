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
	<div class="relative h-64 bg-[#C4D82E] rounded-b-[50%] flex items-start justify-center pt-10">
		<img src="/Artboard 1_logo.png" alt="Gerbang Waktu" class="w-56" />
	</div>

	<div class="flex-1 flex flex-col items-center px-6">
		<div class="w-full max-w-md">
			<h2 class="text-3xl font-bold text-[#2E3192] text-center mt-8">It's Time to unlocked</h2>
			<h3 class="text-3xl font-bold text-[#2E3192] text-center mb-12">New Experiment</h3>

			<div class="relative">
				<img src="/full-mascot.png" alt="Mascot" class="w-36 absolute top-0 -left-16 z-10" />
				
				<form onsubmit={(e) => { e.preventDefault(); handleLogin(); }} class="bg-[#C4D82E] rounded-[3.5rem] px-12 py-14 ml-4">
					<h4 class="text-4xl font-bold text-[#2E3192] text-center mb-12">LOGIN</h4>
					
					<div class="mb-8">
						<label class="block text-[#2E3192] font-bold text-xl mb-3">Username</label>
						<input
							type="text"
							bind:value={username}
							class="w-full px-6 py-4 rounded-full bg-[#FF6B35] focus:outline-none"
							required
						/>
					</div>

					<div class="mb-20">
						<label class="block text-[#2E3192] font-bold text-xl mb-3">Password</label>
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
</div>
