import React from "react";
import SyntaxHighlighter from "./SyntaxHighlighter";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/github";

/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/code/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
export var PanelContent = function PanelContent(_ref) {
  var code = _ref.code,
    showLineNumbers = _ref.showLineNumbers,
    wrapLines = _ref.wrapLines;
  return /*#__PURE__*/React.createElement(SyntaxHighlighter, {
    language: "xml",
    copyable: true,
    padded: true,
    style: style,
    showLineNumbers: showLineNumbers,
    wrapLines: wrapLines
  }, code);
};