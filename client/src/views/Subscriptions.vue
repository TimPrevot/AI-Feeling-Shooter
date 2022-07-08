<script setup lang="ts">
	import Card from '../components/Card.vue';
	// interface Props {}
	// const props = defineProps<Props>();
	const subscriptions = [
		{
			id: 0,
			tierName: 'Beginner',
			tierDescription: 'A good start on the journey of boursicotage',
			pricePerYear: 0,
			features: ['1 User', 'Classical prediction', 'Lifetime access'],
		},
		{
			id: 1,
			tierName: 'Medium',
			tierDescription: 'A good investment for the medium boursicoteur',
			pricePerYear: 39,
			features: ['1 User', 'All charts', 'Daily check'],
		},
		{
			id: 2,
			tierName: 'Professional',
			tierDescription: 'The perfect offer for a boursicotage master',
			pricePerYear: 99,
			features: ['1 User', 'All charts', 'Check every 2 hours'],
		},
	];
</script>
<template>
	<div
		class="w-full h-full bg-primary-400 text-primary-100 flex place-content-around items-center"
	>
		<Card
			v-for="subscription in subscriptions"
			:subscription="subscription"
		/>
	</div>
</template>
<style lang="css"></style>
