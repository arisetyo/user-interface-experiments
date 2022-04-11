/**
 * Template stories
 */

import React from 'react';
import Template from './Template.js';

export default {
  component: Template,
  title: 'Components/Template',
  parameters: {
    docs: {
      description: {
        component:
          'Template Description',
      },
    },
  },
  argTypes: {
    propsName: {
      description: 'Template props description',
      table: {
        defaultValue: {
          summary: 'Template props default value',
        },
      },
    },
  },
};

export const Basic = (args) => <Template {...args} />;
Basic.args = {};
 