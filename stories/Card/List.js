import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Card, { ListBody } from '../../src/components/Card'
const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Indigo',
  'Violet',
].map(c => ({ name: c }))

const ListCardStory = ({ className }) => (
  <section className={cx(className, styles.list)}>
    <Card
      title="List Card"
      Body={ListBody}
      className={cx(className)}
      collection={colors}
    />
  </section>
)

ListCardStory.propTypes = {
  className: PropTypes.string,
}

export default ListCardStory
