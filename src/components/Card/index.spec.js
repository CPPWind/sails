import React from 'react'
import { mount } from 'enzyme'

// import initialState from './mocks/body'

import Card from 'components/Card/index.js'

describe('<Card Component Test />', () => {
  it('should render basic Body Component with an image', () => {
    const Component = mount(
      <Card>
        <h1>WOot</h1>
      </Card>,
    )

    expect(Component.find('.button').length).toBe(1)
    expect(Component.find('.bodyImg').length).toBe(1)

    expect(Component).toMatchSnapshot()
  })
})
