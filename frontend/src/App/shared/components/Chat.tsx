import * as React from "react";
import StyleProps from "../types/StyleProps";

function Chat(props: StyleProps): JSX.Element {
  return (
    <a className={`btn-floating btn-large pulse`} style={props.style}>
      <i className="material-icons">chat_bubble_outline</i>
    </a>
  )

}

export default Chat;