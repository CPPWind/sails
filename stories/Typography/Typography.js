import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const Typography = ({ className }) => (
<div className={cx(className, styles.typography)}>
    <h2>Story Typography in ./stories/Typography/Typography.js</h2>
</div>
)

Typography.propTypes = {
className: PropTypes.string,
}

export default Typography
