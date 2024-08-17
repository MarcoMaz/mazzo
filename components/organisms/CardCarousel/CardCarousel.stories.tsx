import type { Meta, StoryObj } from "@storybook/react";
import CardCarousel from "./CardCarousel";

const meta: Meta<typeof CardCarousel> = {
  component: CardCarousel,
};

export default meta;

type Story = StoryObj<typeof CardCarousel>;

export const CardCarouselStory: Story = {
  name: "CardCarousel",
  render: () => (
    <CardCarousel>
      <>
        <h1>Heading 1</h1>
        <h2>SubHeading 1</h2>
        <p>This is some text</p>
      </>
      <>
        <h1>Heading 2</h1>
        <h2>SubHeading 2</h2>
        <p>This is some text</p>
      </>
      <>
        <h1>Heading 3</h1>
        <h2>SubHeading 3</h2>
        <p>This is some text</p>
      </>
      <>
        <h1>Heading 4</h1>
        <h2>SubHeading 4</h2>
        <p>This is some text</p>
      </>
    </CardCarousel>
  ),
  argTypes: {
    children: {
      control: {
        type: "object",
      },
    },
  },
};
