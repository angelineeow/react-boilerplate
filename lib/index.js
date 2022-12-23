"use strict";

var _HelloMassage = _interopRequireDefault(require("./components/HelloMassage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// module system: 

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(_HelloMassage["default"], {
  name: "Angeline"
}));