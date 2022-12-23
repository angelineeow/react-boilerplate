import React from "react";
import "./HelloMessage.css";
class HelloMessage extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "banner"
    }, "Hello ", this.props.name, "!!");
  }
}
export default HelloMessage;