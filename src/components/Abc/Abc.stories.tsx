import { createElement } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Abc } from './Abc';

export default {
  title: 'Abc',
  component: Abc,
} as ComponentMeta<typeof Abc>;

const Template: ComponentStory<typeof Abc> = (args) => <Abc {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const UpperCase = Template.bind({});
UpperCase.args = {
  upperCase: true,
};
