import type { Meta } from '@storybook/react';
import { ReactRollupUiButton } from './react-rollup-ui-button';

const Story: Meta<typeof ReactRollupUiButton> = {
  component: ReactRollupUiButton,
  title: 'ReactRollupUiButton',
};
export default Story;

export const Primary = {
  args: {
    text: '',
    color: '',
    disabled: false,
  },
};
