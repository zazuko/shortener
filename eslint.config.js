import config from "@tpluscode/eslint-config/js";

export default [
  ...config,
  {
    files: ["eslint.config.js", "mocha-setup.js"],
    rules: {
      "import/no-extraneous-dependencies": "off",
      "n/no-unpublished-import": "off",
    },
  },
];
