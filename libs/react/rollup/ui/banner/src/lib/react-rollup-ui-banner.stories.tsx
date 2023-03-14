import type { Meta } from '@storybook/react';
import { ReactRollupUiBanner } from './react-rollup-ui-banner';

const Story: Meta<typeof ReactRollupUiBanner> = {
  component: ReactRollupUiBanner,
  title: 'ReactRollupUiBanner',
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
