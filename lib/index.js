const docgen = require("react-docgen");
const { getOptions } = require("loader-utils");

module.exports = function (source) {
  const options = getOptions(this) || {};
  options.filename = this.resourcePath;
  const data = docgen.parse(source, null, null, options);
  const json = JSON.stringify(data);
  return `export default ${json};`;
};
