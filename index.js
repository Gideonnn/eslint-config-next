module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["prettier"],
  plugins: ["react-hooks", "prettier", "simple-import-sort", "import"],
  env: {
    browser: true,
  },
  rules: {
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
