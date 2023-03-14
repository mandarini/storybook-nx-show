import { Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
} as Meta<ButtonComponent>;

export const Primary = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    text: 'Click me',
    color: '#ddffdd',
    disabled: false,
  },
};
