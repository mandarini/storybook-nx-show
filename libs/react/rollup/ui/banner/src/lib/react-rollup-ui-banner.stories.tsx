import type { Meta } from '@storybook/react';
import { ReactRollupUiBanner } from './react-rollup-ui-banner';

const Story: Meta<typeof ReactRollupUiBanner> = {
  component: ReactRollupUiBanner,
  title: 'ReactRollupUiBanner',
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
