import React from 'react'
import CardStory from './Card'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import TextCardStory from './Text'
import ListCardStory from './List'
import ImgCardStory from './Img'
import FigureCardStory from './Figure'

const story = storiesOf('Card')

story.addDecorator(withKnobs)
story.add('Basic', () => {
  const theme = select(
    'Theme',
    ['default', 'success', 'info', 'warning', 'danger'],
    'default',
  )
  return <CardStory theme={theme} />
})
story.add('Text', () => <TextCardStory />)
story.add('List', () => <ListCardStory />)
story.add('Figure', () => <FigureCardStory />)
story.add('Img', () => <ImgCardStory />)
