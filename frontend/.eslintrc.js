module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["prettier", "react"],
  rules: {
    "prettier/prettier": "error",
    "no-param-reassign": "off",
    "class-methods-use-this": "off",
    "camelcase": ["error", {"properties": "never", ignoreDestructuring: true, ignoreGlobals: true, allow: ["intro_text","graph_path", "question_set_path"]}],
    "no-shadow": "off",
    "no-await-in-loop": "off"
  },
};