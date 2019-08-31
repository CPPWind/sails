---
to: <%= storyPath %>
---
import React from 'react'
import <%= componentName %> from './<%= componentName %>'
import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'

const story = storiesOf('<%= componentName %>')

story.addDecorator(withKnobs)
story.add('Basic', () => <<%= componentName %> />)
