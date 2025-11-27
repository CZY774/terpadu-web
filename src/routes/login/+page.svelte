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
	<div class="relative h-36 md:h-56 lg:h-56">
		<svg class="absolute inset-0 w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
			<path d="M 0,0 L 0,240 Q 500,400 1000,240 L 1000,0 Z" fill="#C4D82E" />
			<path d="M 0,240 Q 500,400 1000,240" fill="none" stroke="#FF6B35" stroke-width="30" stroke-linecap="round" />
			<path d="M 0,240 Q 500,400 1000,240" fill="none" stroke="#2E3192" stroke-width="22" transform="translate(0, 12)" stroke-linecap="round" />
		</svg>
		<div class="absolute inset-0 flex items-start justify-center pt-8 md:pt-10 lg:pt-10">
			<img src="/logo.png" alt="Gerbang Waktu" class="w-32 md:w-52 lg:w-52" />
		</div>
	</div>

	<div  style="padding: 0px 40px;" class="flex-1 flex flex-col items-center px-3 md:px-6 pt-6 md:pt-16 lg:pt-24 pb-12">
		<h2 class="text-2xl md:text-3xl font-bold text-[#2E3192] text-center" style="margin-bottom: 4px;">It's Time to unlocked</h2>
		<h3 class="text-2xl md:text-3xl font-bold text-[#2E3192] text-center" style="margin-bottom: 62px;">New Experiment</h3>

		<div class="relative w-full max-w-sm">
			<img style="transform: scaleX(-1);" src="/full-mascot.png" alt="Mascot" class="w-40 md:w-50 absolute -left-12 md:-left-15 -top-18 md:-top-24 z-10 md:z-10" />
			
			<form onsubmit={(e) => { e.preventDefault(); handleLogin(); }} class="bg-[#C4D82E]/40 rounded-[3.5rem] w-full shadow-lg" style="padding: 64px 40px 48px;">
				<h4 class="text-4xl font-bold text-[#2E3192] text-center" style="margin-bottom: 48px;">LOGIN</h4>
				
				<div style="margin-bottom: 20px;">
					<label class="block text-[#2E3192] font-bold text-xl" style="margin-bottom: 4px;">Username</label>
					<input
						type="text"
						bind:value={username}
						class="w-full px-6 py-4 rounded-full bg-[#FF6B35] focus:outline-none"
						required
					/>
				</div>

				<div style="margin-bottom: 60px;">
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
