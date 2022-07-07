<script setup lang="ts">
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
	import Navbar from './components/Navbar.vue';
</script>

<template>
	<Navbar />
	<router-view />
</template>

<style>
	@import url('https://fonts.googleapis.com/css?family=Roboto');

	html,
	body {
		height: 100vh;
		min-height: 100vh;
		color: #ffffff;
	}

	#app {
		font-family: 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>
