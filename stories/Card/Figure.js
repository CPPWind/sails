import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const Figure = ({ className }) => (
<div className={cx(className, styles.figure)}>
    <h2>Story Figure in ./stories/Card/Figure.js</h2>
</div>
)

Figure.propTypes = {
className: PropTypes.string,
}

export default Figure
