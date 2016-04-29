# PostCSS Vmin [![Build Status](https://travis-ci.org/iamvdo/postcss-vmin.svg)](https://travis-ci.org/iamvdo/postcss-vmin)

A simple [PostCSS] plugin to convert `vmin` to `vm` for IE9.

[PostCSS]: https://github.com/postcss/postcss

```css
/* Input example */
.foo {
  width: 50vmin;
}
```

```css
/* Output example */
.foo {
  width: 50vm;
  width: 50vmin;
}
```

## Usage

```js
postcss([ require('postcss-vmin') ])
```

See [PostCSS] docs for examples for your environment.
