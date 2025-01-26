import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] }, // Ignore the dist directory
  {
    files: ["**/*.{js,jsx}"], // Apply to all JS and JSX files
    languageOptions: {
      ecmaVersion: 2022, // Use the latest ECMAScript version
      sourceType: "module", // Use ES modules
      globals: {
        ...globals.browser, // Browser globals (e.g., window, document)
        ...globals.node, // Node.js globals (e.g., process, require)
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX support
        },
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    plugins: {
      react, // React plugin
      "react-hooks": reactHooks, // React Hooks plugin
      "react-refresh": reactRefresh, // React Refresh plugin
    },
    rules: {
      ...js.configs.recommended.rules, // ESLint recommended rules
      ...react.configs.recommended.rules, // React recommended rules
      ...react.configs["jsx-runtime"].rules, // JSX runtime rules
      ...reactHooks.configs.recommended.rules, // React Hooks recommended rules
      "react/jsx-no-target-blank": "off", // Disable this rule
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }, // Allow constant exports
      ],
      "react/prop-types": "off", // Disable prop-types rule (if not using prop-types)
      "react/jsx-uses-react": "error", // Ensure React is in scope
      "react/jsx-uses-vars": "error", // Ensure JSX variables are used
    },
  },
];
