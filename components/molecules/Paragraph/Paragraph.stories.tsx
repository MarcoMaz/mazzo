import type { Meta, StoryObj } from "@storybook/react";

import Paragraph from "./Paragraph";

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const ParagraphStory: Story = {
  name: "Paragraph",
  render: (props) => <Paragraph {...props} />,
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
    boldify: {
      control: {
        type: "array",
      },
    },
  },
  args: {
    text: "This is a very sample text",
    boldify: ["very", "text"],
  },
};
