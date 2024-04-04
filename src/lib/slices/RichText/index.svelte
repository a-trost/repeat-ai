<script>
	import Bounded from '$lib/components/Bounded.svelte';
	import { PrismicRichText } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
</script>

<Bounded>
	<div class="prose prose-lg prose-slate prose-invert w-full">
		<PrismicRichText field={slice.primary.content} />
	</div>
</Bounded>
