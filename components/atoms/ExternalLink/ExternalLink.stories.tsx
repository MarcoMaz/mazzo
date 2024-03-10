import type { Meta, StoryObj } from "@storybook/react";

import ExternalLink from "./ExternalLink";

const meta: Meta<typeof ExternalLink> = {
  component: ExternalLink,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ExternalLink>;

export const ExternalLinkStory: Story = {
  name: "ExternalLink",
  render: (props) => <ExternalLink {...props} />,
  argTypes: {
    url: {
      control: "text",
    },
    label: {
      control: "text",
    },
  },
  args: {
    url: "#",
    label: "Sample Text",
  },
};
