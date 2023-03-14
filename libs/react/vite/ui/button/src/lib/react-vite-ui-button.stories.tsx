import type { Meta } from '@storybook/react';
import { ReactViteUiButton } from './react-vite-ui-button';

const Story: Meta<typeof ReactViteUiButton> = {
  component: ReactViteUiButton,
  title: 'ReactViteUiButton',
};
export default Story;

export const Primary = {
  args: {
    text: 'Click me',
    color: '#ddffdd66',
    disabled: false,
  },
};
