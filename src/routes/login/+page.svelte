<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	let username = '';
	let password = '';
	let showPassword = false;

	function handleLogin() {
		if (username && password) {
			localStorage.setItem('isAuthenticated', 'true');
			localStorage.setItem('username', username);
			goto(resolve('/home'));
		}
	}
</script>

<div class="min-h-screen bg-[#F5F1E8] flex flex-col">
	<div class="relative h-36 md:h-56 lg:h-56">
		<svg class="absolute inset-0 w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
			<path d="M 0,0 L 0,240 Q 500,400 1000,240 L 1000,0 Z" fill="#C4D82E" />
			<path
				d="M 0,240 Q 500,400 1000,240"
				fill="none"
				stroke="#FF6B35"
				stroke-width="30"
				stroke-linecap="round"
			/>
			<path
				d="M 0,240 Q 500,400 1000,240"
				fill="none"
				stroke="#2E3192"
				stroke-width="22"
				transform="translate(0, 12)"
				stroke-linecap="round"
			/>
		</svg>
		<div class="absolute inset-0 flex items-start justify-center pt-8 md:pt-10 lg:pt-10">
			<img src="/logo.png" alt="Gerbang Waktu" class="w-32 md:w-52 lg:w-52" />
		</div>
	</div>

	<div
		style="padding: 0px 40px;"
		class="flex-1 flex flex-col items-center px-3 md:px-6 pt-6 md:pt-16 lg:pt-24 pb-12"
	>
		<h2
			class="text-2xl md:text-3xl font-bold text-[#2E3192] text-center"
			style="margin-bottom: 4px;"
		>
			It's Time to unlocked
		</h2>
		<h3
			class="text-2xl md:text-3xl font-bold text-[#2E3192] text-center"
			style="margin-bottom: 62px;"
		>
			New Experiment
		</h3>

		<div class="relative w-full max-w-sm">
			<img
				style="transform: scaleX(-1);"
				src="/full-mascot.png"
				alt="Mascot"
				class="w-40 md:w-50 absolute -left-12 md:-left-15 -top-18 md:-top-24 z-10 md:z-10"
			/>

			<form
				onsubmit={(e) => {
					e.preventDefault();
					handleLogin();
				}}
				class="bg-[#C4D82E]/40 rounded-[3.5rem] w-full shadow-lg"
				style="padding: 64px 40px 48px;"
			>
				<h4 class="text-4xl font-bold text-[#2E3192] text-center" style="margin-bottom: 48px;">
					LOGIN
				</h4>

				<div style="margin-bottom: 20px;">
					<label
						for="username"
						class="block text-[#2E3192] font-bold text-xl"
						style="margin-bottom: 4px;">Username</label
					>
					<input
						id="username"
						type="text"
						bind:value={username}
						class="w-full px-6 py-4 rounded-full bg-[#FF6B35] focus:outline-none"
						required
					/>
				</div>

				<div style="margin-bottom: 60px;">
					<label
						for="password"
						class="block text-[#2E3192] font-bold text-xl"
						style="margin-bottom: 4px;">Password</label
					>
					<div class="relative">
						<input
							id="password"
							type={showPassword ? 'text' : 'password'}
							bind:value={password}
							class="w-full px-6 py-4 pr-14 rounded-full bg-[#FF6B35] focus:outline-none"
							required
						/>
						<button
							type="button"
							onclick={() => (showPassword = !showPassword)}
							class="absolute right-2 top-1/2 -translate-y-1/2 text-[#2E3192]"
							aria-label={showPassword ? 'Hide password' : 'Show password'}
						>
							{#if showPassword}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									class="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
									/>
								</svg>
							{:else}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									class="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							{/if}
						</button>
					</div>
				</div>

				<button
					type="submit"
					class="w-full py-5 bg-[#FF6B35] text-[#2E3192] font-bold text-3xl rounded-full"
				>
					LOGIN
				</button>
			</form>
		</div>
	</div>
</div>
