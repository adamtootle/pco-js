const generateFromDocs = require('./generateFromDocs');

module.exports = function generateServices() {
  generateFromDocs({
    docsUri: 'https://raw.githubusercontent.com/planningcenter/api-docs/master/source/includes/_services.md',
    srcDirectory: 'services',
    apiRoot: '/services/v2',
  });
};
