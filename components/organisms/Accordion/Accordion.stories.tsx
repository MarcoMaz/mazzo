import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";
import AccordionPanel from "./parts/AccordionPanel/AccordionPanel";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const AccordionStory: Story = {
  name: "Accordion",
  render: (props) => <Accordion {...props} />,
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
        buttonId: "1",
        headline: "Sample Title 1",
        children: <>Sample Content 1</>,
      },
      {
        buttonId: "2",
        headline: "Sample Title 2",
        children: <>Sample Content 2</>,
      },
      {
        buttonId: "3",
        headline: "Sample Title 3",
        children: <>Sample Content 3</>,
      },
    ],
  },
};
