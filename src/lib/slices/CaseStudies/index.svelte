<script>
	import Bounded from '$lib/components/Bounded.svelte';
	import { PrismicImage, PrismicLink, PrismicRichText, PrismicText } from '@prismicio/svelte';
	import clsx from 'clsx';
	import { compile } from 'svelte/compiler';

	/** @type {import("@prismicio/client").Content.CaseStudiesSlice} */
	export let slice;
	/** @type {import("@prismicio/client").Content.CaseStudyDocument[]} */
	export let caseStudies = [];
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<h2 class="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
		<PrismicText field={slice.primary.heading} />
	</h2>
	<div class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300">
		<PrismicRichText field={slice.primary.body} />
	</div>

	<div class="mt-20 grid gap-16">
		{#each caseStudies as caseStudy, index}
			<div
				class="group relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
			>
				<div class="col-span-1 flex flex-col justify-center gap-4">
					<h3 class="text-4xl">
						<PrismicText field={caseStudy.data.company} />
					</h3>
					<div class="max-w-md">
						<PrismicRichText field={caseStudy.data.description} />
					</div>

					<PrismicLink
						document={caseStudy}
						class="z-10 after:absolute after:inset-0 hover:underline"
					>
						Read <PrismicText field={caseStudy.data.company} /> case study
					</PrismicLink>
				</div>

				<div class={clsx('relative lg:col-span-2', index % 2 && 'md:-order-1')}>
					<div class="image-glow -bottom-8 -left-4 bg-orange-500"></div>
					<div class="image-glow -right-4 -top-8 bg-violet-500"></div>
					<PrismicImage
						field={caseStudy.data.image}
						sizes="(max-width: 768px) 100vw, 50vw"
						class="z-20 scale-[.98] rounded-xl transition-transform duration-300 group-hover:scale-100"
					/>
				</div>
			</div>
		{/each}
	</div>
</Bounded>

<style>
	.image-glow {
		@apply absolute h-1/2 w-1/2 rounded-full opacity-0 mix-blend-screen blur-3xl transition-opacity duration-500 group-hover:opacity-30;
	}
</style>
