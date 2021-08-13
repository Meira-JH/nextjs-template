import DefaultContainer from '.';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'DefaultContainer',
  component: DefaultContainer
} as Meta;

export const Basic: Story = (args) => <DefaultContainer {...args} />;
