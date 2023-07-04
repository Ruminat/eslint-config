module.exports = {
  extends: [
    "@gravity-ui/eslint-config/client",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["@jambit/typed-redux-saga"],
  parserOptions: {
    sourceType: "module",
    parser: "babel-eslint",
  },
  rules: {
    "import/order": "off",
  },
  overrides: [
    {
      files: [
        "./src/**/*.ts",
        "./src/**/*.tsx",
        "./src/**/*.js",
        "./src/**/*.jsx",
      ],
      excludedFiles: [
        "./**/*.spec.ts",
        "./**/*.test.ts",
        "./node_modules/**/*",
      ],
      plugins: ["@typescript-eslint", "file-progress", "prettier"],
      rules: {
        "@jambit/typed-redux-saga/use-typed-effects": "error",
        "@jambit/typed-redux-saga/delegate-effects": "error",
        "no-restricted-imports": [
          "error",
          {
            name: "lodash",
            message: "Use the 'lodash/functionName' instead.",
          },
        ],
        "prettier/prettier": "warn",
        "max-len": [
          "error",
          { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true },
        ],
        "comma-dangle": [
          "error",
          {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "always-multiline",
            exports: "always-multiline",
            functions: "ignore",
          },
        ],
      },
    },
  ],
};
