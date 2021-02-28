## How to use

- Navigate to the root of the project

# Install

```bash
yarn
```

# Run

```bash
yarn start
```

# Run production

```bash
yarn build
yarn start:prod
```

Then navigate to http://localhost:3000

## Purposes of some of the libraries used

> > Razzle - server side rendering // https://razzlejs.org/

- Razzle is really nice because it provides ssr without too much configuration, when using Next and Gatsby there has been quite a bit of

offline-plugin
razzle-plugin-serviceworker

- The Service Worker plugin is intended to cache the HTML shell and static assets and would allow for progressive web app features

> > SWR - data fetching https://swr.vercel.app/

- Awesome library which does a lot, it handles polling and errors really well by default

> > React virtual https://github.com/tannerlinsley/react-virtual#installation

- Preventing the app from rendering all the items in the DOM is important for performane,
