import { connect } from "@src/App/shared/modules/Store/Store";
import * as React from "react";
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