<script setup lang="ts">
	import { computed, onBeforeMount } from 'vue';
	import { useStore } from 'vuex';
	import ChartLine from '../components/ChartLine.vue';
	import ChartPie from '../components/ChartPie.vue';
	// interface Props {}
	// const props = defineProps<Props>();

	const store = useStore();

onBeforeMount(()=>{
  store.dispatch('getSentiments');
  store.dispatch('getClose');
})


  const sentiment = computed(() => store.state.sentiments);

  const close = computed(() => store.state.closes);

  const predicted = computed(() => store.state.predicted);


  const closes = [];
  const predicteds = [];


	const chartData = {
		labels: [0,0,0,0,0,0],
		datasets: [
			{
				label: 'Close Values',
				borderColor: '#f4db7d',
				data: [close.value[0],close.value[1],close.value[2],close.value[3],close.value[4],close.value[5]],
			},
      {
        label: 'Predicted Values ',
        borderColor: '#E46651',
        data: [predicted.value[0],predicted.value[1],predicted.value[2],predicted.value[3],predicted.value[4],predicted.value[5]],
      },
		],
	};

	const chartDataSentiment = {
		labels: ['Positive', 'Negative', 'Neutral'],
		datasets: [
			{
				label: 'Data One',

				backgroundColor: ['#41B883', '#E46651', '#9b9b9b'],
				data: [sentiment.value.positives,sentiment.value.negatives,sentiment.value.neutrals],
			},
		],
	};


  /*for (const i of temp_closes){
    closes.push(i)
  }

  for (const i of temp_predicted){
    let count = 0
    predicted.push(i)
    chartData.labels.push(count)
  }*/

	// Calls axios to get the sentiment data from the server.




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
