import Input from '@/components/Input';
import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';
type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
  component: Input,
  title: 'Components/Input',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'number'],
    },
    clearable: {
      control: 'boolean',
    },
    showArrows: {
      control: 'boolean',
    },
  },
  args: {
    value: '',
    onValueChange: fn(),
  },
};
export default meta;

type StoryT = StoryObj<StoryProps>;

export const Text: StoryT = {
  args: {
    type: 'text',
  },
};
export const TextClearable: StoryT = {
  args: {
    type: 'text',
    clearable: true,
  },
};
export const Password: StoryT = {
  args: {
    type: 'password',
  },
};
export const Number: StoryT = {
  args: {
    type: 'number',
  },
};
export const NumberWithArrows: StoryT = {
  args: {
    type: 'number',
    showArrows: true,
  },
};
