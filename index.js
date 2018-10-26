const path = require("path");

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve("tslint-config-airbnb")), "./"),
    path.join(path.dirname(require.resolve("tslint-react")), "./")
  ],
  rules: {
    "max-line-length": [true, 125],
    "ordered-imports": [false],
    "object-literal-sort-keys": false,
    "import-name": false,
    "prefer-array-literal": false,
    "no-var-requires": false,
    "no-implicit-dependencies": false,
    "no-empty-interface": false,
    "no-submodule-imports": false,
    "variable-name": [
      true,
      "check-format",
      "allow-leading-underscore",
      "allow-pascal-case",
      "allow-snake-case",
      "ban-keywords"
    ],
    "jsx-no-multiline-js": false,
    "jsx-no-lambda": false,
    "jsx-alignment": true,
    "jsx-wrap-multiline": true,
    "jsx-boolean-value": true,
    "jsx-key": true,
    "jsx-self-close": true,
    "jsx-space-before-trailing-slash": true
  }
};
