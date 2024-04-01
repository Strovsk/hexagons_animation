import { HexagonCell } from "./HexagonCell.js";
import "../public/assets/css/styles.css";

/**
 * @module
 * @namespace Hexagon.Field
 */
export class HexagonField {
  /**
   *
   * @constructor
   * @param {string} containerId - The container id whitout #
   * @param {number} nMax - The number of hexagons to be created
   * @param {number} depth - The depth of the recursion
   */
  constructor(containerId = "hexagon_container", nMax = 40, depth = 5) {
    this.containerId = containerId;
    this.container = document.getElementById(this.containerId);
    this.allElementsList = [];
    this.nMax = nMax;
    this.depth = depth;

    this.patternDefault = {
      "-1": (size, element, stopP) => {
        const defaultConf = (identifier, position, stopPoint) => {
          return { size, position, identifier, stopPoint };
        };
        this.createFrom(defaultConf(0, element.getEdgePosition0(), stopP - 1));
        this.createFrom(defaultConf(1, element.getEdgePosition1(), stopP - 1));
        this.createFrom(defaultConf(2, element.getEdgePosition2(), stopP - 1));
        this.createFrom(defaultConf(3, element.getEdgePosition3(), stopP - 1));
        this.createFrom(defaultConf(4, element.getEdgePosition4(), stopP - 1));
        this.createFrom(defaultConf(5, element.getEdgePosition5(), stopP - 1));
      },
      0: (size, element, stopP) => {
        const defaultConf = (identifier, position, stopPoint) => {
          return { size, position, identifier, stopPoint };
        };
        this.createFrom(defaultConf(0, element.getEdgePosition0(), stopP - 1));
      },
      1: (size, element, stopP) => {
        const defaultConf = (identifier, position, stopPoint) => {
          return { size, position, identifier, stopPoint };
        };
        this.createFrom(defaultConf(0, element.getEdgePosition0(), stopP - 1));
        this.createFrom(defaultConf(1, element.getEdgePosition1(), stopP - 1));
        this.createFrom(defaultConf(2, element.getEdgePosition2(), stopP - 1));
      },
      2: (size, element, stopP) => {
        const defaultConf = (identifier, position, stopPoint) => {
          return { size, position, identifier, stopPoint };
        };
        this.createFrom(defaultConf(2, element.getEdgePosition2(), stopP - 1));
        this.createFrom(defaultConf(3, element.getEdgePosition3(), stopP - 1));
      },
      3: (size, element, stopP) => {
        const defaultConf = (identifier, position, stopPoint) => {
          return { size, position, identifier, stopPoint };
        };
        this.createFrom(defaultConf(3, element.getEdgePosition3(), stopP - 1));
      },
      4: (size, element, stopP) => {
        const defaultConf = (identifier, position, stopPoint) => {
          return { size, position, identifier, stopPoint };
        };
        this.createFrom(defaultConf(3, element.getEdgePosition3(), stopP - 1));
        this.createFrom(defaultConf(4, element.getEdgePosition4(), stopP - 1));
        this.createFrom(defaultConf(5, element.getEdgePosition5(), stopP - 1));
      },
      5: (size, element, stopP) => {
        const defaultConf = (identifier, position, stopPoint) => {
          return { size, position, identifier, stopPoint };
        };
        this.createFrom(defaultConf(5, element.getEdgePosition5(), stopP - 1));
        this.createFrom(defaultConf(0, element.getEdgePosition0(), stopP - 1));
      },
    };
    this.pattern2 = {
      "-1": (size, element, stopP) => {
        if (this.getAvailable())
          this.createFrom2(size, element.getEdgePosition0(), 0, stopP - 1);
        if (this.getAvailable())
          this.createFrom2(size, element.getEdgePosition1(), 1, stopP - 1);
        if (this.getAvailable())
          this.createFrom2(size, element.getEdgePosition2(), 2, stopP - 1);
        if (this.getAvailable())
          this.createFrom2(size, element.getEdgePosition3(), 3, stopP - 1);
        if (this.getAvailable())
          this.createFrom2(size, element.getEdgePosition4(), 4, stopP - 1);
        if (this.getAvailable())
          this.createFrom2(size, element.getEdgePosition5(), 5, stopP - 1);
      },
      0: (size, element, stopP) => {
        if (this.getAvailable())
          this.createFrom2(size, element.getEdgePosition0(), 0, stopP - 1);
      },
      3: (size, element, stopP) => {
        this.createFrom2(size, element.getEdgePosition3(), 3, stopP - 1);
      },
      4: (size, element, stopP) => {
        this.createFrom2(size, element.getEdgePosition3(), 3, stopP - 1);
        if (this.getAvailable())
          this.createFrom2(size, element.getEdgePosition4(), 4, stopP - 1);
        this.createFrom2(size, element.getEdgePosition5(), 5, stopP - 1);
      },
      2: (size, element, stopP) => {
        this.createFrom2(size, element.getEdgePosition1(), 1, stopP - 1);
        if (this.getAvailable())
          this.createFrom2(size, element.getEdgePosition2(), 2, stopP - 1);
        this.createFrom2(size, element.getEdgePosition3(), 3, stopP - 1);
      },
      5: (size, element, stopP) => {
        if (this.getAvailable())
          this.createFrom2(size, element.getEdgePosition0(), 0, stopP - 1);
        this.createFrom2(size, element.getEdgePosition5(), 5, stopP - 1);
      },
      1: (size, element, stopP) => {
        this.createFrom2(size, element.getEdgePosition0(), 0, stopP - 1);
        this.createFrom2(size, element.getEdgePosition1(), 1, stopP - 1);
      },
    };
    this.pattern3 = {
      "-1": (size, element, stopP) => {
        this.createFrom3(size, element.getEdgePosition0(), 0, stopP - 1);
        this.createFrom3(size, element.getEdgePosition3(), 3, stopP - 1);
        this.createFrom3(size, element.getEdgePosition5(), 5, stopP - 1);
        this.createFrom3(size, element.getEdgePosition4(), 4, stopP - 1);
      },
      0: (size, element, stopP) => {
        this.createFrom3(size, element.getEdgePosition0(), 0, stopP - 1);
      },
      3: (size, element, stopP) => {
        this.createFrom3(size, element.getEdgePosition3(), 3, stopP - 1);
      },
      4: (size, element, stopP) => {
        this.createFrom3(size, element.getEdgePosition4(), 4, stopP - 1);
        this.createFrom3(size, element.getEdgePosition3(), 3, stopP - 1);
      },
      5: (size, element, stopP) => {
        this.createFrom3(size, element.getEdgePosition0(), 0, stopP - 1);
        this.createFrom3(size, element.getEdgePosition5(), 5, stopP - 1);
      },
    };
  }

