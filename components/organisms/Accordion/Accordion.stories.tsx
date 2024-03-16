import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";

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
        buttonId: "accordion-item-1",
        hasBorderReset: true,
        headline: "Sample Title 1",
        children: <>Sample Content 1</>,
      },
      {
        buttonId: "accordion-item-2",
        hasBorderReset: false,
        headline: "Sample Title 2",
        children: <>Sample Content 2</>,
      },
      {
        buttonId: "accordion-item-3",
        hasBorderReset: false,
        headline: "Sample Title 3",
        children: <>Sample Content 3</>,
      },
    ],
  },
};
