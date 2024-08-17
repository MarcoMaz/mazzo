import type { Meta, StoryObj } from "@storybook/react";

import Paragraph from "./Paragraph";

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
    boldify: {
      control: {
        type: "object",
      },
    },
  },
  render: (props) => <Paragraph {...props} />,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const ParagraphStory: Story = {
  name: "Default",
  args: {
    text: "This is a very sample text",
  },
};

export const ParagraphBoldifiedStory: Story = {
  name: "Paragraph with bold words",
  args: {
    text: "This is a very sample text",
    boldify: ["very", "text"],
  },
};
