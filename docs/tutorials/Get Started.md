# Get Started

This tutorial will guide you to use the Hexagons from CDN.

## Step 1: Import the Hexagons from CDN

There are two steps to add the Hexagons to your project:

1. Load the HexagonAnimation CSS and JS resources in your HTML file.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/Strovsk/hexagons_animation@main/dist/hexagon.min.css"
/>
```

1. Load the js:

```html
<script src="https://cdn.jsdelivr.net/gh/Strovsk/hexagons_animation@main/dist/hexagon.min.js" />
```

## Step 2: Add the Hexagons to script

```html
<div id="hexagon-container"></div>

<script>
  const hf = new Hexagon("hexagon-container");

  hf.createFrom({ stopPoint: 4 });
</script>
```
