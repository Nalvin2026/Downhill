import '../src/index.css'

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'ink',
      values: [
        { name: 'ink',  value: '#0A0A0A' },
        { name: 'char', value: '#2E2E2A' },
        { name: 'bone', value: '#EDE9D8' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    options: {
      // Logical category order in the sidebar
      storySort: {
        order: [
          'Foundations',
          'Display',
          ['Badge', 'Tag', 'Stamp', 'Divider'],
          'Interactive',
          ['Toggle', 'FilterChip'],
          'Navigation',
          ['NavTab', 'Header'],
          'Surface',
          ['Panel'],
        ],
      },
    },
  },
  globalTypes: {},
  initialGlobals: {
    backgrounds: { value: 'ink' },
  },
}

export default preview
