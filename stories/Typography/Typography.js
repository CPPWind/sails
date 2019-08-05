import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const Typography = ({ className }) => (
<div className={cx(className, styles.typography)}>
    <h2>Typography</h2>
    <p>Type faces, spacing, sizing and h elements</p>
</div>
)

Typography.propTypes = {
className: PropTypes.string,
}

export default Typography
