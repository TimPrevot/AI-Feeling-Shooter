<script setup lang="ts">
	import { computed, onBeforeMount } from 'vue';
	import { useStore } from 'vuex';
	import ChartLine from '../components/ChartLine.vue';
	import ChartPie from '../components/ChartPie.vue';
	// interface Props {}
	// const props = defineProps<Props>();

	const store = useStore();

onBeforeMount(()=> {
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
				data: [
					sentiment.value.positives,
					sentiment.value.negatives,
					sentiment.value.neutrals,
				],
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
  
  const chartOptionsLine = {
		responsive: false,
		maintainAspectRatio: false,
		plugins: {
			title: {
				display: true,
				text: 'Stock Market Close & Predicted Close',
			},
		},
		scales: {
			x: {
				title: {
					display: true,
					text: 'Time',
				},
			},
			y: {
				title: {
					display: true,
					text: 'Value($)',
				},
			},
		},
	};

	const chartOptionsSentiment = {
		responsive: false,
		maintainAspectRatio: false,
		scales: {
			display: false,
		},
		options: {
			responsive: true,
		},
		plugins: {
			legend: {
				display: true,
				position: 'top',
			},
			title: {
				display: true,
				text: 'Sentiment Analysis',
			},
		},
	};

	const height = 400;
	const width = 400;
</script>
<template>
	<div
		class="bg-primary-400 h-full py-5 overflow-hidden flex flex-col place-content-around items-center"
	>
		<div class="bg-secondary-100 p-5 rounded-lg">
			<ChartLine
				:chart-data="chartDataLine"
				:chart-options="chartOptionsLine"
				:height="height"
				:width="width"
			/>
		</div>
		<div v-if="!user.rank == 0" class="bg-secondary-100 p-5 rounded-lg">
			<ChartPie
				:chart-data="chartDataSentiment"
				:chart-options="chartOptionsSentiment"
				:height="height"
				:width="width"
			/>
		</div>
	</div>
</template>
<style lang="css"></style>
