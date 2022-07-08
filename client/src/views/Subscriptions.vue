<script setup lang="ts">
	import Card from '../components/Card.vue';
	// interface Props {}
	// const props = defineProps<Props>();
	const subscriptions = [
		{
			tierName: 'Personal',
			tierDescription:
				'Perfect for using in a personal website or a client project.',
			pricePerYear: 59,
			features: ['1 User', 'All UI components', 'Lifetime access'],
		},
		{
			tierName: 'Business',
			tierDescription:
				'Perfect for using in a business website or a client project.',
			pricePerYear: 99,
			features: ['5 Users', 'All UI components', 'Lifetime access'],
		},
		{
			tierName: 'Enterprise',
			tierDescription:
				'Perfect for using in a enterprise website or a client project.',
			pricePerYear: 199,
			features: ['10 Users', 'All UI components', 'Lifetime access'],
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
