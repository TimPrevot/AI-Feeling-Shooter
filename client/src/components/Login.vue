<template>
	<main class="h-full">
		<section class="h-full w-full flex flex-wrap bg-secondary-100 items-center justify-center px-10">
			<div class="container">
				<div class="flex flex-wrap">
					<div class="w-full">
						<div
							class="max-w-md mx-auto relative overflow-hidden py-5 px-10"
						>
							<div
								class="mb-5 text-center inline-block max-w-[160px] mx-auto"
							>
								<img src="../assets/logo.png" alt="logo" />
							</div>
							<form @submit.prevent="login">
								<div class="mb-6">
									<input
										type="text"
										placeholder="Username"
										class="text-primary-100 w-full rounded-md border border-1 border-primary-100 py-3 px-5 bg-secondary-300 placeholder-[#ACB6BE] outline-none focus-visible:shadow-none focus:border-primary"
                    v-model="loginForm.username"
									/>
								</div>
								<div class="mb-6">
									<input
										type="password"
										placeholder="Password"
										class="text-primary-100 w-full rounded-md border border-1 border-primary-100 py-3 px-5 bg-secondary-300 text-base text-body-color placeholder-[#ACB6BE] outline-none focus-visible:shadow-none focus:border-primary"
                    v-model="loginForm.password"
									/>
								</div>
								<div class="mb-6">
									<input
										type="submit"
										value="Sign In"
										class="w-full rounded-md bg-primary-300 py-3 px-5 text-base text-white cursor-pointer hover:bg-primary-500 transition"
									/>
								</div>
							</form>
							<p class="text-base mb-2 text-[#adadad]">
								Connect With
							</p>
							<ul class="flex justify-between -mx-2 mb-6">
								<li class="px-2 w-full">
									<a
										href="javascript:void(0)"
										class="flex h-11 items-center justify-center rounded-md bg-[#4064AC] hover:bg-opacity-90"
									>
										<img
											src="../assets/facebook.svg"
											alt="facebook
									logo"
										/>
									</a>
								</li>
								<li class="px-2 w-full">
									<a
										href="javascript:void(0)"
										class="flex h-11 items-center justify-center rounded-md bg-[#1C9CEA] hover:bg-opacity-90"
									>
										<img
											src="../assets/twitter.svg"
											alt="twitter logo"
										/>
									</a>
								</li>
								<li class="px-2 w-full">
									<a
										href="javascript:void(0)"
										class="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
									>
										<img
											src="../assets/google.svg"
											alt="google logo"
										/>
									</a>
								</li>
							</ul>
							<a
								href="javascript:void(0)"
								class="text-base inline-block mb-2 text-[#adadad] hover:underline hover:text-primary-100"
							>
								Forget Password?
							</a>
							<p class="text-base text-[#adadad]">
								Not a member yet?
								<router-link
									to="/register"
									class="text-primary hover:underline hover:text-primary-100"
								>
									Sign Up
								</router-link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useStore } from 'vuex';

	const store = useStore();
	const loginForm = ref({});



	const login = () => {
    console.log(loginForm.value)
		store.dispatch('login', loginForm.value);
	};
</script>

<style scoped></style>