# React DocGen Loader For Webpack

The only up-to-date package.

## Installation

```
npm i -D @advclb/react-docgen-loader
```

Inline usage:

```js
import doc from "!!@advclb/react-docgen-loader!./MyComponent.tsx";
```

Global usage:

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: "@advclb/react-docgen-loader",
      },
    ],
  },
};
```

## Copyright

Guo Yunhe

## License

GNU General Public License version 3
