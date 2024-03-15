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
    cards: {
      control: {
        type: "object",
      },
    },
  },
  args: {
    cards: [
      {
        headline: "Sample Title",
        subheadline: "Sample Subtitle",
        description: "Sample Description",
        chips: ["Chip 1", "Chip 2"],
        CTA: {
          url: "#",
          label: "Read More",
        },
      },
      {
        headline: "Sample Title 2",
        subheadline: "Sample Subtitle",
        description: "Sample Description",
        chips: ["Chip 1", "Chip 2"],
        CTA: {
          url: "#",
          label: "Read More",
        },
      },
      {
        headline: "Sample Title 3",
        subheadline: "Sample Subtitle",
        description: "Sample Description",
        chips: ["Chip 1", "Chip 2"],
        CTA: {
          url: "#",
          label: "Read More",
        },
      },
    ],
  },
};
