/**
 * Hexagon position on Refered edge (pixels)
 * @typedef {Object} HexagonCellPosition
 * @property {number} x - Hexagon left position
 * @property {number} y - Hexagon top position
 */

/**
 * @module
 */
export class HexagonCell {
  /**
   * @constructor
   * @param {Object} size - Hexagon size
   * @param {number} size.w - Hexagon width
   * @param {number} size.h - Hexagon height
   * @param {Object} position - Hexagon position
   * @param {number} position.x - Hexagon position in x axis (from left)
   * @param {number} position.y - Hexagon position in y axis (from top)
   * @param {string} color - Hexagon color HEX, RGBA, HSLA, etc.
   */
  constructor(
    size = { w: 150, h: 135 },
    position = { x: 100, y: 100 },
    color = "#e0e0e0"
  ) {
    this.size = { width: size.w, height: size.h };
    this.position = { x: position.x, y: position.y };
    this.color = color;
    this.cell = this.gen();
    this.positionObject = {
      0: this.getEdgePosition0(),
      1: this.getEdgePosition1(),
      2: this.getEdgePosition2(),
      3: this.getEdgePosition4(),
      4: this.getEdgePosition4(),
      5: this.getEdgePosition5(),
    };
  }

  /**
   * Generate the hexagon cell
   */
  gen() {
    const animationDuration = parseInt(4 + Math.random() * 4);
    const animationDelay = parseInt(1 + Math.random() * 4);
    const generic = document.createElement("div");
    generic.style.setProperty("--cell-height", `${this.size.height}px`);
    generic.style.setProperty("--cell-width", `${this.size.width}px`);
    generic.style.setProperty("--animation-time", `${animationDuration}s`);
    generic.style.setProperty("--animation-delay", `${animationDelay}s`);
    generic.style.background = `${this.color}`;
    generic.classList.add("hexagon_cell");

    const generic_shadow_container = document.createElement("div");
    generic_shadow_container.classList.add("hexagon_cell_container_shadow");
    generic_shadow_container.style.setProperty(
      "animation-duration",
      `${animationDuration}s`
    );
    generic_shadow_container.style.setProperty(
      "animation-delay",
      `${animationDelay}s`
    );
    generic_shadow_container.style.left = `${this.position.x}px`;
    generic_shadow_container.style.top = `${this.position.y}px`;
    generic_shadow_container.appendChild(generic);

    generic_shadow_container.style.display = "grid";
    generic_shadow_container.style.placeContent = "center";

    return generic_shadow_container;
  }

  getElement() {
    return this.cell;
  }

  /*   The following functions return the position of the edges in clockwise order

        ___0___
      /        \
  5  /          \  1
    /            \
    \            /
  4  \          / 2
      \___3____/
 */

  /**
   *
   * @returns {HexagonCellPosition} Position of the first edge
   */
  getEdgePosition0() {
    return { x: this.position.x, y: this.position.y - this.size.height };
  }

  /**
   *
   * @returns {HexagonCellPosition} Position of the second edge
   */
  getEdgePosition1() {
    let vertex1 = parseInt(
      window
        .getComputedStyle(document.querySelector(":root"))
        .getPropertyValue("--polygon-cell-pair-1")
        .split(" ")[0]
        .slice(0, -1)
    );
    return {
      x: this.position.x + (this.size.width * vertex1) / 100 + 1,
      y: this.position.y - this.size.height / 2,
    };
  }

  /**
   * @returns {HexagonCellPosition} Position of the third edge
   */
  getEdgePosition2() {
    let vertex1 = parseInt(
      window
        .getComputedStyle(document.querySelector(":root"))
        .getPropertyValue("--polygon-cell-pair-3")
        .split(" ")[0]
        .slice(0, -1)
    );
    return {
      x: this.position.x + (this.size.width * vertex1) / 100 + 1,
      y: this.position.y + this.size.height / 2,
    };
  }

  /**
   * @returns {HexagonCellPosition} Position of the fourth edge
   */
  getEdgePosition3() {
    return { x: this.position.x, y: this.position.y + this.size.height };
  }

  /**
   * @returns {HexagonCellPosition} Position of the fifth edge
   */
  getEdgePosition4() {
    let vertex1 = parseInt(
      window
        .getComputedStyle(document.querySelector(":root"))
        .getPropertyValue("--polygon-cell-pair-3")
        .split(" ")[0]
        .slice(0, -1)
    );
    return {
      x: this.position.x - (this.size.width * vertex1) / 100 + 1,
      y: this.position.y + this.size.height / 2,
    };
  }

  /**
   * @returns {HexagonCellPosition} Position of the sixth edge
   */
  getEdgePosition5() {
    let vertex1 = parseInt(
      window
        .getComputedStyle(document.querySelector(":root"))
        .getPropertyValue("--polygon-cell-pair-1")
        .split(" ")[0]
        .slice(0, -1)
    );
    return {
      x: this.position.x - (this.size.width * vertex1) / 100 + 1,
      y: this.position.y - this.size.height / 2,
    };
  }
}
