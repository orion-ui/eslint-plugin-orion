# eslint-plugin-orion

⚙️ An ESLint plugin for better consistency across projects

This plugin add some global rules and also new rules for async function naming convention.

> It is based on the [eslint-plugin-async-protect](https://github.com/IPWright83/eslint-plugin-async-protect).

## Installation

```sh
npm i -D @orion.ui/eslint-plugin-orion
```

Then add it in your `eslint` config file :

```js
module.exports = {
  ...
  extends: [
    ...
    'plugin:@orion.ui/orion/recommended',
  ],
  ...
};
```