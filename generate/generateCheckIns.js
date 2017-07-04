const generateFromDocs = require('./generateFromDocs');

module.exports = function generateServices() {
  generateFromDocs({
    docsUri: 'https://raw.githubusercontent.com/planningcenter/api-docs/master/source/includes/_check_ins.md',
    srcDirectory: 'checkIns',
    apiRoot: '/check_ins/v2',
  });
};
