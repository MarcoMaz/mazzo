import type { Meta, StoryObj } from '@storybook/react';

import FooterSection from './FooterSection';

const meta: Meta<typeof FooterSection> = {
  component: FooterSection,
  render: (props) => <FooterSection {...props} />,
};

export default meta;

type Story = StoryObj<typeof FooterSection>;

export const FooterSectionStory: Story = {
  name: 'Default',
};
