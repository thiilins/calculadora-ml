import React from 'react'
import { Story, Meta } from '@storybook/react'
import Card from '.'

export default {
  title: 'Card',
  component: Card
} as Meta

export const Default: Story = () => <Card></Card>
