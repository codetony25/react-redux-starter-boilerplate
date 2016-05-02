// Dependencies
var stylelint = require('stylelint');

function lint(options) {
  return new Promise(function(resolve, reject) {
    stylelint.lint(options).then(function(data) {
      resolve(data);
    }).catch(function(e) {
      reject(e);
    });
  });
}

module.exports = lint;