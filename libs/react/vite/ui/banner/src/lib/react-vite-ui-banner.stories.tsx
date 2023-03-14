import type { Meta } from '@storybook/react';
import { ReactViteUiBanner } from './react-vite-ui-banner';

const Story: Meta<typeof ReactViteUiBanner> = {
  component: ReactViteUiBanner,
  title: 'ReactViteUiBanner',
};
export default Story;

export const Primary = {
  args: {
    backgroundColor: '',
    borderColor: '',
    text: '',
    borderWidth: 0,
    width: 0,
    height: 0,
  },
};
