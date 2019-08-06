import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import themes from './themes.module.css'
import { wrapperShape } from '../../utils/prop-types'
export * from './Bar'

const Button = ({ className, label, children, theme, Btn, size }) => (
  <Btn className={cx(className, styles.button, styles[size], themes[theme])}>
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
}
Button.defaultProps = {
  theme: 'default',
  Btn: 'button',
  size: 'medium',
}

export default Button
