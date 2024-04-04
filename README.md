# Prismic + SvelteKit Minimal Starter

Want to quickly get started building your own project with [Prismic][prismic] and [SvelteKit][sveltekit]? This project includes basic configurations and nothing else. The project includes one Rich Text Slice, a homepage, and a dynamic page.

- **Demo**: [Open live demo][live-demo]
- **Learn more about Prismic and SvelteKit**: [Prismic SvelteKit Documentation][prismic-docs]

&nbsp;

![Starter screenshot](https://user-images.githubusercontent.com/31219208/228820114-98993841-0b14-40cf-9f39-1b81effe752f.png)

&nbsp;

## 🚀 Quick Start

To start a new project using this starter, run the following commands in your terminal:

```sh
npx @slicemachine/init@latest --starter sveltekit-starter-prismic-minimal
```

The commands will do the following:

1. Start a new SvelteKit project using this starter.
2. Ask you to log in to Prismic or [create an account][prismic-sign-up].
3. Create a new Prismic content repository with sample content.

When you're ready to start your project, run the following command:

```sh
npm run dev
```

## How to use your project

To edit the content of this project, go to [prismic.io/dashboard](https://prismic.io/dashboard), click on the repository for this website, and start editing.

### Create a page

To create a page, click on the green pencil icon, then select **Page**.

Pages are made of Slices. You can add and rearrange Slices to your pages.

Your new page will be accessible by its URL, but it won't appear on the website automatically. To let users discover it, add it to the navigation.

### Customize this website

This website is preconfigured with Prismic. It has three Prismic packages installed:

- `@prismicio/client` provides helpers for fetching content from Prismic
- `@prismicio/svelte` provides Svelte components for rendering content from Prismic

These packages are already integrated and employed in this app. Take a look at the code to see how they're used.

### Edit the code

There are two steps to rendering content from Prismic in your SvelteKit project:

1. Fetch content from the Prismic API using `@prismicio/client`.
2. Template the content using components from `@prismicio/svelte`.

Here are some of the files in your project that you can edit:

- `src/lib/prismicio.js` - This file includes configuration for `@prismicio/client` and exports useful API helpers.
- `src/routes/+layout.svelte` - This is your layout component.
- `src/routes/+page.svelte` - This is the app homepage. It queries and renders a page document with the UID (unique identifier) "home" from the Prismic API.
- `src/routes/[uid]/+page.svelte` - This is the page component, which queries and renders a page document from your Prismic repository based on the UID.
- `src/lib/slices/*/index.svelte` - Each Slice in your project has an `index.svelte` file that renders the Slice component. Edit this file to customize your Slices.

These are important files that you should leave as-is:

- `src/routes/slice-simulator/+page.svelte` - Do not edit or delete this file. This file simulates your Slice components in development.
- `src/lib/slices/` - This directory contains Slice components, which are generated programmatically by Slice Machine. To customize a Slice template, you can edit the Slice's index.js file. To add Slices, delete Slices, or edit Slice models, use Slice Machine (more info below).

Learn more about how to edit your components with [Fetch Data in SvelteKit](https://prismic.io/docs/technologies/fetch-data-sveltekit) and [Template Content in SvelteKit](https://prismic.io/docs/technologies/template-content-sveltekit).

### Deploy to the web

To put your project online, see [Deploy your SvelteKit App](https://prismic.io/docs/technologies/deploy-sveltekit).

### Edit content models with Slice Machine

This project includes an application called Slice Machine, which generates models for your Custom Types and Slices. Slice Machine stores the models locally in your codebase, so you can save and version them. It also syncs your models to Prismic. To learn how to use Slice Machine, read [Model Content in SvelteKit](https://prismic.io/docs/technologies/model-content-sveltekit).

If you change or add to your Custom Types, you'll need to update your route handling to match. To learn how to do that, read [Define Paths in SvelteKit](https://prismic.io/docs/technologies/define-paths-sveltekit).

## Documentation

For the official Prismic documentation, see [Prismic's guide for SvelteKit][prismic-docs] or the [technical references for the installed Prismic packages](https://prismic.io/docs/technologies/technical-references).

## License

```
Copyright 2013-2023 Prismic <contact@prismic.io> (https://prismic.io)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[prismic]: https://prismic.io/
[prismic-docs]: https://prismic.io/docs/technologies/sveltekit
[prismic-sign-up]: https://prismic.io/dashboard/signup
[sveltekit]: https://kit.svelte.dev/
[live-demo]: https://sveltekit-starter-prismic-minimal.vercel.app/
