<script setup lang="ts">
	import { h } from 'vue';
	import { Pie } from 'vue-chartjs';
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		ArcElement,
		CategoryScale,
	} from 'chart.js';
	ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

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
		chartId: 'pie-chart',
		datasetId: 'pie-chart-dataset',
	});

	// Added a ts-ignore flag because Line is not recognized by as a valid
	// HTML element.
	const pieChart = () => {
		//@ts-ignore:next-line
		return h(Pie, {
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
	<pieChart />
</template>
<style lang="css"></style>
