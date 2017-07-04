const request = require('request-promise');
const fs = require('fs');
const path = require('path');
const camelCase = require('lodash/camelCase');
const snakeCase = require('lodash/snakeCase');
const startCase = require('lodash/startCase');

const indexTemplate = `
import PCORequest from '../PCORequest';

import me from '../me';
[imports]

export default class Services extends PCORequest {
  constructor() {
    super();
    this.uri = '[apiRoot]';
  }

  me = me;
[attrs]
}
`;

const classTemplate = `
export default function [name]([idParam]) {
  this.uri = \`\${this.uri}/[endPoint]\`;
  [singleRoute]
  return this;
}
`;

module.exports = function generateFromDocs(args) {
  request({
    uri: args.docsUri,
  }).then((res) => {
    const matches = res.match(/\n(## )[a-zA-Z]+/g);
    const imports = [];
    const attrs = [];
    matches.forEach((match) => {
      const endPoint = match.replace('## ', '');
      const camelCaseEndPoint = camelCase(endPoint);
      const snakeCaseEndPoint = snakeCase(endPoint);
      const startCaseEndPoint = startCase(endPoint);
      const singleMatch = res.match(`\n### Get a single ${startCaseEndPoint}\n`);
      const singleMatch2 = res.match(`\n### Get a single ${startCaseEndPoint.substring(0, startCaseEndPoint.length - 1)}\n`);

      let endPointClass = classTemplate.replace('[name]', camelCaseEndPoint);
      endPointClass = endPointClass.replace('[endPoint]', snakeCaseEndPoint);

      if (singleMatch || singleMatch2) {
        endPointClass = endPointClass.replace('[idParam]', 'id');
        endPointClass = endPointClass.replace('[singleRoute]', 'this.uri = id ? `${this.uri}/${id}` : this.uri;');
      } else {
        endPointClass = endPointClass.replace('[idParam]', '');
        endPointClass = endPointClass.replace('[singleRoute]', '');
      }

      imports.push(`import ${camelCaseEndPoint} from './${camelCaseEndPoint}';`);
      attrs.push(`  ${camelCaseEndPoint} = ${camelCaseEndPoint};`);

      const endPointClassPath = path.join(__dirname, '..', 'src', args.srcDirectory, `${camelCaseEndPoint}.js`);
      fs.openSync(endPointClassPath, 'w');
      fs.writeFileSync(endPointClassPath, endPointClass);
    });

    let indexClass = indexTemplate.replace('[imports]', imports.join('\n'));
    indexClass = indexClass.replace('[attrs]', attrs.join('\n'));
    indexClass = indexClass.replace('[apiRoot]', args.apiRoot);

    const indexClassPath = path.join(__dirname, '..', 'src', args.srcDirectory, 'index.js');
    fs.openSync(indexClassPath, 'w');
    fs.writeFileSync(indexClassPath, indexClass);
  });
};