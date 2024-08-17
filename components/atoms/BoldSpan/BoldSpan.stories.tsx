import type { Meta, StoryObj } from "@storybook/react";

import BoldSpan from "./BoldSpan";

const meta: Meta<typeof BoldSpan> = {
  component: BoldSpan,
  argTypes: {
    children: {
      control: "text",
    },
  },
  args: {
    children: "Sample Text",
  },
  render: (props) => <BoldSpan {...props} />,
};

export default meta;

type Story = StoryObj<typeof BoldSpan>;

export const BoldSpanStory: Story = {
  name: "Default",
};
