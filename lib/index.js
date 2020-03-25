const docgen = require("react-docgen");
const { getOptions } = require("loader-utils");

module.exports = function (source) {
  const options = getOptions(this) || {};
  const data = docgen.parse(source, null, null, {
    filename: this.resourcePath,
    ...options,
  });
  const json = JSON.stringify(data);
  return `export default ${json};`;
};
