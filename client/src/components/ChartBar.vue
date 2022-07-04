<script setup lang="ts">
	import { h } from 'vue';
	import { Bar } from 'vue-chartjs';
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		BarElement,
		CategoryScale,
		LinearScale,
	} from 'chart.js';
	ChartJS.register(
		Title,
		Tooltip,
		Legend,
		BarElement,
		CategoryScale,
		LinearScale
	);

	interface Props {
		chartData: {
			labels: string[];
			datasets: object[];
		};
		chartOptions: object;
		chartId: string;
		datasetId: string;
		width?: number;
		height?: number;
		cssClasses?: string;
		styles?: object;
		plugins?: object;
	}
	const props = withDefaults(defineProps<Props>(), {
		chartId: 'bar-chart',
		datasetId: 'bar-chart-dataset',
		width: 800,
		height: 800,
	});

	// Added a ts-ignore flag because Bar is not recognized by as a valid
	// HTML element.
	const barChart = () => {
		//@ts-ignore:next-line
		return h(Bar, {
			chartData: props.chartData,
			chartOptions: props.chartOptions,
			chartId: props.chartId,
			width: props.width,
			height: props.height,
			cssClasses: props.cssClasses,
			styles: props.styles,
			plugins: props.plugins,
		});
	};
</script>
<template>
	<barChart />
</template>
