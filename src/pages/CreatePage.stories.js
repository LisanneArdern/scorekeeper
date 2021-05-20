import React from 'react'
import CreatePage from './CreatePage'

export default {
  title: 'CreatePage',
  component: CreatePage,
}

const Template = args => <CreatePage {...args} />

export const Default = Template.bind({})
Default.args = {
  namoeOfGame: 'Carcasonne',
  players: [
    { name: 'John', score: 0 },
    { name: 'Jane', score: 30 },
  ],
}
