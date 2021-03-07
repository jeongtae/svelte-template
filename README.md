# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It is based on https://github.com/sveltejs/template.

## Differences between sveltejs/template

- TypeScript as default language
- [Jest](https://jestjs.io/) is ready
- [SCSS(Sass)](https://sass-lang.com/) is ready
- [Storybook](https://storybook.js.org/) is ready
- JSON is can be imported in the script
- Static files in the public directory will be minified and copied (with [Gulp](https://gulpjs.com/))
- [Babel](https://babeljs.io/) is ready to support IE 11
- [Prettier](https://prettier.io/) is ready for Svelte

## Get started

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit jeongtae/svelte-template svelte-app
cd svelte-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start Rollup and Gulp:

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.
