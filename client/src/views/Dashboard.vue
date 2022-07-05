<script setup lang="ts">
	import ChartLine from '../components/ChartLine.vue';
	interface Props {}
	const props = defineProps<Props>();

	const chartData = {
		labels: ['January', 'February', 'March'],
		datasets: [
			{
				label: 'Data One',
				borderColor: '#f4db7d',
				backgroundColor: '#f87979',
				data: [40, 20, 12],
			},
		],
	};
	const chartOptions = { responsive: false, maintainAspectRatio: false };
	const height = 800;
	const width = 800;
</script>
<template>
	<ChartLine
		:chart-data="chartData"
		:chart-options="chartOptions"
		:height="height"
		:width="width"
	/>
</template>
<style lang="scss"></style>
