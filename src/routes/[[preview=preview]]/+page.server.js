import { asText, mapSliceZone } from '@prismicio/client';

import { createClient } from '$lib/prismicio';
import { mappers } from '$lib/slices/mappers';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const page = await client.getByUID('page', 'home');
	const slices = await mapSliceZone(page.data.slices, mappers, { client });

	return {
		slices,
		title: asText(page.data.title),
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image.url
	};
}

export function entries() {
	return [{}];
}
