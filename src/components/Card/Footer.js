import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

export const CardFooter = ({ title, className }) => (
  <footer className={cx(className, styles.cardFooter)}>
    <h4>{title}</h4>
  </footer>
)

CardFooter.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}
