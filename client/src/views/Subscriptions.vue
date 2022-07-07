<script setup lang="ts">
	import Card from '../components/Card.vue';
	// interface Props {}
	// const props = defineProps<Props>();
	const subscriptions = [
		{
			tierName: 'Beginner',
			tierDescription:
				'Discover boursicotage',
			pricePerYear: 0,
			features: ['1 User', 'Classical prediction', 'Lifetime access'],
		},
		{
			tierName: 'Medium',
			tierDescription:
				'A good investment for the medium boursicoteur',
			pricePerYear: 49,
			features: ['1 User', 'All UI components', 'Daily check'],
		},
		{
			tierName: 'Professional',
			tierDescription:
				'The perfect offer for a boursicotage master',
			pricePerYear: 99,
			features: ['1 User','All UI components', 'Check every 2 hours'],
		},
	];
</script>
<template>
	<div
		class="w-full h-full bg-primary-400 text-primary-100 flex place-content-around"
	>
		<Card
			v-for="subscription in subscriptions"
			:subscription="subscription"
		/>
	</div>
</template>
<style lang="css"></style>
