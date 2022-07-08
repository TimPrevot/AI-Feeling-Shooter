<script setup lang="ts">
	import { computed, onBeforeMount } from 'vue';
	import { useStore } from 'vuex';
	import ChartLine from '../components/ChartLine.vue';
	import ChartPie from '../components/ChartPie.vue';
	// interface Props {}
	// const props = defineProps<Props>();

	const store = useStore();

	const chartData = {
		labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
		datasets: [
			{
				label: 'Data One',
				borderColor: '#f4db7d',
				backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
				data: [40, 20, 80, 10],
			},
		],
	};

	const chartDataSentiment = {
		labels: ['Positive', 'Negative', 'Neutral'],
		datasets: [
			{
				label: 'Data One',

				backgroundColor: ['#41B883', '#E46651', '#9b9b9b'],
				data: [
					this.sentiments.value.positive,
					this.sentiments.value.negative,
					this.sentiments.value.neutral,
				],
			},
		],
	};

	// Calls axios to get the sentiment data from the server.
	onBeforeMount(async () => {
		store.dispatch('getSentiment');
	});

	const sentiments = computed(() => store.getters.sentiments);

	// const chartOptions = {
	// 	responsive: false,
	// 	maintainAspectRatio: false,
	// 	plugins: {
	// 		title: {
	// 			display: true,
	// 			text: 'Chart.js Line Chart',
	// 		},
	// 	},
	// 	scales: {
	// 		y: {
	// 			title: {
	// 				color: 'red',
	// 				display: true,
	// 				text: 'probability',
	// 			},
	// 		},
	// 	},
	// };

	const chartOptions = {
		responsive: false,
		maintainAspectRatio: false,
		scales: {
			x: {
				grid: { display: false },
			},
			y: {
				grid: { display: false },
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
		<ChartPie
			:chart-data="chartDataSentiment"
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
