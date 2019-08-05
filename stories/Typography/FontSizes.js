import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const FontSizes = ({ className }) => (
<div className={cx(className, styles.fontSizes)}>
    <h1>Font Sizes</h1>
    <p style={{fontSize: 'var(--font-size-headline)'}} >headline:<br />The quick...</p>
    <p style={{fontSize: 'var(--font-size-subheadline)'}} >subheadline:<br />The quick brown...</p>
    <p style={{fontSize: 'var(--font-size-7)'}} >Font Size 7:<br />The quick brown fox...</p>
    <p style={{fontSize: 'var(--font-size-6)'}} >Font Size 6:<br />The quick brown fox jumped over...</p>
    <p style={{fontSize: 'var(--font-size-5)'}} >Font Size 5:<br />The quick brown fox jumped over the lazy dog.</p>
    <p style={{fontSize: 'var(--font-size-4)'}} >Font Size 4:<br />The quick brown fox jumped over the lazy dog.</p>
    <p style={{fontSize: 'var(--font-size-3)'}} >Font Size 3:<br />The quick brown fox jumped over the lazy dog.</p>
    <p style={{fontSize: 'var(--font-size-2)'}} >Font Size 2:<br />The quick brown fox jumped over the lazy dog.</p>
    <p style={{fontSize: 'var(--font-size-1)'}} >Font Size 1:<br />The quick brown fox jumped over the lazy dog.</p>
</div>
)

FontSizes.propTypes = {
className: PropTypes.string,
}

export default FontSizes
