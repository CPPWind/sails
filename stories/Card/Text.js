import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const Text = ({ className }) => (
<div className={cx(className, styles.text)}>
    <h2>Story Text in ./stories/Card/Text.js</h2>
</div>
)

Text.propTypes = {
className: PropTypes.string,
}

export default Text
