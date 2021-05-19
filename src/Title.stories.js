import React from 'react'

import Title from './Title'

export default {
  title: 'Title',
  component: Title,
}

const Template = args => <Title {...args} />

export const DefaultTitle = Template.bind({})
DefaultTitle.args = {
  children: 'Carcasonne',
}
