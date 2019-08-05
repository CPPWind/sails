import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Card from '../../src/components/Card'

const CardStory = ({ className, theme }) => (
  <div className={cx(className, styles.card)}>
    <Card title="Card" theme={theme}>
      A Card is an screen element with a header, optional footer, body and
      styled to look like a single entity.
    </Card>
  </div>
)

CardStory.propTypes = {
  className: PropTypes.string,
}

export default CardStory
