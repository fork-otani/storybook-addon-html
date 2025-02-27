import { makeDecorator, useChannel } from "@storybook/addons";
import { EVENTS } from "./constants";
export var withHTML = makeDecorator({
  name: "withHTML",
  parameterName: "html",
  skipIfNoParametersOrOptions: false,
  wrapper: function wrapper(storyFn, context, _ref) {
    var _ref$parameters = _ref.parameters,
      parameters = _ref$parameters === void 0 ? {} : _ref$parameters;
    var emit = useChannel({});
    setTimeout(function () {
      var rootSelector = parameters.root || "#storybook-root, #root";
      var root = document.querySelector(rootSelector);
      var code = root ? root.innerHTML : "".concat(rootSelector, " not found.");
      var removeEmptyComments = parameters.removeEmptyComments,
        removeComments = parameters.removeComments,
        transform = parameters.transform;
      if (removeEmptyComments) {
        code = code.replace(/<!--\s*-->/g, "");
      }
      if (removeComments === true) {
        code = code.replace(/<!--[\S\s]*?-->/g, "");
      } else if (removeComments instanceof RegExp) {
        code = code.replace(/<!--([\S\s]*?)-->/g, function (match, p1) {
          return removeComments.test(p1) ? "" : match;
        });
      }
      if (typeof transform === "function") {
        try {
          code = transform(code);
        } catch (e) {
          console.error(e);
        }
      }
      emit(EVENTS.CODE_UPDATE, {
        code: code,
        options: parameters
      });
    }, 0);
    return storyFn(context);
  }
});
if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}