<script setup lang="ts">
	import { h } from 'vue';
	import { Line } from 'vue-chartjs';
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale,
	} from 'chart.js';
	ChartJS.register(
		Title,
		Tooltip,
		Legend,
		LineElement,
		CategoryScale,
		LinearScale,
		PointElement
	);

	interface Props {
		chartData: {
			labels: string[];
			datasets: object[];
		};
		chartOptions: object;
		chartId: string;
		datasetId: string;
		width: number;
		height: number;
		cssClasses?: string;
		styles?: object;
		plugins?: object;
	}
	const props = withDefaults(defineProps<Props>(), {
		chartId: 'line-chart',
		datasetId: 'line-chart-dataset',
	});

	// Added a ts-ignore flag because Line is not recognized by as a valid
	// HTML element.
	const lineChart = () => {
		//@ts-ignore:next-line
		return h(Line, {
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
	<lineChart />
</template>
