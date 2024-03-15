import type { Meta, StoryObj } from "@storybook/react";
import CardCarousel from "./CardCarousel";

const meta: Meta<typeof CardCarousel> = {
  component: CardCarousel,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CardCarousel>;

export const CardCarouselStory: Story = {
  name: "CardCarousel",
  render: (props) => <CardCarousel {...props} />,
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
