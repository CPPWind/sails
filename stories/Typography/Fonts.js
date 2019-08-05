import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const Fonts = ({ className }) => (
<div className={cx(className, styles.fonts)}>
    <h2>Story Fonts in ./stories/Typography/Fonts.js</h2>
</div>
)

Fonts.propTypes = {
className: PropTypes.string,
}

export default Fonts
