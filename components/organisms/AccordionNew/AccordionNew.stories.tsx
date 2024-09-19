import type { Meta, StoryObj } from "@storybook/react";
import AccordionNew from "./AccordionNew";

const meta: Meta<typeof AccordionNew> = {
  component: AccordionNew,
};

export default meta;

type Story = StoryObj<typeof AccordionNew>;

export const AccordionNewStory: Story = {
  name: "AccordionNew",
  render: (props) => <AccordionNew {...props}/>,
  argTypes: {
    items: {
      control: {
        type: "object",
      },
    },
  },
  args: {
    items: [
      {
        id: "1",
        title: "Sample Title 1",
        content: "content1",
      },
      {
        id: "2",
        title: "Sample Title 2",
        content: "content2",
      },
      {
        id: "3",
        title: "Sample Title 3",
        content: "content3",
      },
    ],
  },
};
