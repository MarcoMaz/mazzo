import type { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
};

export default meta;

type Story = StoryObj<typeof Carousel>;

const items = [
  {
    id: '1',
    children: (
      <article>
        <h2>Heading 1</h2>
        <p>This is some text</p>
        <a href='#'>Link 1</a>
      </article>
    ),
  },
  {
    id: '2',
    children: (
      <>
        <h2>Heading 2</h2>
        <p>This is some text</p>
        <a href='#'>Link 2</a>
      </>
    ),
  },
  {
    id: '3',
    children: (
      <>
        <h2>Heading 3</h2>
        <p>This is some text</p>
        <a href='#'>Link 3</a>
      </>
    ),
  },
  {
    id: '4',
    children: (
      <>
        <h2>Heading 4</h2>
        <p>This is some text</p>
        <a href='#'>Link 4</a>
      </>
    ),
  },
  {
    id: '5',
    children: (
      <>
        <h2>Heading 5</h2>
        <p>This is some text</p>
        <a href='#'>Link 5</a>
      </>
    ),
  },
  {
    id: '6',
    children: (
      <>
        <h2>Heading 6</h2>
        <p>This is some text</p>
        <a href='#'>Link 6</a>
      </>
    ),
  },
  {
    id: '7',
    children: (
      <>
        <h2>Heading 7</h2>
        <p>This is some text</p>
        <a href='#'>Link 7</a>
      </>
    ),
  },
  {
    id: '8',
    children: (
      <>
        <h2>Heading 8</h2>
        <p>This is some text</p>
        <a href='#'>Link 8</a>
      </>
    ),
  },
];

export const CarouselStory: Story = {
  name: 'Carousel',
  args: {
    items: items,
    ariaLabelMainTopic: 'Main Topic',
    ariaLabelTopic: 'Topic',
  },
  render: (props) => <Carousel {...props} />,
};
