import type { Meta, StoryObj } from "@storybook/react";

import IntroSection from "./IntroSection";

const meta: Meta<typeof IntroSection> = {
  component: IntroSection,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof IntroSection>;

export const IntroSectionStory: Story = {
  name: "IntroSection",
  render: () => <IntroSection />,
};
