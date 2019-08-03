import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

export const CardHeader = ({ title, className }) => (
  <header className={cx(className, styles.cardHeader)}>
    <h4>{title}</h4>
  </header>
)

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}
