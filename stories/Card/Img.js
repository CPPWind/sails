import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const Img = ({ className }) => (
<div className={cx(className, styles.img)}>
    <h2>Story Img in ./stories/Card/Img.js</h2>
</div>
)

Img.propTypes = {
className: PropTypes.string,
}

export default Img
