import React from "react";
import cx from "classnames";
import styles from "./styles.module.css";
import paletteData from "../../src/styles/masterPaletteData";
import colorWheel from "./rgbwheel.png"

const Palette = ({ className, forGroup }) => {
  const swatches = Object.values(paletteData).filter(
    ({ group }) => group === forGroup
  );
  let cols = Math.max(Math.ceil(Math.sqrt(swatches.length)), 4);
  return (
    <article className={cx(className, styles.palette, styles[forGroup])}>
      <ul>
        {swatches.map(({ name, text }) => (
          <li
            key={`all-colors-${name}`}
            style={{ color: text }}
        >
            <div
            className={cx(`bg-${name}`)}
            >
                {name}
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Palette;
