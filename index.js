const package = require("./package.json");

const AsyncAwait = require("./src/async-await");
const AsyncSuffix = require("./src/async-suffix");

module.exports = {
  name: package.name,
  // @ts-ignore
  version: package.version,
  rules: {
    "async-await": AsyncAwait,
    "async-suffix": AsyncSuffix,
  },
  configs: {
    recommended: {
      plugins: ["@orion.ui/eslint-plugin-orion"],

      overrides: [
        {
          files: ["*.vue"],
          rules: {
            "no-undef": 0, // Volar bug ?
          },
        },
      ],

      rules: {
        "@orion.ui/orion/async-suffix": "error",
        "@orion.ui/orion/async-await": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "array-element-newline": ["error", "consistent"],
        "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
        "arrow-spacing": ["error", { before: true, after: true }],
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": ["error", { before: false, after: true }],
        "computed-property-spacing": ["error", "never"],
        "eol-last": ["error", "always"],
        eqeqeq: ["error", "smart"],
        "func-call-spacing": ["error", "never"],
        indent: ["error", "tab"],
        "key-spacing": ["error", { mode: "strict" }],
        "keyword-spacing": ["error", { before: true, after: true }],
        "lines-between-class-members": [
          "error",
          "always",
          { exceptAfterSingleLine: true },
        ],
        "max-len": ["error", { code: 160 }],
        "no-console": "warn",
        "no-debugger": process.env.NODE_ENV !== "development" ? "error" : "warn",
        "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
        "no-multi-spaces": "error",
        "no-tabs": ["error", { allowIndentationTabs: true }],
        "no-trailing-spaces": ["error"],
        "no-unused-vars": "off",
        "no-whitespace-before-property": "error",
        "object-curly-newline": [
          "error",
          {
            ImportDeclaration: { multiline: false },
            ObjectExpression: {
              multiline: true,
              minProperties: 3,
            },
          },
        ],
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": [
          "error",
          { allowAllPropertiesOnSameLine: false },
        ],
        quotes: ["error", "single", { allowTemplateLiterals: true }],
        "semi-spacing": ["error", { before: false, after: true }],
        semi: ["error", "always"],
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "always"],
        "space-in-parens": ["error", "never"],
        "vue/comma-dangle": ["error", "always-multiline"],
        "vue/comma-spacing": ["error", { before: false, after: true }],
        "vue/object-curly-spacing": ["error", "always"],
        "vue/space-infix-ops":
          process.env.NODE_ENV !== "development"
            ? "off"
            : ["error", { int32Hint: false }],
        "vue/no-v-html": "off",
        "vue/html-indent": [
          "error",
          "tab",
          {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
          },
        ],
        "vue/html-closing-bracket-newline": [
          "error",
          {
            singleline: "never",
            multiline: "never",
          },
        ],
        "vue/singleline-html-element-content-newline": [
          "error",
          {
            ignoreWhenNoAttributes: true,
            ignoreWhenEmpty: true,
            ignores: ["pre", "textarea", "div"],
          },
        ],
        "vue/html-closing-bracket-spacing": [
          "error",
          {
            startTag: "never",
            endTag: "never",
            selfClosingTag: "never",
          },
        ],
      },
    },
    
    scriptonly: {
      plugins: ["@orion.ui/eslint-plugin-orion"],

      rules: {
        "@orion.ui/orion/async-suffix": "error",
        "@orion.ui/orion/async-await": "off",
        "array-element-newline": ["error", "consistent"],
        "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
        "arrow-spacing": ["error", { before: true, after: true }],
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": ["error", { before: false, after: true }],
        "computed-property-spacing": ["error", "never"],
        "eol-last": ["error", "always"],
        eqeqeq: ["error", "smart"],
        "func-call-spacing": ["error", "never"],
        indent: ["error", "tab"],
        "key-spacing": ["error", { mode: "strict" }],
        "keyword-spacing": ["error", { before: true, after: true }],
        "lines-between-class-members": [
          "error",
          "always",
          { exceptAfterSingleLine: true },
        ],
        "max-len": ["error", { code: 160 }],
        "no-console": "warn",
        "no-debugger": process.env.NODE_ENV !== "development" ? "error" : "warn",
        "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
        "no-multi-spaces": "error",
        "no-tabs": ["error", { allowIndentationTabs: true }],
        "no-trailing-spaces": ["error"],
        "no-unused-vars": "off",
        "no-whitespace-before-property": "error",
        "object-curly-newline": [
          "error",
          {
            ImportDeclaration: { multiline: false },
            ObjectExpression: {
              multiline: true,
              minProperties: 3,
            },
          },
        ],
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": [
          "error",
          { allowAllPropertiesOnSameLine: false },
        ],
        quotes: ["error", "single", { allowTemplateLiterals: true }],
        "semi-spacing": ["error", { before: false, after: true }],
        semi: ["error", "always"],
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "always"],
        "space-in-parens": ["error", "never"],
      },
    },
  },
};
