import { createElement } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FButton } from './FButton';

export default {
  title: 'FButton',
  component: FButton,
} as ComponentMeta<typeof FButton>;

const Template: ComponentStory<typeof FButton> = (args) => <FButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Hello, FButton',
};
