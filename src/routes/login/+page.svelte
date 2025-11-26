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
	<div class="relative h-72 bg-[#C4D82E] rounded-b-[50%] flex items-start justify-center pt-12 overflow-visible">
		<img src="/Artboard 1_logo.png" alt="Gerbang Waktu" class="w-64" />
	</div>

	<div class="flex-1 flex flex-col items-center px-6 -mt-8">
		<div class="w-full max-w-md">
			<h2 class="text-3xl font-bold text-[#2E3192] text-center leading-tight">It's Time to unlocked</h2>
			<h3 class="text-3xl font-bold text-[#2E3192] text-center mb-8 leading-tight">New Experiment</h3>

			<div class="relative">
				<img src="/Artboard 2.png" alt="Mascot" class="w-36 absolute -top-12 -left-12 z-10" />
				
				<form onsubmit={(e) => { e.preventDefault(); handleLogin(); }} class="bg-[#C4D82E] rounded-[3rem] p-8 pt-16">
					<h4 class="text-4xl font-bold text-[#2E3192] text-center mb-8">LOGIN</h4>
					
					<div class="mb-4">
						<label class="block text-[#2E3192] font-bold text-xl mb-2">Username</label>
						<input
							type="text"
							bind:value={username}
							class="w-full px-6 py-4 rounded-full bg-[#FF6B35] focus:outline-none"
							required
						/>
					</div>

					<div class="mb-8">
						<label class="block text-[#2E3192] font-bold text-xl mb-2">Password</label>
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
