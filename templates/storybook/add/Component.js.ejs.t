---
to: <%= componentPath %>
---
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from '<%= cssFile %>'

const <%= componentName %> = ({ className }) => (
<div className={cx(className, styles.<%= cssSelector %>)}>
    <h2>Story <%= componentName %> in <%= componentPath %></h2>
</div>
)

<%= componentName %>.propTypes = {
className: PropTypes.string,
}

export default <%= componentName %>
