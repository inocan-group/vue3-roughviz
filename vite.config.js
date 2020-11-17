// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  root: './dev',
  alias: {
    '/@/': path.resolve(__dirname, 'src'),
  },
};
