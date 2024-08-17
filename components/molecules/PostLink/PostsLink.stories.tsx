import type { Meta, StoryObj } from "@storybook/react";

import PostsLink from "./PostsLink";

const meta: Meta<typeof PostsLink> = {
  component: PostsLink,
  argTypes: {
    blogPost: {
      control: {
        type: "object",
      },
    },
  },
  args: {
    blogPost: {
      id: "sample-id",
      title: "Sample Title",
      date: "2022-01-01",
    },
  },
  render: (props) => <PostsLink {...props} />,
};

export default meta;

type Story = StoryObj<typeof PostsLink>;

export const PostsLinkStory: Story = {
  name: "Default",
};
