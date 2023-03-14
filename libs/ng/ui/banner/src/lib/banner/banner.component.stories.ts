import { Meta } from '@storybook/angular';
import { BannerComponent } from './banner.component';

export default {
  title: 'BannerComponent',
  component: BannerComponent,
} as Meta<BannerComponent>;

export const Primary = {
  render: (args: BannerComponent) => ({
    props: args,
  }),
  args: {
    text: 'Hello world',
    backgroundColor: '#FF00FF66',
    borderColor: '#FF00FF',
    borderWidth: 4,
    width: 350,
    height: 50,
  },
};
