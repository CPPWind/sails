import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Card, { ListBody } from '../../src/components/Card'

const ListCardStory = ({ className }) => (
  <section className={cx(className, styles.list)}>
    <Card Body={ListBody} className={cx(className, styles.list)}>
      <li>Red</li>
      <li>Orange</li>
      <li>Yellow</li>
      <li>Green</li>
      <li>Blue</li>
      <li>Indigo</li>
      <li>Violet</li>
    </Card>
  </section>
)

ListCardStory.propTypes = {
  className: PropTypes.string,
}

export default ListCardStory
