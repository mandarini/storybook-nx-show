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
    color: '#ddffdd66',
    disabled: false,
  },
};

export const Disabled = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    text: 'Nope',
    color: '#ff000099',
    disabled: true,
  },
};
