import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const HElements = ({ className, title }) => (
<div className={cx(className, styles.hElements)}>
    <h4>Headline</h4>
    <h1 className="headline">{title}</h1>

    <h4>Subheadline</h4>
    <h1 className="subheadline">{title}</h1>
    <h1>h1 - {title}</h1>
    <h2>h2 - {title}</h2>
    <h3>h3 - {title}</h3>
    <h4>h4 - {title}</h4>
    <h5>h5 - {title}</h5>
    <h6>h6 - {title}</h6>
</div>
)

HElements.propTypes = {
className: PropTypes.string,
}

export default HElements
