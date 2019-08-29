import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import themes from './themes.module.css'
import animations from './animations.module.css'
import sizes from './sizes.module.css'

console.log('style keys for Button')
[styles, themes, animations, sizes].forEach(obj => console.log(Object.keys(obj)))

import { wrapperShape } from '../../utils/prop-types'

export const buttonThemes = ['default', 'info', 'success', 'warning', 'danger']
export const buttonSizes = [
  'extraSmall',
  'small',
  'medium',
  'large',
  'extraLarge',
]
export const buttonAnimations = Object.keys(animations)
export * from './Bar'

const BasicButton = ({
  className,
  label,
  children,
  theme,
  Btn,
  size,
  doClick,
  style,
  animation,
}) => (
  <Btn
    className={cx(
      className,
      styles.button,
      animations[animation],
      sizes[size],
      themes[theme],
    )}
    onClick={doClick}
    style={style}
  >
    {children || label || 'PROGRAMMING FAIL!'}
  </Btn>
)

Button.propTypes = {
  animation: PropTypes.string,
  Btn: wrapperShape,
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.oneOf(buttonThemes),
  size: PropTypes.oneOf(buttonSizes),
  doClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
}

Button.defaultProps = {
  theme: 'default',
  Btn: 'button',
  doClick: () => false,
  size: 'medium',
  style: {},
  animation: 'grow',
}

export default BasicButton
