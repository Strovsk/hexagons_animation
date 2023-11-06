# Hexagon Animation Package

This package provides a hexagon animation component for web applications.

## Usage

To use this package in your web application, follow these steps:

1. Install the package using `npm`:

   ```bash
   npm install hexagon-animation
   ```

2. Import the `HexagonAnimation` component in your JavaScript file:

   ```javascript
   import HexagonAnimation from "hexagon-animation";
   ```

3. Add the `HexagonAnimation` component to your HTML file:

   ```html
   <div id="hexagon-animation"></div>

   <script>
     const hexagonAnimation = new Hexagon();
     hexagonAnimation.mount(document.getElementById("hexagon-animation"));
   </script>
   ```

4. Customize the animation by passing props to the `HexagonAnimation` component:

   ```javascript
   const hexagonAnimation = new HexagonAnimation({
     size: 100,
     duration: 1000,
     color: "#ff0000",
   });
   ```

## Installation

To install this package, run the following command:
