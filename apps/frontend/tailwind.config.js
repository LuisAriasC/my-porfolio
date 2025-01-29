const sharedConfig = require('../../tailwind.config');

module.exports = {
  ...sharedConfig,
  theme: {
    ...sharedConfig.theme,
    extend: {
      ...sharedConfig.theme.extend,
      customColor: '#FF5733',
    },
  },
};