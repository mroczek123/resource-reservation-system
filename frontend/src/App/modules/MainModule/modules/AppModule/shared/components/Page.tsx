import { ChildrenProps } from "@src/App/shared/types/ChildrenProps";
import * as React from "react";

export type PageProps = ChildrenProps & {
  title?: string;
  buttons?: JSX.Element;
};

export function Page(props: PageProps): JSX.Element {
  return (
    <div style={{ height: "100vh" }}>
      <div
        className="z-depth-1 valign-wrapper"
        style={{ padding: "10px", justifyContent: "space-between" }}
      >
        <h1 style={{ display: "inline-block", margin: 0 }}>{props.title}</h1>
        <span style={{marginRight: "40px"}}>{props.buttons}</span>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
