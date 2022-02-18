import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      options: ['violet', 'gray'],
      control: { type: 'inline-radio' },
    },
    children: {
      defaultValue: 'Label',
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
