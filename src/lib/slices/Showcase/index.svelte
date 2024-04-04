<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	import Bounded from '$lib/components/Bounded.svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import { PrismicImage, PrismicRichText, PrismicText } from '@prismicio/svelte';
	import clsx from 'clsx';

	import IconGear from '~icons/ph/gear';
	import IconCycle from '~icons/ph/arrows-clockwise';

	import SpanHeading from './SpanHeading.svelte';

	/** @type {import("@prismicio/client").Content.ShowcaseSlice} */
	export let slice;

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches;

		if (prefersReducedMotion) return;

		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(
			'.showcase__heading',
			{
				y: 100
			},
			{
				y: 0,
				ease: 'power2.inOut',
				duration: 1,
				scrollTrigger: {
					trigger: '.showcase__heading',
					start: 'top bottom-=40%',
					toggleActions: 'play pause resume reverse'
				}
			}
		);

		gsap.fromTo(
			'.showcase__glow',
			{
				scale: 0.7,
				opacity: 0.1
			},
			{
				scale: 1,
				opacity: 0.35,
				ease: 'power2.inOut',
				duration: 1,
				scrollTrigger: {
					trigger: '.showcase__heading',
					start: 'top bottom-=40%',
					toggleActions: 'play pause resume reverse'
				}
			}
		);
	});

	const icons = {
		gear: IconGear,
		cycle: IconCycle
	};
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="relative">
	<div
		class="showcase__glow absolute -z-10 aspect-video w-full max-w-2xl rounded-full bg-violet-500 mix-blend-screen blur-[120px] filter"
	/>
	{#if slice.primary.heading}
		<h2 class="showcase__heading text-balance text-center text-5xl font-medium md:text-7xl">
			<PrismicRichText field={slice.primary.heading} components={{ heading2: SpanHeading }} />
		</h2>
	{/if}
	<div
		class="relative mt-16 grid items-center gap-8 rounded-xl border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12"
	>
		<div class="grid-background" />

		<div>
			{#if slice.primary.icon}
				<div class="w-fit rounded-lg bg-violet-800 p-4 text-3xl">
					<svelte:component this={icons[slice.primary.icon]} />
				</div>
			{/if}
			{#if slice.primary.subheading}
				<h3 class="mt-6 text-2xl font-normal">
					<PrismicText field={slice.primary.subheading} />
				</h3>
			{/if}
			{#if slice.primary.body}
				<div class="prose prose-invert mt-4 max-w-xl">
					<PrismicRichText field={slice.primary.body} />
				</div>
			{/if}
			{#if slice.primary.button_link}
				<ButtonLink field={slice.primary.button_link} class="mt-6"
					>{slice.primary.button_text || 'Learn more'}</ButtonLink
				>
			{/if}
		</div>

		<PrismicImage
			field={slice.primary.image}
			class={clsx(
				'opacity-90 shadow-2xl lg:col-span-2 lg:pt-0',
				slice.variation === 'reverse'
					? 'lg:order-1 lg:translate-x-[15%]'
					: 'lg:-order-1 lg:translate-x-[-15%]'
			)}
			sizes="(max-width: 768px) 100vw, 50vw"
		/>
	</div>
</Bounded>

<style>
	.grid-background {
		background-image: url('/assets/grid-pattern.png');
		position: absolute;
		inset: 0;
		background-repeat: repeat;
		z-index: -1;
		background-position: center;
		opacity: 0.15;
		mask-image: radial-gradient(circle at 60% 50%, black 10%, transparent 40%);
	}
</style>
