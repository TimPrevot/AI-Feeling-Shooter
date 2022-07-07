<script setup lang="ts">
	import LogReg from './LogReg.vue';
</script>
<template>
	<main class="flex-initial flex-col gap-2 items-center">
		<section class="w-auto">
			<h1 class="text-center">The best app in the world!</h1>
			<p class="opacity-50 mb-4">
				This app helps you discover all the forests arround in order to
				reconnect with the nature. Download the app and escape from the
				urban chaos!
			</p>
		</section>
		<section
			class="flex items-center justify-center mx-auto text-center w-1/2"
		>
			<LogReg />
			<img class="h-80" src="../assets/dashboard.png" alt="dashboard" />
		</section>
	</main>
</template>
<style lang="scss"></style>
