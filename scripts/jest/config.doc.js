const path = require('path');

const getJestConfig = require('./config.base');

module.exports = getJestConfig({
  htmlReporterOutputPath: path.join(
    __dirname,
    '../../public/docs/test-result/index.html'
  ),
});
