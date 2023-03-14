import type { Meta } from '@storybook/react';
import { Container } from './container';

const Story: Meta<typeof Container> = {
  component: Container,
  title: 'Container',
};
export default Story;

export const Primary = {
  args: {},
};
