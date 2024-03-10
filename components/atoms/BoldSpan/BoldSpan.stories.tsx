import type { Meta, StoryObj } from "@storybook/react";

import BoldSpan from "./BoldSpan";

const meta: Meta<typeof BoldSpan> = {
  component: BoldSpan,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BoldSpan>;

export const BoldSpanStory: Story = {
  name: "BoldSpan",
  render: (props) => <BoldSpan {...props} />,
  argTypes: {
    children: {
      control: "text",
    },
  },
  args: {
    children: "Sample Text",
  },
};