  /**
   * Create the hexagons animation using the default pattern
   * @example
   *  const hf = new Hexagon('hexagon-container');
   *  hf.createFrom({ stopPoint: 4 });
   * @param {{ w: number, h: number }} size - Width of the hexagon
   * @param {{ x: number, y: number }} position - Position of the hexagon
   * @param {number} identifier - Identifier of the hexagon
   * @param {number} stopPoint - Stop point of the recursion
   * @returns {void}
   */
  createFrom(options) {
    options = {
      size: { w: 100, h: 90 },
      position: {
        x: window.innerWidth / 2 - 100 / 2,
        y: window.innerHeight / 2 - 90 / 2,
      },
      identifier: -1,
      stopPoint: 3,
      ...options,
    };
    const { size, position, identifier, stopPoint } = options;
    if (stopPoint <= 0) return;

    const hexagonCellElm = new HexagonCell(size, position);
    this.container.appendChild(hexagonCellElm.getElement());

    this.patternDefault[identifier](size, hexagonCellElm, stopPoint);
  }

  /**
   *
   * @param {number} size.w - Width of the hexagon
   * @param {number} size.h - Height of the hexagon
   * @param {number} position.x - Position of the hexagon in the x axis
   * @param {number} position.y - Position of the hexagon in the y axis
   * @param {number} identifier - Identifier of the hexagon
   * @param {number} stopPoint - Stop point of the recursion
   * @returns {void}
   */
  createFrom2(
    size = { w: 100, h: 90 },
    position = { x: 250, y: 250 },
    identifier = -1,
    stopPoint = 2
  ) {
    if (stopPoint <= 0) return;

    let generic = new HexagonCell(size, position);
    this.container.appendChild(generic.getElement());

    this.pattern2[identifier](size, generic, stopPoint);
  }

  /**
   *
   * @param {number} size.w - Width of the hexagon
   * @param {number} size.h - Height of the hexagon
   * @param {number} position.x - Position of the hexagon in the x axis
   * @param {number} position.y - Position of the hexagon in the y axis
   * @param {number} identifier - Identifier of the hexagon
   * @param {number} stopPoint - Stop point of the recursion
   * @returns {void}
   */
  createFrom3(
    size = { w: 80, h: 70 },
    position = {
      x: this.container.getBoundingClientRect().width - size.w,
      y: this.container.getBoundingClientRect().height / 2,
    },
    identifier = -1,
    stopPoint = 10
  ) {
    if (stopPoint <= 0) return;
    if (
      position.y + this.container.getBoundingClientRect().top >=
        this.container.getBoundingClientRect().top - size.h / 2 &&
      position.y + this.container.getBoundingClientRect().top <=
        this.container.getBoundingClientRect().top -
          size.h / 2 +
          this.container.getBoundingClientRect().height &&
      position.x + this.container.getBoundingClientRect().left >=
        this.container.getBoundingClientRect().left &&
      position.x + this.container.getBoundingClientRect().left <=
        this.container.getBoundingClientRect().left -
          size.w / 2 +
          this.container.getBoundingClientRect().width
    ) {
      let generic = new HexagonCell(size, position);
      this.container.appendChild(generic.getElement());
      this.pattern3[identifier](size, generic, stopPoint);
    } else {
      return;
    }
    if (identifier == -2) return;
  }

  getAvailable() {
    return Math.round(Math.random());
  }

  createOne() {
    const size = { w: 100, h: 90 };
    const position = { x: 250, y: 250 };
    const hexagonCellBaseElm = new HexagonCell(size, position, "blue");

    const childPosition = hexagonCellBaseElm.getEdgePosition5();
    const hexagonCellChildElm = new HexagonCell(size, childPosition, "red");

    this.container.appendChild(hexagonCellBaseElm.getElement());
    this.container.appendChild(hexagonCellChildElm.getElement());
  }
}
