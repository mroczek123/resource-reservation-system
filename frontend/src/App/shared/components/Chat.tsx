import * as React from "react";
import { connect } from "../modules/Store/Store";
import StateProps from "../modules/Store/types/StateProps";
import StyleProps from "../types/StyleProps";

function Chat(props: StateProps & StyleProps) {
  return (
    <a className={`btn-floating btn-large pulse ${props.state.theme}`} style={props.style}>
      <i className="material-icons">chat_bubble_outline</i>
    </a>
  )

}

export default connect(Chat);