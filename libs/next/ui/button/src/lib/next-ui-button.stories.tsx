import type { Meta } from '@storybook/react';
import { NextUiButton } from './next-ui-button';

const Story: Meta<typeof NextUiButton> = {
  component: NextUiButton,
  title: 'NextUiButton',
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
