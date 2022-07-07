<script setup lang="ts"></script>

<template>
	<header class="bg-white w-full flex items-center">
		<div class="container">
			<div class="flex mx-2 items-center justify-between relative">
				<div class="px-4 w-40 max-w-full">
					<a href="javascript:void(0)" class="w-full block py-5">
						<img
							src="../assets/logo.png"
							alt="logo"
							class="w-full"
						/>
					</a>
				</div>
				<div class="flex px-4 justify-between items-center w-full">
					<div>
						<nav
							class="absolute py-5 px-6 lg:static lg:shadow-none"
						>
							<ul class="flex gap-6">
								<li>
									<router-link
										to="/home"
										class="py-3 px-5 flex inline-flex ease-in duration-300 hover:bg-primary-500 rounded-lg"
									>
										Home
									</router-link>
								</li>
								<li>
									<router-link
										to="/pricing"
										class="py-3 px-5 flex inline-flex ease-in duration-300 hover:bg-primary-500 rounded-lg"
									>
										Pricing
									</router-link>
								</li>
							</ul>
						</nav>
					</div>
					<ul class="flex gap-6 justify-end">
						<li>
							<router-link
								to="/login"
								class="py-3 px-5 ease-in duration-300 hover:bg-primary-500 rounded-lg"
							>
								Login
							</router-link>
						</li>
						<li>
							<router-link
								to="/register"
								class="py-3 px-5 bg-primary-300 ease-in duration-100 hover:bg-primary-500 rounded-lg"
							>
								Sign Up
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped></style>
