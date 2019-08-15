import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import themes from './themes.module.css'
import { wrapperShape } from '../../utils/prop-types'
export * from './Bar'

const Button = ({
  className,
  label,
  children,
  theme,
  Btn,
  size,
  doClick,
  style,
}) => (
  <Btn
    className={cx(className, styles.button, styles[size], themes[theme])}
    onClick={doClick}
    style={style}
  >
    {children || label}
  </Btn>
)

Button.propTypes = {
  Btn: wrapperShape,
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.number,
  theme: PropTypes.string,
  size: PropTypes.string,
  doClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
}
Button.defaultProps = {
  theme: 'default',
  Btn: 'button',
  doClick: () => false,
  size: 'medium',
  style: {},
}

export const buttonThemes = ['default', 'info', 'success', 'warning', 'danger']
export const buttonSizes = ['small', 'medium', 'large', 'extraLarge']
export default Button
