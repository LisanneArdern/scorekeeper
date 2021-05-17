import React from 'react'

import Player from './Player'

export default {
  title: 'Player',
  component: Player,
}

const Template = args => <Player {...args} />

export const FirstPlayer = Template.bind({})
FirstPlayer.args = {
  name: 'Jane Doe',
  number: 20,
}

export const SecondPlayer = Template.bind({})
SecondPlayer.args = {
  name: 'John Doe',
  number: 30,
}
