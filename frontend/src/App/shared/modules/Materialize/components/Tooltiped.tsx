import * as React from "react";
import * as M from "materialize-css";


interface TooltipedProps {
  message?: string;
  triggerOn?: "focus"
  margin?: number
}

export class Tooltiped extends React.Component<TooltipedProps> {
  children: React.ReactNode;
  tooltipedRef: React.RefObject<HTMLElement>;

  settings: {
    position: "right" | "top" | "bottom" | "left",
    margin?: number
  };

  triggerOn?: "focus";

  constructor(props: React.PropsWithChildren<TooltipedProps>) {
    super(props);
    this.settings = {
      position: "right",
      margin: props.margin || 0
    }
    this.children = props.children || <></>;
    const children: any = this.children; // TODO: workaround for TS typechecking -,-. fix it if you dare 3:)
    
    if (!(children.ref !== undefined && children.props)) {
      throw Error("Tooltiped can wrap only one element.")
    }

    this.tooltipedRef = children.ref || React.createRef();
    this.children = React.cloneElement(children, {...children.props, ref: this.tooltipedRef, "data-tooltip": props.message || ""});
    this.triggerOn = props.triggerOn
  }
  
  componentDidMount(): void {
    const elem = this.tooltipedRef.current;
    if (!elem) {
      return
    }
    const tooltip = new M.Tooltip(elem, this.settings);
    if (this.triggerOn == "focus") {
      //@ts-ignore this shit is not typed but works
      elem.removeEventListener("mouseenter",tooltip._handleMouseEnterBound);
      //@ts-ignore this shit is not typed but works
      elem.removeEventListener("mouseleave", tooltip._handleMouseLeaveBound);
      elem.addEventListener("focusin", () => tooltip.open());
      elem.addEventListener("focusout", () => tooltip.close());
    }
  }

  render(): React.ReactNode {
    return this.children;
  }
}