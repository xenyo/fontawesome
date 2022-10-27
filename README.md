# xenyo/fontawesome

A Drupal library providing an append-only subset of Font Awesome icons.

This package is meant to be shared between multiple, possibly unrelated sites. The "append-only" policy ensures that updates will not break backwards compatibility.

While this subset will still load more icons than needed for any individual site, it is still far more optimal than loading the entire Font Awesome library.

## Installation

```bash
composer require xenyo/fontawesome
```

The package will be installed to `web/libraries/fontawesome`.

## Usage

Add an asset library to your `*.libraries.yml` with paths to the CSS files you want to load. For example:

```yml
fontawesome:
  css:
    base:
      /libraries/fontawesome/css/fontawesome.min.css: {}
      /libraries/fontawesome/css/solid.min.css: {}
      /libraries/fontawesome/css/regular.min.css: {}
      /libraries/fontawesome/css/light.min.css: {}
      /libraries/fontawesome/css/thin.min.css: {}
      /libraries/fontawesome/css/sharp-solid.min.css: {}
```

Attach the library as usual where needed.

## Building

`fontawesome-subset.yml` contains the list of icons included in the subset. Add more icon names to the list as needed. Do not remove existing icons.

First, make sure you have configured npm with a Font Awesome Pro token. See https://fontawesome.com/docs/web/setup/packages

Install dependencies:

```bash
pnpm install
```

Build the subset:

```bash
pnpm build
```

This will create the subsetted webfont files in `webfonts` and copy the latest Font Awesome css files from `node_modules` to `css`.
