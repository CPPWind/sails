import cx from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.css";
const lorem = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus justo, pharetra et ex et, eleifend sodales" +
    " libero. Suspendisse potenti. Integer non ipsum maximus, malesuada sem in, tristique orci. Praesent id arcu in dolor pellentesque rutrum. Mauris sit amet turpis a mauris vestibulum volutpat. Nunc vitae vehicula neque, non vestibulum enim. Vivamus congue dignissim lorem quis egestas. Morbi nulla magna, molestie vitae luctus et, vestibulum id tortor. Nunc nec mauris porttitor, accumsan libero ultricies, dictum erat. In sed est felis.",
  "Vivamus blandit faucibus dui sit amet tincidunt. Nullam scelerisque pretium augue, in blandit diam varius vitae." +
    " Nullam vulputate euismod dui, nec imperdiet velit. Aliquam eu nibh at augue tempus condimentum ut lobortis purus. Ut tincidunt mi sed commodo faucibus. Vivamus id est viverra, imperdiet metus et, molestie augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc sem felis, pulvinar a faucibus a, placerat et libero. Aliquam in nunc in tellus maximus auctor volutpat quis purus. Donec molestie tellus nibh, at lobortis lectus ornare eu. Vivamus venenatis pharetra finibus. Sed massa enim, posuere mollis laoreet ultrices, facilisis quis lorem. Nullam tempus felis sem. Donec gravida sapien ut tortor rhoncus sollicitudin.",
  "Donec eleifend enim eget nunc varius, id euismod ante suscipit. Aliquam faucibus cursus ornare. Sed maximus" +
    " sagittis sagittis. Integer eget neque at nibh fermentum molestie. Donec imperdiet ipsum vel ultricies tristique. Aenean blandit elementum accumsan. Donec non nisi ut metus fermentum cursus id sit amet ante. Nullam a sapien vestibulum, faucibus nisl at, fermentum turpis. Vivamus mattis feugiat luctus. Aliquam vel elit fermentum, blandit ante non, tempor augue. Cras condimentum id urna sit amet convallis. Nam ullamcorper neque eget felis maximus, vel egestas tellus fringilla.",
  "Suspendisse rhoncus fringilla urna, quis finibus augue iaculis at. Donec non ipsum vitae diam vestibulum interdum." +
    " Curabitur feugiat ac ligula sodales ornare. Praesent ac posuere sem, sed commodo nulla. Donec lorem ex, sagittis non sollicitudin nec, ultrices sit amet diam. Mauris ut dictum lorem, et pulvinar risus. Etiam eu ex quam."
];

const FontSpacing = ({ className, measure, lineHeight, letterSpacing }) => {
  const classes = cx(
    className,
    styles.fontSpacing,
    measure,
    lineHeight,
    letterSpacing
  );
  return (
    <div className={classes}>
      <h2>Font spacing</h2>
      <p>
        Measure is the width of a paragraph, letter spacing is spacing between
        letters, and line height is...
      </p>
      {lorem.map((paragraph, idx) => (
        <p key={`font-spacing-lorem-${idx}`}>{paragraph}</p>
      ))}
    </div>
  );
};

FontSpacing.propTypes = {
  className: PropTypes.string
};

export default FontSpacing;
