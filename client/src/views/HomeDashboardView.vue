<script setup lang="ts">
	import Dashboard from '../views/Dashboard.vue';
	import Home from '../views/Home.vue';
</script>

<template>
	<Dashboard v-if="$store.state.user" />
	<Home v-else />
</template>
<style lang="scss"></style>
