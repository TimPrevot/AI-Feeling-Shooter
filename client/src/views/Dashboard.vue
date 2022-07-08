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

  const predicted = computed(() => store.state.predicted);

  const dates = computed(() => store.state.dates);



	const chartDataLine = {
		labels: [dates.value[0],dates.value[1],dates.value[2],dates.value[3],dates.value[4],dates.value[5]],
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
				data: [
					sentiment.value.positives,
					sentiment.value.negatives,
					sentiment.value.neutrals,
				],
			},
		],
	};

  
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
		<div class="bg-secondary-100 p-5 rounded-lg">
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
