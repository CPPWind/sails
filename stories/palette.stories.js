import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {withKnobs, text, select} from '@storybook/addon-knobs'
import Palette from './components/Palette'
import '../src/styles/__palette.css'
import '../src/styles/_skins.css'

const palette = storiesOf('Color Palette', module)
palette.addDecorator(withKnobs)
palette.add('Brand Colors', () => <Palette forGroup="brand"/>)
palette.add('Grayscale', () => <Palette forGroup="grayscale" /> )
palette.add('Light Opacity', () => <Palette forGroup="lightOpacity" /> )
palette.add('Dark Opacity', () => <Palette forGroup="darkOpacity" /> )
palette.add('Colors', () => <Palette forGroup="color" /> )
