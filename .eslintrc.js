module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-module-boundary-types": ["error"]
      }
    }
  ]
};
