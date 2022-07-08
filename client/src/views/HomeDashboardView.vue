<script setup lang="ts">
	import Dashboard from '../views/Dashboard.vue';
	import Home from '../views/Home.vue';
	interface Props {}
	const props = defineProps<Props>();
	const user = true;
</script>

<template>
	<Dashboard v-if="user" />
	<Home v-else />
</template>
<style lang="scss"></style>
