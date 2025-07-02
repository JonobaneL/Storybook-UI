import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Sidebar from '@/components/SidebarMenu';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  tags: ['autodocs'],
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => <Sidebar />,
};
