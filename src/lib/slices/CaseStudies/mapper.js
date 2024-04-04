import * as prismic from '@prismicio/client';
/**
 * @param {Object} args
 * @param {prismic.Content.CaseStudiesSlice} args.slice
 * @param {{ client: prismic.Client<prismic.Content.AllDocumentTypes>}} args.context
 */
export default async function mapper({ slice, context }) {
	const caseStudies = (
		await Promise.all(
			slice.items.map(async (item) => {
				if (prismic.isFilled.contentRelationship(item.case_study)) {
					return /** @type {prismic.Content.CaseStudyDocument} */ (
						await context.client.getByID(item.case_study.id)
					);
				}
			})
		)
	).filter(Boolean);

	return {
		slice,
		caseStudies
	};
}
