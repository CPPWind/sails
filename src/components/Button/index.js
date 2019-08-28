import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import themes from './themes.module.css'
import { wrapperShape } from '../../utils/prop-types'

export const buttonThemes = ['default', 'info', 'success', 'warning', 'danger']
export const buttonSizes = ['small', 'medium', 'large', 'extraLarge']
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
}) => {
  return (
    <Btn
      className={cx(
        className,
        styles.button,
        styles[size],
        themes[theme],
      )}
      onClick={doClick}
      style={style}
    >
      {children || label || 'PROGRAMMING FAIL!'}
    </Btn>
  )
}

Button.propTypes = {
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
}

export default Button
