const generateFromDocs = require('./generateFromDocs');

module.exports = function generateGiving() {
  generateFromDocs({
    docsUri: 'https://raw.githubusercontent.com/planningcenter/api-docs/master/source/includes/_giving.md',
    srcDirectory: 'giving',
    apiRoot: '/giving/v2',
  });
};
