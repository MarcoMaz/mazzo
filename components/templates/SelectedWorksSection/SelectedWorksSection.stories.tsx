import type { Meta, StoryObj } from '@storybook/react';

import SelectedWorksSection from './SelectedWorksSection';

const meta: Meta<typeof SelectedWorksSection> = {
  component: SelectedWorksSection,
  render: (props) => <SelectedWorksSection {...props} />,
};

export default meta;

type Story = StoryObj<typeof SelectedWorksSection>;

export const SelectedWorksSectionStory: Story = {
  name: 'Default',
};
