import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const demo =
  'The quick brown fox jumped over the lazy dog.  ABCDEFGHIJKLMNOPQRSTUVWXYZabcderfghijklmnopqrstuvwxyz1234567890'

const fonts = ['sans-serif', 'serif', 'code', 'open-sans', 'advent-pro']

const Fonts = ({ className, fontSize, fontWeight }) => {
  const styles = {
    fontSize: `var(--${fontSize})`,
    fontWeight: fontWeight,
  }
  return (
    <ul className={cx(className, styles.fonts)}>
      {fonts.map(font => (
        <li key={`fonts-${font}`} style={styles}>
          <header>
            <h3 style={{ fontFamily: `var(--${font})` }}>--{font}</h3>
          </header>
          <p style={{ fontFamily: `var(--${font})` }}>{demo}</p>
        </li>
      ))}
    </ul>
  )
}

Fonts.propTypes = {
  className: PropTypes.string,
}

export default Fonts
