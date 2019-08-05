import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Card from '../../src/components/Card'
import { TextBody } from '../../src/components/Card/Body'

const TextCardStory = ({ className }) => (
  <section className={cx(className, styles.text)}>
    <Card title="Card" Body={TextBody}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus
        justo, pharetra et ex et, eleifend sodales. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam risus justo, pharetra et ex et,
        eleifend sodales
      </p>
      <p>
        Vivamus blandit faucibus dui sit amet tincidunt. Nullam scelerisque
        pretium augue, in blandit diam varius vitae. Vivamus blandit faucibus
        dui sit amet tincidunt. Nullam scelerisque pretium augue, in blandit
        diam varius vitae.
      </p>
      <p>
        Vivamus blandit faucibus dui sit amet tincidunt. Nullam scelerisque
        pretium augue, in blandit diam varius vitae. Vivamus blandit faucibus
        dui sit amet tincidunt. Nullam scelerisque pretium augue, in blandit
        diam varius vitae.
      </p>
      <p>
        Vivamus blandit faucibus dui sit amet tincidunt. Nullam scelerisque
        pretium augue, in blandit diam varius vitae. Vivamus blandit faucibus
        dui sit amet tincidunt. Nullam scelerisque pretium augue, in blandit
        diam varius vitae.
      </p>
      <p>
        Vivamus blandit faucibus dui sit amet tincidunt. Nullam scelerisque
        pretium augue, in blandit diam varius vitae. Vivamus blandit faucibus
        dui sit amet tincidunt. Nullam scelerisque pretium augue, in blandit
        diam varius vitae.
      </p>
      <p>
        Vivamus blandit faucibus dui sit amet tincidunt. Nullam scelerisque
        pretium augue, in blandit diam varius vitae. Vivamus blandit faucibus
        dui sit amet tincidunt. Nullam scelerisque pretium augue, in blandit
        diam varius vitae.
      </p>

    </Card>
  </section>
)

TextCardStory.propTypes = {
  className: PropTypes.string,
}

export default TextCardStory
