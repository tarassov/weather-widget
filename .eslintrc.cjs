/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off", //, ["error"],
    "no-case-declarations": "off",
  },
  overrides: [
    {
      files: ["src/**/*.vue"],
      rules: {
        "constructor-super": "off",
        "getter-return": "off",
        "no-const-assign": "off",
        "no-dupe-args": "off",
        "no-dupe-class-members": "off",
        "no-dupe-keys": "off",
        "no-func-assign": "off",
        "no-import-assign": "off",
        "no-new-symbol": "off",
        "no-obj-calls": "off",
        "no-redeclare": "off",
        "no-setter-return": "off",
        "no-this-before-super": "off",
        "no-undef": "off",
        "no-unreachable": "off",
        "no-unsafe-negation": "off",
        "no-var": "error",
        "prefer-const": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "valid-typeof": "off", // ts(2367)
      },
    },
  ],
};
