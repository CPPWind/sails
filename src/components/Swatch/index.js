import cx from "classnames";
import PropTypes from "prop-types";
import React from "react";
import {useLoremIpsum} from '../../hooks/useLoremIpsum'
import styles from "./styles.module.css";
import '../../styles/__palette.css'
import '../../styles/_skins.css'

console.log('Swatch styles', styles)

const Swatch = ({ className, color, bgColor, body, label, Wrapper }) => {
  const {loremParagraphs} = useLoremIpsum()
  const title = label || `${color} against ${bgColor}`;
  return (
    <Wrapper className={cx(className, styles.swatch, color, `bg-${bgColor}`)}>
      <h1>{title}</h1>
      <p>{body || loremParagraphs(6)}</p>
    </Wrapper>
  );
};

Swatch.propTypes = {
  bgColor: PropTypes.string,
  body: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  Wrapper: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node
  ])
};

Swatch.defaultProps = {
  Wrapper: "li",
};

export default Swatch;
