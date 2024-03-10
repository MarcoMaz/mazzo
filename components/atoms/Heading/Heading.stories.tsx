import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  component: Heading,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const HeadingStory: Story = {
  name: "Heading",
  render: (props) => <Heading {...props} />,
  argTypes: {
    label: {
      control: "text",
    },
    level: {
      control: { type: "select" },
      options: ["1", "2", "3", "4"],
    },
  },
  args: {
    label: "Sample Text",
  },
};

export const H1Story: Story = {
  name: "Heading H1",
  render: () => <Heading level={1} label="Sample Text" />,
};

export const H2Story: Story = {
  name: "Heading H2",
  render: () => <Heading level={2} label="Sample Text" />,
};

export const H3Story: Story = {
  name: "Heading H3",
  render: () => <Heading level={3} label="Sample Text" />,
};

export const H4Story: Story = {
  name: "Heading H4",
  render: () => <Heading level={4} label="Sample Text" />,
};
