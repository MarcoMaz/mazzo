import type { Meta, StoryObj } from '@storybook/react';

import ExternalLink from './ExternalLink';

const meta: Meta<typeof ExternalLink> = {
  component: ExternalLink,
  argTypes: {
    ariaLabelledBy: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    url: {
      control: 'text',
    },
  },
  args: {
    ariaLabelledBy: undefined,
    label: 'Sample Text',
    url: '#',
  },
  render: (props) => <ExternalLink {...props} />,
};

export default meta;

type Story = StoryObj<typeof ExternalLink>;

export const ExternalLinkStory: Story = {
  name: 'Default',
};
