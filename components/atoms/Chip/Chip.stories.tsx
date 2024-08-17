import type { Meta, StoryObj } from "@storybook/react";

import Chip from "./Chip";

const meta: Meta<typeof Chip> = {
  component: Chip,
  argTypes: {
    label: {
      control: "text",
    },
  },
  args: {
    label: "Sample Text",
  },
  render: (props) => <Chip {...props} />,
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const ChipStory: Story = {
  name: "Default",
};
