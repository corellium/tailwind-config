# Tailwind Config Corellium

## Installation

Run the command below to install our Tailwind Config:

```sh
yarn add -D @corellium/tailwind-config
```

Make sure that in target project you have [latest version of tailwind](https://github.com/tailwindlabs/tailwindcss/releases) installed.


```sh
yarn add -D tailwindcss
```

## Usage

In your project root create `tailwind.config.js` file and add theme to the config.

```js
const config = require('@corellium/tailwind-config');

module.exports = {
  // By this `theme` filed assingment you will have corellium theme enabled by default
  // https://tailwindcss.com/docs/theme#overriding-the-default-theme
  theme: config.theme,
  // Rest of your configuration
  content: [
    // https://tailwindcss.com/docs/content-configuration
  ],
};
```
