[![npm version](https://img.shields.io/npm/v/@itrocks/file-drop?logo=npm)](https://www.npmjs.org/package/@itrocks/file-drop)
[![npm downloads](https://img.shields.io/npm/dm/@itrocks/file-drop)](https://www.npmjs.org/package/@itrocks/file-drop)
[![GitHub](https://img.shields.io/github/last-commit/itrocks-ts/file-drop?color=2dba4e&label=commit&logo=github)](https://github.com/itrocks-ts/file-drop)
[![issues](https://img.shields.io/github/issues/itrocks-ts/file-drop)](https://github.com/itrocks-ts/file-drop/issues)
[![discord](https://img.shields.io/discord/1314141024020467782?color=7289da&label=discord&logo=discord&logoColor=white)](https://25.re/ditr)

# file-drop

Drag-and-drop enhancement for native file inputs.

## Installation

```bash
npm install @itrocks/file-drop
```

## Usage

### Basic usage

```js
import { fileDrop } from '@itrocks/file-drop/file-drop.js'

const input = document.querySelector('input[type=file]')
fileDrop(input)
```

### HTML example with default styling

```html
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="/@itrocks/file-drop/file-drop.css">
</head>
<body>
	<input type="file" id="invoice">
	<script type="module">
		import { fileDrop } from '/@itrocks/file-drop/file-drop.js'
		fileDrop(document.getElementById('invoice'))
	</script>
</body>
</html>
```

### Multiple inputs

```js
document.querySelectorAll('input[type=file]').forEach(fileDrop)
```

### Dynamic DOM support (optional)

If file inputs are added dynamically, use the optional integration with
[@itrocks/build](https://github.com/itrocks-ts/build).

```js
import '@itrocks/file-drop/file-drop.css'
import '@itrocks/file-drop/build.js'
```

This automatically applies drag-and-drop behaviour to:
- dynamically inserted inputs
- inputs loaded via fetch / XHR
- inputs created via JavaScript

### Custom build integration

If you already use your own [@itrocks/build](https://github.com/itrocks-ts/build) setup, you can integrate manually.

Example applying only to inputs having a specific class:
```js
import { build }    from '@itrocks/build'
import { fileDrop } from '@itrocks/file-drop/file-drop.js'

build('input[type=file].drop-zone', element => fileDrop(element))
```

Example applying inside a specific container:
```js
build('#invoices input[type=file]', element => fileDrop(element))
```

## Behaviour

- Enables drag-and-drop on native file inputs
- Works with single and multiple file inputs
- Adds `drag-over` class during drag interaction
- Triggers native `change` event after drop
- Does not replace native file selection behaviour

## Styling

Default styling is provided in:

```
file-drop.css
```

You may:
- override the `.drag-over` class
- provide your own styles
- omit the default stylesheet

## Browser support

Requires modern browsers supporting:
- DataTransfer API
- File API
- ES modules

No legacy browser support is provided.
