<script setup lang="ts">
	import ChartBar from '../components/ChartBar.vue';
	import Navbar from '../components/Navbar.vue';

	const chartData = {
		labels: ['January', 'February', 'March'],
		datasets: [{ data: [40, 20, 12] }],
	};
	const chartOptions = { responsive: false };
	const height = 800;
	const width = 800;
</script>
<template>
	<Navbar></Navbar>
	<ChartBar :chart-data="chartData" :chart-options="chartOptions"></ChartBar>
</template>
<style lang="scss"></style>
