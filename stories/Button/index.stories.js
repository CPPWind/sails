import React from 'react'
import ButtonStory from './Button'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import BarStory from './Bars'
import Button, { buttonThemes, buttonSizes } from '../../src/components/Button'

const story = storiesOf('Button')

story.addDecorator(withKnobs)
story.add(
  'Default',
  () => {
    const label = text('Label', 'Button')
    const theme = select('Theme', buttonThemes, 'default')
    const size = select('Size', buttonSizes, 'medium')
    const style = { '--button-border-radius': '20px' }
    const doClick = action('Button Click')
    return (
      <Button
        style={style}
        label={label}
        theme={theme}
        size={size}
        doClick={doClick}
      />
    )
  },
  { info: { inline: true } },
)
story.add('Themes', () => <ButtonStory />)
story.add('Bars', () => <BarStory />)
