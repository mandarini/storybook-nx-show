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
    text: 'Click me!',
    borderWidth: 3,
    width: 350,
    height: 50,
  },
};
