"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _SyntaxHighlighter = _interopRequireDefault(require("./SyntaxHighlighter"));
var _github = _interopRequireDefault(require("react-syntax-highlighter/dist/esm/styles/hljs/github"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/code/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
var PanelContent = function PanelContent(_ref) {
  var code = _ref.code,
    showLineNumbers = _ref.showLineNumbers,
    wrapLines = _ref.wrapLines;
  return /*#__PURE__*/_react["default"].createElement(_SyntaxHighlighter["default"], {
    language: "xml",
    copyable: true,
    padded: true,
    style: _github["default"],
    showLineNumbers: showLineNumbers,
    wrapLines: wrapLines
  }, code);
};
exports.PanelContent = PanelContent;