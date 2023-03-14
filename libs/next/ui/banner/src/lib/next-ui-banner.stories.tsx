import type { Meta } from '@storybook/react';
import { NextUiBanner } from './next-ui-banner';

const Story: Meta<typeof NextUiBanner> = {
  component: NextUiBanner,
  title: 'NextUiBanner',
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
