import type { Meta, StoryObj } from "@storybook/react";

import ChipGroup from "./ChipGroup";

const meta: Meta<typeof ChipGroup> = {
  component: ChipGroup,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ChipGroup>;

export const ChipGroupStory: Story = {
  name: "ChipGroup",
  render: (props) => <ChipGroup {...props} />,
  argTypes: {
    chips: {
      control: {
        type: "object",
      },
    },
  },
  args: {
    chips: [
      "Sample Text",
      "Text",
      "Label",
      "Text",
      "Text",
      "Label",
      "Sample Text",
      "Text",
      "Label",
      "Label",
      "Sample Text",
      "Sample Text",
      "Text",
      "Label",
      "Text",
      "Text",
      "Label",
      "Sample Text",
      "Text",
    ],
  },
};
