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

  console.log(close.value.close_values);

  const closes =[]
  const predicted = []



console.log(closes)

	const chartData = {
		labels: [],
		datasets: [
			{
				label: 'Close Values',
				borderColor: '#f4db7d',
				data: closes,
			},
      {
        label: 'Predicted Values ',
        borderColor: '#E46651',
        data: predicted,
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


  for (const i of close.value.close_values){
    closes.push(i)
  }

  for (const i of close.value.predicted_values){
    let count = 0
    predicted.push(i)
    chartData.labels.push(count++)
  }

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
