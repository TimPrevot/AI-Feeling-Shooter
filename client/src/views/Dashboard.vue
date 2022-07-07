<script setup lang="ts">
	import ChartLine from '../components/ChartLine.vue';
	// interface Props {}
	// const props = defineProps<Props>();

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
	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			title: {
				display: true,
				text: 'Chart.js Line Chart',
			},
		},
		scales: {
			y: {
				title: {
					color: 'red',
					display: true,
					text: 'probability',
				},
			},
		},
	};
	const height = 400;
	const width = 400;
</script>
<template>
	<div
		class="bg-primary-400 h-full py-5 overflow-hidden flex flex-inline place-content-around"
	>
		<ChartLine
			:chart-data="chartData"
			:chart-options="chartOptions"
			:height="height"
			:width="width"
		/>
		<ChartLine
			:chart-data="chartData"
			:chart-options="chartOptions"
			:height="height"
			:width="width"
		/>
	</div>
</template>
<style lang="css">
	canvas {
		background-color: #fcfdfe;
	}
</style>
