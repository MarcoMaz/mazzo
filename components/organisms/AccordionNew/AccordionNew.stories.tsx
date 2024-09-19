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
        headline: "Sample Title 1",
        children: <p>Sample Content 1</p>,
      },
      {
        id: "2",
        headline: "Sample Title 2",
        children: <p>Sample Content 2</p>,
      },
      {
        id: "3",
        headline: "Sample Title 3",
        children: <p>Sample Content 3</p>,
      },
    ],
  },
};
