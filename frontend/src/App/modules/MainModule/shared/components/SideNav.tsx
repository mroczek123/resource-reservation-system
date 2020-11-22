import SlideOut from "@src/App/shared/modules/Materialize/components/SlideOut";
import { connect } from "@src/App/shared/modules/Store/Store";
import StateProps from "@src/App/shared/modules/Store/types/StateProps";
import StyleProps from "@src/App/shared/types/StyleProps";
import * as React from "react";

function SideNav(props: StyleProps & StateProps): JSX.Element {
  const menuItems = [
    {
      label: "Menu",
      icon: "restaurant_menu",
      url: "",
    },
    {
      label: "Employees",
      icon: "group",
      url: "",
    },
    {
      label: "Analytics",
      icon: "show_chart",
      url: "",
    },
    {
      label: "Bills",
      icon: "account_balance_wallet",
      url: "",
    }, 
    {
      label: "Settings",
      icon: "settings",
      url: ""
    }
  ];
  return (
    <SlideOut
      className="sidenav-fixed"
      style={{ zIndex: 1, ...props.style, position: "unset", height: "unset" }}
    >
      <li className={`${props.state.theme}`}>
        <a className="waves-effect">
          <i className="material-icons">account_circle</i>
          Maciej Kulesza
        </a>
      </li>
      {menuItems.map((menuItem) => (
        <li>
          <a className="waves-effect">
            <i className="material-icons">{menuItem.icon}</i>
            {menuItem.label}
          </a>
        </li>
      ))}
    </SlideOut>
  );
}

export default connect(SideNav);
