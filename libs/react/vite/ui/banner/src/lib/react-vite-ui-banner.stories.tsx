import type { Meta } from '@storybook/react';
import { ReactViteUiBanner } from './react-vite-ui-banner';

const Story: Meta<typeof ReactViteUiBanner> = {
  component: ReactViteUiBanner,
  title: 'ReactViteUiBanner',
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
