import React from 'react'
import ButtonStory from './Button'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import BarStory from './Bars'
import { Button, buttonThemes, buttonSizes, buttonAnimations, buttonShapes } from '../../src/components/Button'
import { allIcons } from '../../src/components/Icon'
import TableComponent from '../TableComponent'
import styles from './styles.module.css'
import global from '../../src/styles/global.css'
const story = storiesOf('Button')

story.addDecorator(withKnobs)
story.add(
  'Default',
  () => {
    const label = text('Label', 'Button')
    const theme = select('Theme', buttonThemes, 'default')
    const size = select('Size', buttonSizes, 'medium')
    const shape = select('Shape', buttonShapes, 'flat')
    const animation = select('Animation', buttonAnimations, 'grow')
    const disabled = boolean('Disabled', false)
    // const icon = select('Icon', allIcons, 'none')

    const doClick = action('Button Click')
    return (
      <section className={styles.featured}>
        <Button
          label={label}
          theme={theme}
          size={size}
          doClick={doClick}
          shape={shape}
          animation={animation}
          disabled={disabled}
        />
      </section>
    )
  },
  {
    info: {
      TableComponent,
      header: false,
      inline: true,
    },
  },
)
story.add('Themes', () => <ButtonStory />)
story.add('Bars', () => <BarStory />)
