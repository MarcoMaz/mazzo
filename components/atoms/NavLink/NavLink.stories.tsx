import type { Meta, StoryObj } from "@storybook/react";

import NavLink from "./NavLink";

const meta: Meta<typeof NavLink> = {
  component: NavLink,
  argTypes: {
    label: {
      control: "text",
    },
    url: {
      control: "text",
    },
  },
  args: {
    label: "Sample Text",
    url: "#",
  },
  render: (props) => <ul><NavLink {...props} /></ul>,
};

export default meta;

type Story = StoryObj<typeof NavLink>;

export const NavLinkStory: Story = {
  name: "Default",
};
