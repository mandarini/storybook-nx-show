import type { Meta } from '@storybook/react';
import { ReactRollupUiButton } from './react-rollup-ui-button';

const Story: Meta<typeof ReactRollupUiButton> = {
  component: ReactRollupUiButton,
  title: 'ReactRollupUiButton',
};
export default Story;

export const Primary = {
  args: {
    text: 'Click me',
    color: '#ddffdd66',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: 'Nope',
    color: '#ff000099',
    disabled: true,
  },
};
