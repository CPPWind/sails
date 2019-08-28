import cx from 'classnames'
import PropTypes from 'prop-types'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import React from 'react'
import styles from './styles.module.css'
import Button, { buttonThemes, buttonSizes } from '../../src/components/Button'

const ButtonStory = ({ className }) => {
  const label = text('Button Label')
  return (
    <div className={cx(className, styles.buttonStory)}>
      <ul>
        {buttonSizes.map((size, idx) => (
          <React.Fragment key={`buttonStory-button-sizes-${size}`}>
            {buttonThemes.map(theme => (
              <li
                key={`buttonStory-button-sizes-${size}-${theme}`}
                className={styles.buttonRow}
              >
                <Button
                  label={label || theme}
                  theme={theme}
                  size={size}
                  doClick={action(`${theme}-button-click`)}
                />
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}

ButtonStory.propTypes = {
  className: PropTypes.string,
}

export default ButtonStory
