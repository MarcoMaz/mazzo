import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  component: Heading,
  argTypes: {
    label: {
      control: "text",
    },
    level: {
      control: { type: "select" },
      options: [1, 2, 3, 4],
    },
  },
  args: {
    label: "Sample Text",
    level: 1
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Heading1Story: Story = {
  name: "H1",
  render: (props) => <Heading {...props}/>,
  args: {
    level: 1
  }
};

export const Heading2Story: Story = {
  name: "H2",
  render: (props) => <Heading {...props} />,
  args: {
    level: 2
  }
};

export const Heading3Story: Story = {
  name: "H3",
  render: (props) => <Heading {...props} />,
  args: {
    level: 3
  }
};

export const Heading4Story: Story = {
  name: "H4",
  render: (props) => <Heading {...props} />,
  args: {
    level: 4
  }
};
