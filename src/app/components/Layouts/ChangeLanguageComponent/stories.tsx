import React from 'react'
import { Story, Meta } from '@storybook/react'
import ChangeLanguageComponent from '.'

export default {
  title: 'ChangeLanguageComponent',
  component: ChangeLanguageComponent
} as Meta

export const Default: Story = () => <ChangeLanguageComponent />
