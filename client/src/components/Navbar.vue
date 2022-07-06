<script setup lang="ts"></script>

<template>
	<header>
		<nav
			class="h-28 flex flex-1 gap-10 bg-gradient-to-b from-primary-300 to-primary-100 p-8"
		>
			<img src="../assets/logo.png" alt="" />
			<div class="flex flex-1 gap-10 justify-start items-center">
				<router-link to="/"> Home </router-link>
				<router-link to="/products"> Products </router-link>
				<router-link to="/register"> Register </router-link>
				<router-link to="/login"> Login </router-link>
			</div>
			<div class="justify-end">
				<div>
					<img class="w-10" src="../assets/logo.png" alt="" />
				</div>
			</div>
		</nav>
	</header>
</template>

<style scoped></style>
