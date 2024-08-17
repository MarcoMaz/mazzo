import type { Meta, StoryObj } from "@storybook/react";

import ChipGroup from "./ChipGroup";

const meta: Meta<typeof ChipGroup> = {
  component: ChipGroup,
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
  render: (props) => <ChipGroup {...props} />,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ChipGroup>;

export const ChipGroupStory: Story = {
  name: "Default",
};
