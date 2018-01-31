## electro-next
[![Known Vulnerabilities](https://snyk.io/test/github/zanuka/zanuka-desktop/badge.svg?targetFile=package.json)](https://snyk.io/test/github/zanuka/zanuka-desktop?targetFile=package.json)

![](./img/desktop.jpg)

desktop app exploration :: electron + next.js + now

### intent
The primary goal for zanuka-desktop is to explore the Electron + Next.js stack combo. 

### role of Next.js
- build out the renderer for the Electron app
- routing and prefetching of pre-defined pages
- live-reloading all BrowserWindow instances > pointing to Next.js pages
- styling components and pages using styled-jsx
- transpiling, bundling and minifying
- code splitting

#### dependencies:
- [next](https://github.com/zeit/next.js)
- [react](https://github.com/facebook/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [electron](https://github.com/electron/electron)
  - installs prebuilt Electron binaries (dev)
- [electron-next](https://github.com/leo/electron-next):
  - handle the flow required for building the renderer code
  - file:// protocol will work with Next.js bundle (generated by next export)
  - static assets will be loaded in the renderer process
- [electron-builder](https://github.com/electron-userland/electron-builder)
  - package and build app for distribution
  - build version management
- [electron-is-dev](https://github.com/sindresorhus/electron-is-dev):
  - essential for debugging during development
  - checks to see if Electron is running in dev mode

### deployment
I'll be using [Now Desktop](https://zeit.co/download) and the [Now CLI](https://zeit.co/download#now-cli) to deploy.

