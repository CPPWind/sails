import React from 'react'
import ButtonStory from './Button'
import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'
import BarStory from './Bars'

const story = storiesOf('Button')

story.addDecorator(withKnobs)
story.add('Default', () => <ButtonStory />)
story.add('Bars', () => <BarStory />)

