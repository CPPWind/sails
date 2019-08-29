import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import animations from './styles/animations.module.css'
import shapes from './styles/shapes.module.css'
import sizes from './styles/sizes.module.css'
import styles from './styles/styles.module.css'
import themes from './styles/themes.module.css'

import { wrapperShape } from '../../utils/prop-types'

// console.log('style keys for Button')
// [styles, themes, animations, sizes].forEach(obj => console.log(Object.keys(obj)))

export const buttonThemes = ['default', 'info', 'success', 'warning', 'danger']
export const buttonSizes = [
  'extraSmall',
  'small',
  'medium',
  'large',
  'extraLarge',
]
export const buttonAnimations = ['glow', 'grow']
export const buttonShapes = ['flat', 'gentle', 'pill']

export const Button = ({
  className,
  label,
  children,
  theme,
  Btn,
  size,
  doClick,
  style,
  animation,
  shape,
  disabled,
}) => (
  <Btn
    className={cx(
      className,
      styles.button,
      animations[disabled || animation],
      sizes[size],
      themes[theme],
      shapes[shape],
      disabled && styles.disabled,
    )}
    onClick={doClick}
    style={style}
  >
    {children || label || 'PROGRAMMING FAIL!'}
  </Btn>
)

Button.propTypes = {
  animation: PropTypes.oneOf(buttonAnimations),
  Btn: wrapperShape,
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.oneOf(buttonThemes),
  size: PropTypes.oneOf(buttonSizes),
  doClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
  shape: PropTypes.oneOf(buttonShapes),
}

Button.defaultProps = {
  theme: 'default',
  Btn: 'button',
  doClick: () => false,
  size: 'medium',
  style: {},
  animation: 'grow',
  shape: 'gentle',
}
