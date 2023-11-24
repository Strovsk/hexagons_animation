![nodejs](https://img.shields.io/badge/NodeJs-1b1b1b?style=for-the-badge&logo=Node.js)
![webpack](https://img.shields.io/badge/Webpack-1b1b1b?style=for-the-badge&logo=webpack)
![html](https://img.shields.io/badge/jsdocs-1b1b1b?style=for-the-badge&logo=readme)
![javascript](https://img.shields.io/badge/javascript-1b1b1b?style=for-the-badge&logo=javascript)
![css](https://img.shields.io/badge/css-1b1b1b?style=for-the-badge&logo=css3)

# Hexagons Animation

<p align="center">
  <img src="https://raw.githubusercontent.com/Strovsk/hexagons_animation/main/public/hexagons.ico" />
</p>

This package provides a hexagon animation component for web applications.

## Usage

To use this package in your web application, follow these steps:

2. Load HexagonAnimation CSS and JS resources in your HTML file:

   2.1. Load the css:

   ```html
   <link
     rel="stylesheet"
     href="https://cdn.jsdelivr.net/gh/Strovsk/hexagons_animation@main/dist/hexagon.min.css"
   />
   ```

   2.2. Load the js:

   ```html
      <script src="https://cdn.jsdelivr.net/gh/Strovsk/hexagons_animation@main/dist/hexagon.min.js">
   ```

3. Add the `Hexagon` component to your HTML file:

   ```html
   <div id="hexagon-container"></div>

   <script>
     const container = document.getElementById("hexagon-container");
     const hf = new Hexagon("hexagon-container");

     hf.createFrom({ stopPoint: 4 });
   </script>
   ```

## Contributing

### Dev Server

```bash
npm run dev
```

### Build

```bash
npm run build
```
