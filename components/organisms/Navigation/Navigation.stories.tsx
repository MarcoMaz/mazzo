import type { Meta, StoryObj } from "@storybook/react";
import Navigation from "./Navigation";

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Navigation>;

const baseArgs = {
  navLinks: [
    {
      url: "#",
      label: "Link #1",
    },
    {
      url: "#",
      label: "Link #2",
    },
    {
      url: "#",
      label: "Link #3",
    },
    {
      url: "#",
      label: "Link #4",
    },
  ],
};

const argTypes = {
  navLinks: {
    control: {
      type: "object",
    },
  },
};

export const NavigationStory: Story = {
  name: "Navigation (Black Background)",
  render: (props) => (
    <div style={{ background: "var(--colorBlack)", height: "70vh" }}>
      <Navigation {...props} />
    </div>
  ),
  argTypes,
  args: baseArgs,
};

export const NavigationStoryWhiteBackground: Story = {
  name: "Navigation (White Background)",
  render: (props) => (
    <div style={{ background: "var(--colorWhite)", height: "70vh" }}>
      <Navigation {...props} />
    </div>
  ),
  argTypes,
  args: baseArgs,
};

export const NavigationStoryPrimaryBackground: Story = {
  name: "Navigation (Primary Background)",
  render: (props) => (
    <div style={{ background: "var(--colorPrimary)", height: "70vh" }}>
      <Navigation {...props} />
    </div>
  ),
  argTypes,
  args: baseArgs,
};
