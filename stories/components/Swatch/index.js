import cx from "classnames";
import PropTypes from "prop-types";
import React from "react";
import {useLoremIpsum} from '../../../src/hooks/useLoremIpsum'
import styles from './styles.module.css'

const Swatch = ({ className, color, bgColor, body, label, Wrapper }) => {
  const {loremSentences} = useLoremIpsum()
  const title = label || `${color} against ${bgColor}`;
  return (
    <Wrapper className={cx(className, styles.swatch, color, `bg-${bgColor}`)}>
      <h1>{title}</h1>
      <p>{body || loremSentences(6)}</p>
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
