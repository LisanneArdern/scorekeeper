import React from 'react'

import History from './History'

export default {
  title: 'History',
  component: History,
}

const Template = args => <History {...args} />

export const DefaultHistory = Template.bind({})
DefaultHistory.args = {
  name: 'John',
  score: 20,
}
