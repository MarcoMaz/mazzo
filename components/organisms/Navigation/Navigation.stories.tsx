import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './Navigation';

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  argTypes: {
    navLinks: {
      control: {
        type: 'object',
      },
    },
  },
  args: {
    navLinks: [
      {
        url: '#',
        label: 'Link #1',
      },
      {
        url: '#',
        label: 'Link #2',
      },
      {
        url: '#',
        label: 'Link #3',
      },
      {
        url: '#',
        label: 'Link #4',
      },
    ],
  },
  render: (props) => <Navigation {...props} />,
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const NavigationStory: Story = {
  name: 'Default',
  render: (props) => (
    <div style={{ background: 'var(--colorPrimary)', height: '100vh' }}>
      <Navigation {...props} />
    </div>
  ),
};

export const NavigationStoryBlackBackground: Story = {
  name: 'With Black Background',
  render: (props) => (
    <div style={{ background: 'var(--colorBlack)', height: '100vh' }}>
      <Navigation {...props} />
    </div>
  ),
};

export const NavigationStoryWhiteBackground: Story = {
  name: 'With White Background',
  render: (props) => (
    <div style={{ background: 'var(--colorWhite)', height: '100vh' }}>
      <Navigation {...props} />
    </div>
  ),
};
