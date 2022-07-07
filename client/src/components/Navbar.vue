<script setup lang="ts"></script>

<template>
	<header class="bg-primary-100 w-full flex items-center">
		<div class="w-full flex mx-2 items-center justify-between relative">
			<div
				class="bg-secondary-100 m-4 px-3 py-2 w-32 max-w-full rounded-lg"
			>
				<img src="../assets/logo.png" alt="logo" class="w-full" />
			</div>
			<div class="flex pr-4 justify-between items-center w-full">
				<div>
					<nav class="absolute py-3 px-6 lg:static lg:shadow-none">
						<ul class="flex gap-6">
							<li>
								<router-link
									to="/"
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
                  Subscriptions
								</router-link>
							</li>
						</ul>
					</nav>
				</div>
        <div class="flex gap-6 justify-end">
          <ul v-if="!$store.state.user" class="flex gap-6 justify-end">
            <li>
              <router-link
                  to="/login"
                  class="py-3 px-5 ease-in duration-300 hover:bg-primary-500 rounded-lg"
              >
                Log In
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
          <button
              v-else
              @click="$store.dispatch('logout')"
          >
            Logout
          </button>
        </div>
			</div>
		</div>
	</header>
</template>

<style scoped></style>
