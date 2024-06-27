export const theme = Object.freeze({
  fonts: {
    first: `'Nanum Gothic', sans-serif`,
    second: `'Roboto Flex', sans-serif`,
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  colors: {
    accent: '#2196f3',
    background: '#f5f4fa',
  },

  shadows: {
    defaultShadow: '',
    hoverShadow:
      '0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)',
  },

  media: {
    mobile: '(min-width: 360px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1279px)',
  },
});
