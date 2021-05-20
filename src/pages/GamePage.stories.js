import React from 'react'
import GamePage from './GamePage'

export default {
  title: 'GamePage',
  component: GamePage,
}

const Template = args => <GamePage {...args} />

export const Default = Template.bind({})
Default.args = {}
