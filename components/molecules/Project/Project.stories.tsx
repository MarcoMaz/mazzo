import type { Meta, StoryObj } from '@storybook/react';

import Project from './Project';

const meta: Meta<typeof Project> = {
  component: Project,
  argTypes: {
    headline: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    headline: 'Project Headline',
    subheadline: 'Summary of the project',
    description: 'This is a description of the project in more details',
    chips: ['Chip 1', 'Chip 2'],
    CTA: {
      url: '#',
      label: 'Read More',
    },
  },
  render: (props) => <Project {...props} />,
};

export default meta;

type Story = StoryObj<typeof Project>;

export const ProjectStory: Story = {
  name: 'Default',
};
