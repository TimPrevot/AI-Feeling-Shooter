<script setup lang="ts">
	interface Props {
		subscription: {
			tierName: string;
			tierDescription: string;
			pricePerYear: number;
			features: string[];
		};
	}
	const props = defineProps<Props>();
</script>
<template>
	<div
		class="max-h-[650px] max-w-[450px] flex flex-col place-content-around bg-secondary-100 w-1/3 mx-10 my-6 px-8 rounded-xl relative z-10 lg:py-4 2xl:py-10"
	>
		<span class="text-primary font-semibold text-lg block mb-4">
			{{ props.subscription.tierName }}
		</span>
		<h2
			v-if="props.subscription.tierName === 'Beginner'"
			class="font-bold text-dark mb-5 text-[42px]"
		>
			Free
		</h2>
		<h2 v-else class="font-bold text-dark mb-5 text-[42px]">
			${{ props.subscription.pricePerYear }}
			<span class="text-base font-medium"> / year </span>
		</h2>
		<p
			class="text-base text-body-color pb-4 mb-4 border-b border-primary-500"
		>
			{{ props.subscription.tierDescription }}
		</p>
		<div class="mb-7">
			<p
				v-for="feature in props.subscription.features"
				class="text-base leading-loose mb-1"
			>
				{{ feature }}
			</p>
		</div>
		<div v-if="!$store.state.user">
			<p
				v-if="props.subscription.tierName === 'Beginner'"
				class="w-full block text-base font-semibold border border-[#D4DEFF] rounded-md text-center p-4 hover:text-white hover:bg-primary hover:border-primary transition"
			>
				You only need an account
			</p>
			<p
				v-else
				class="w-full block text-base font-semibold border border-[#D4DEFF] rounded-md text-center p-4 hover:text-white hover:bg-primary hover:border-primary transition"
			>
				Please log in to choose {{ props.subscription.tierName }}
			</p>
		</div>
		<div v-else>
			<p
				v-if="props.subscription.tierName === 'Beginner'"
				class="w-full block text-base font-semibold border border-[#D4DEFF] rounded-md text-center p-4 hover:text-white hover:bg-primary hover:border-primary transition"
			>
				Already checkout
			</p>
			<p
				v-else-if="props.subscription.tierName === 'Medium'"
				class="w-full bg-primary-300 text-secondary-100 block text-base font-semibold border border-[#D4DEFF] rounded-md text-center p-4 hover:text-secondary-100 hover:bg-primary-500 hover:border-primary-500 transition ease-in duration-600"
			>
				Choose {{ props.subscription.tierName }}
			</p>
			<button
				v-else
				class="w-full font-semibold border border-2 border-primary-300 rounded-md text-center p-4 hover:text-secondary-100 hover:bg-primary-500 hover:border-primary-500 transition ease-in duration-600"
				@click="$store.dispatch('subscribe', 2)"
			>
				Choose {{ props.subscription.tierName }}
			</button>
		</div>
		<div>
			<span class="absolute right-0 top-7 z-[-1]">
				<img src="../assets/circle_shade.svg" alt="circle shade" />
			</span>
			<span class="absolute right-4 top-4 z-[-1]">
				<img src="../assets/dots.svg" alt="group of dots" />
			</span>
		</div>
	</div>
</template>
<style lang="css"></style>