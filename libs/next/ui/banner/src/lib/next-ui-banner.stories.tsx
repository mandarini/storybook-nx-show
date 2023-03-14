import type { Meta } from '@storybook/react';
import { NextUiBanner } from './next-ui-banner';

const Story: Meta<typeof NextUiBanner> = {
  component: NextUiBanner,
  title: 'NextUiBanner',
};
export default Story;

export const Primary = {
  args: {
    backgroundColor: '#ff00ff88',
    borderColor: '#ff00ff',
    text: 'Oh no! Something went wrong!',
    borderWidth: 3,
    width: 350,
    height: 50,
  },
};

export const Secondary = {
  args: {
    backgroundColor: '#00ff0088',
    borderColor: '#00ff00',
    text: 'Successfully completed operation!',
    borderWidth: 3,
    width: 200,
    height: 30,
  },
};
