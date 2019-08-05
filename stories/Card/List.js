import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const List = ({ className }) => (
<div className={cx(className, styles.list)}>
    <h2>Story List in ./stories/Card/List.js</h2>
</div>
)

List.propTypes = {
className: PropTypes.string,
}

export default List
