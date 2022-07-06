<script setup lang="ts">
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
	import Home from './views/Home.vue';
	import Navbar from './components/Navbar.vue';
</script>

<template>
	<Navbar />
	<Home />
</template>

<style>
	@import url('https://fonts.googleapis.com/css?family=Roboto');

	html,
	body {
		height: 100vh;
		min-height: 100vh;
	}

	#app {
		font-family: 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #ffffff;
		height: 100vh;
	}
</style>
