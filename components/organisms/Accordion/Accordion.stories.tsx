import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  argTypes: {
    items: {
      control: {
        type: 'object',
      },
    },
  },
  args: {
    items: [
      {
        id: '1',
        headline: 'Sample Title 1',
        children: '<p>Sample Content 1</p>',
      },
      {
        id: '2',
        headline: 'Sample Title 2',
        children: '<p>Sample Content 2</p>',
      },
      {
        id: '3',
        headline: 'Sample Title 3',
        children: '<p>Sample Content 3</p>',
      },
    ],
  },
  render: (props) => <Accordion {...props} />,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const AccordionStory: Story = {
  name: 'Default',
};
