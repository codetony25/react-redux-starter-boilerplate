var postcss = require('postcss');

module.exports = postcss.plugin("postcss-vmin", function (opts) {
    opts = opts || {};

    var REGEX = /(\d*\.?\d+)vmin/ig;

    return function (css) {

      // for each rules, each decl
      css.walkRules(function (rule) {
        rule.walkDecls(function (decl, i) {

          if (decl.value.indexOf('vmin') === -1) { return; }

          if (REGEX.exec(decl.value) !== null)  {
            var value = decl.value.replace(REGEX, function (_, number) {
              return number + 'vm';
            });
            rule.insertBefore(i, decl.clone({ value: value }));
          }

        });
      });

      return css;

    };
});
