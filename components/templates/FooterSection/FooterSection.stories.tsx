import type { Meta, StoryObj } from "@storybook/react";

import FooterSection from "./FooterSection";

const meta: Meta<typeof FooterSection> = {
  component: FooterSection,
};

export default meta;

type Story = StoryObj<typeof FooterSection>;

export const FooterSectionStory: Story = {
  name: "FooterSection",
  render: () => <FooterSection/>,
};
