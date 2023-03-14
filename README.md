# StorybookNxShow

This repository contains the following applications:

- A [Next.js application](apps/next-app) - `next-app`
- An [Angular application](apps/ng-app) - `ng-app`
- A [React + Vite application](apps/react-app-vite) - `react-app-vite`
- A [React + Webpack application](apps/react-app-wp) - `react-app-wp`
- A [Web Components + Vite application](apps/web-vite-app) - `web-vite-app`
- A [Web Components + Webpack application](apps/web-webpack-app) - `web-webpack-app`

And the following libraries:

- Next.js
  - [Next.js library called `next-ui-banner`](libs/next/ui/banner)
  - [Next.js library called `next-ui-button`](libs/next/ui/button)
- Angular
  - [Angular library called `ng-ui-banner`](libs/ng/ui/banner)
  - [Angular library called `ng-ui-button`](libs/ng/ui/button)
- React + Vite
  - [React + Vite library called `react-vite-ui-banner`](libs/react/vite/ui/banner)
  - [React + Vite library called `react-vite-ui-button`](libs/react/vite/ui/button)
- React + Rollup
  - [React + Rollup library called `react-rollup-ui-banner`](libs/react/rollup/ui/banner)
  - [React + Rollup library called `react-rollup-ui-button`](libs/react/rollup/ui/button)

The applications use the libraries, according to the framework they are built with.

## What this repo is about

### Generating Storybook configuration with Storybook v7

Checkout the branch `storybook7-setup`:

```
git checkout storybook7-setup
```

This branch contains the setup for Storybook v7. The commands that were ran are the following:

#### For React + Vite

```
npx nx g @nrwl/react:storybook-configuration --storybook7Configuration --storybook7UiFramework=@storybook/react-vite --project=react-app-vite --generateStories
```

```
npx nx g @nrwl/react:storybook-configuration --storybook7Configuration --storybook7UiFramework=@storybook/react-vite --project=react-vite-ui-button
--generateStories
```

etc for all the projects that use React + Vite.

#### For React + Webpack

```
npx nx g @nrwl/react:storybook-configuration --storybook7Configuration --storybook7UiFramework=@storybook/react-webpack5 --project=react-app-wp --generateStories
```

```
npx nx g @nrwl/react:storybook-configuration --storybook7Configuration --storybook7UiFramework=@storybook/react-webpack5 --project=react-rollup-ui-banner
--generateStories
```

etc for all the projects that use React + Vite.

#### For Next

```
npx nx g @nrwl/react:storybook-configuration --storybook7Configuration --storybook7UiFramework=@storybook/nextjs --project=next-app --generateStories
```

```
npx nx g @nrwl/react:storybook-configuration --storybook7Configuration --storybook7UiFramework=@storybook/nextjs --project=next-ui-banner
--generateStories
```

etc for all the projects that use React + Vite.

#### For Angular

```
npx nx g @nrwl/angular:storybook-configuration --storybook7Configuration --storybook7UiFramework=@storybook/angular --project=ng-app --generateStories
```

```
npx nx g @nrwl/angular:storybook-configuration --storybook7Configuration --storybook7UiFramework=@storybook/angular --project=ng-ui-banner
--generateStories
```

etc for all the projects that use React + Vite.

#### For Web Components

```
npx nx g @nrwl/storybook:configuration --storybook7Configuration --storybook7UiFramework=@storybook/web-components-vite --project=web-vite-app
```

```
npx nx g @nrwl/storybook:configuration --storybook7Configuration --storybook7UiFramework=@storybook/web-components-webpack5 --project=web-webpack-app
```

etc for all the projects that use React + Vite.

### Migrate Storybook configuration from version 6 to version 7

Checkout the branch `storybook6-setup`:

```
git checkout storybook6-setup
```

and see what the repository looks like when using Storybook v6.

Checkout the branch `storybook6-setup-migrate-7` (`git checkout storybook6-setup-migrate-7`) and see what the repository looks like after we run the following command:

```
npx nx g @nrwl/storybook:migrate-7
```
