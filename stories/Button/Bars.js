import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import {Bar, BarButton} from '../../src/components/Button'

const BarStory = ({ className }) => (
  <div className={cx(className, styles.bars)}>
      <section className="vertical">
        <Bar>
        </Bar>
      </section>
  </div>
)

BarStory.propTypes = {
  className: PropTypes.string,
}

export default BarStory
