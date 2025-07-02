import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ToastContainer from '@/components/Toast/ToastContainer';
import ButtonsBar from '@/components/ButtonsBar';
import { ComponentProps } from 'react';

type StoryPropsT = ComponentProps<typeof ToastContainer>;

const meta: Meta<StoryPropsT> = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  component: ToastContainer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    closable: { control: 'boolean' },
    closeDuration: { control: 'number' },
    animation: { control: 'radio', options: ['fade', 'slide'] },
  },
};

export default meta;

type StoryT = StoryObj<StoryPropsT>;

export const Fade: StoryT = {
  args: {
    closable: true,
    closeDuration: 2000,
    animation: 'fade',
  },
  render: (args) => (
    <div>
      <ToastContainer {...args} />
      <ButtonsBar />
    </div>
  ),
};

export const Slide: StoryT = {
  args: {
    closable: false,
    closeDuration: 2000,
    animation: 'slide',
  },
  render: (args) => (
    <div>
      <ToastContainer {...args} />
      <ButtonsBar />
    </div>
  ),
};

export const Closable: StoryT = {
  args: {
    closable: true,
    closeDuration: 4000,
    animation: 'slide',
  },
  render: (args) => (
    <div>
      <ToastContainer {...args} />
      <ButtonsBar />
    </div>
  ),
};
