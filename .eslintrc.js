module.exports = {
  $schema: "http://json.schemastore.org/eslintrc",
  env: {
    browser: true,
    es2021: true
  },
  // tells the rules to follow while parsing (here TS)
  plugins: ["@typescript-eslint"],
  // extends predefined rules from packages
  extends: ["next/core-web-vitals", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  // parser used for parsing code (here TS)
  parser: "@typescript-eslint/parser",
  rules: {
    // generic
    "no-useless-catch": 2,
    "comma-dangle": [2, "never"],
    quotes: [2, "double"],
    camelcase: 1,
    indent: 0,
    "import/prefer-default-export": 0,
    //react related
    "react/jsx-indent-props": 0,
    "react/jsx-indent": 0,
    "react/jsx-filename-extension": [2, { extensions: [".tsx"] }],
    "react/jsx-props-no-spreading": 0,
    "react/jsx-key": ["warn", { checkFragmentShorthand: false }],
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
    "react/function-component-definition": [1, { namedComponents: "arrow-function" }],
    // ts related
    "@typescript-eslint/no-shadow": 2,
    "@typescript-eslint/no-require-imports": 2,
    "@typescript-eslint/no-unnecessary-type-constraint": 2,
    "@typescript-eslint/no-duplicate-imports": 2,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/no-empty-function": 0
  }
};
