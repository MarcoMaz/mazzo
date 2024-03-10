import type { Meta, StoryObj } from "@storybook/react";

import Chip from "./Chip";

const meta: Meta<typeof Chip> = {
  component: Chip,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const ChipStory: Story = {
  name: "Chip",
  render: (props) => <Chip {...props}/>,
  argTypes: {
    label: {
      control: "text",
    },
  },
  args: {
    label: "Sample Text",
  },
};
