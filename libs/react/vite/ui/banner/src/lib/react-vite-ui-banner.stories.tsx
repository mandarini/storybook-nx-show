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
    text: 'Oh no! Something went wrong!',
    borderWidth: 3,
    width: 350,
    height: 50,
  },
};

export const Secondary = {
  args: {
    text: 'Successfully completed operation!',
    backgroundColor: '#00ff0088',
    borderColor: '#00ff00',
    borderWidth: 3,
    width: 200,
    height: 30,
  },
};
