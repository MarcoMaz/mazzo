import type { Meta, StoryObj } from "@storybook/react";

import ExternalLink from "./ExternalLink";

const meta: Meta<typeof ExternalLink> = {
  component: ExternalLink,
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
  render: (props) => <ExternalLink {...props} />,
};

export default meta;

type Story = StoryObj<typeof ExternalLink>;

export const ExternalLinkStory: Story = {
  name: "Default",
};
