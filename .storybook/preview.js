/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "Black",
      values: [
        {
          name: "Black",
          value: "#222",
        },
        {
          name: "Gradient",
          value:
            "linear-gradient(45deg, #f3ec78, #af4261) no-repeat center center fixed",
        },
      ],
    },
  },
};

export default preview;
