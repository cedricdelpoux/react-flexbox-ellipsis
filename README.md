# react-flexbox-ellipsis

[![npm package][npm-badge]][npm] [![Travis][build-badge]][build]
![Module formats][module-formats]

React component to make CSS Ellipsis work with Flexbox

## Getting started

[![react-flexbox-ellipsis](https://nodei.co/npm/react-flexbox-ellipsis.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-flexbox-ellipsis/)

You can download `react-flexbox-ellipsis` from the NPM registry via the
`npm` or `yarn` commands

```shell
yarn add react-flexbox-ellipsis
npm install react-flexbox-ellipsis --save
```

If you don't use package manager and you want to include
`react-flexbox-ellipsis` directly in your html, you could get it from the
UNPKG CDN

```html
https://unpkg.com/react-flexbox-ellipsis/umd/react-flexbox-ellipsis.js
```

## Usage

```js
import React, {Component} from "react"
import Ellipsis from "react-flexbox-ellipsis"

const MY_API_KEY = "AIzaSyDwsdjfskhdbfjsdjbfksiTgnoriOAoUOgsUqOs10J0" // fake

const MyComponent = ({children}) => <Ellipsis>{children}</Ellipsis>
```

## Contributing

-   ⇄ Pull/Merge requests and ★ Stars are always welcome.
-   For bugs and feature requests, please [create an issue][github-issue].
-   Pull requests must be accompanied by passing automated tests (`npm test`).

See [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)

## License

This project is licensed under the MIT License - see the
[LICENCE.md](./LICENCE.md) file for details

[npm-badge]: https://img.shields.io/npm/v/react-flexbox-ellipsis.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-flexbox-ellipsis
[build-badge]: https://img.shields.io/travis/xuopled/react-flexbox-ellipsis/master.svg?style=flat-square
[build]: https://travis-ci.org/xuopled/react-flexbox-ellipsis
[module-formats]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg?style=flat-square
[github-page]: https://xuopled.github.io/react-flexbox-ellipsis
[github-issue]: https://github.com/xuopled/react-flexbox-ellipsis/issues/new
