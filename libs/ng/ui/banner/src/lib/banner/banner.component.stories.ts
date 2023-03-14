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
    text: 'Oh no! Something went wrong!',
    backgroundColor: '#FF00FF66',
    borderColor: '#FF00FF',
    borderWidth: 4,
    width: 350,
    height: 50,
  },
};

export const Secondary = {
  render: (args: BannerComponent) => ({
    props: args,
  }),
  args: {
    text: 'Successfully completed operation!',
    backgroundColor: '#00ff0088',
    borderColor: '#00ff00',
    borderWidth: 3,
    width: 200,
    height: 30,
  },
};
