import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import './../src/app/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      theme: themes.dark
    },
    backgrounds: {
      default: 'purple',
      values: [
        {
          name: 'purple',
          value: '#231355',
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
