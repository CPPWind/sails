import React from 'react'
import Card from './Card'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

const story = storiesOf('Card')

story.addDecorator(withKnobs)
story.add('Basic', () => <Card/>)
story.add('Text', () => <Text/>)

story.add('List', () => <List/>)

story.add('Figure', () => <Figure/>)
