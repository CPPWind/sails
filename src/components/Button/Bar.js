import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

export const Bar = ({ className, vertical, children }) => (
  <ul className={cx(className, styles.bar, vertical && styles.vertical)}>
    {children}
  </ul>
)

Bar.propTypes = {
  className: PropTypes.string,
  vertical: PropTypes.bool,
}
