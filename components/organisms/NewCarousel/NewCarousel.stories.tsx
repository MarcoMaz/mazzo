import type { Meta, StoryObj } from '@storybook/react';
import NewCarousel from './NewCarousel';

const meta: Meta<typeof NewCarousel> = {
  component: NewCarousel,
};

export default meta;

type Story = StoryObj<typeof NewCarousel>;

const items = [
  {
    id: '1',
    children: <p>Sample Content 1</p>,
  },
  {
    id: '2',
    children: <p>Sample Content 2</p>,
  },
  {
    id: '3',
    children: <p>Sample Content 3</p>,
  },
  {
    id: '4',
    children: <p>Sample Content 4</p>,
  },
  {
    id: '5',
    children: <p>Sample Content 5</p>,
  },
  {
    id: '6',
    children: <p>Sample Content 6</p>,
  },
  {
    id: '7',
    children: <p>Sample Content 7</p>,
  },
  {
    id: '8',
    children: <p>Sample Content 8</p>,
  },
];

export const NewCarouselStory: Story = {
  name: 'NewCarousel',
  args: {
    items: items,
    ariaLabelMainTopic: 'Main Topic',
    ariaLabelTopic: 'Topic',
  },
  render: (props) => <NewCarousel {...props} />,
};
