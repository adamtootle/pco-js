const generateFromDocs = require('./generateFromDocs');

module.exports = function generateGiving() {
  generateFromDocs({
    docsUri: 'https://raw.githubusercontent.com/planningcenter/api-docs/master/source/includes/_people.md',
    srcDirectory: 'people',
    apiRoot: '/people/v2',
  });
};
