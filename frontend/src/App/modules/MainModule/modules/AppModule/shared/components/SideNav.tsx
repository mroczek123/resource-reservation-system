import * as React from "react";
import { StyleProps } from "@src/App/shared/types/StyleProps";
import { NavLink, useRouteMatch } from "react-router-dom";

export function SideNav(props: StyleProps): JSX.Element {
  const match = useRouteMatch();
  const menuItems = [
    {
      label: "Maciej Kulesza",
      icon: "account_circle",
      url: `${match.url}/dashboard`,
    },
    {
      label: "Menu",
      icon: "restaurant_menu",
      url: `${match.url}/products`,
    },
    {
      label: "Employees",
      icon: "group",
      url: `${match.url}/employees`,
    },
    {
      label: "Analytics",
      icon: "show_chart",
      url: `${match.url}/analytics`,
    },
    {
      label: "Bills",
      icon: "account_balance_wallet",
      url: `${match.url}/bills`,
    },
    {
      label: "Settings",
      icon: "settings",
      url: `${match.url}/settings`,
    },
    {
      label: "Logout",
      icon: "power_settings_new",
      url: "account/log-out",
    },
  ];
  return (
    <ul
      className="sidenav sidenav-fixed"
      style={{ zIndex: 1, position: "unset", height: "unset", width: "unset", ...props.style }}
    >
      <li className="center-align">
        <img className="responsive-img" style={{ height: "150px" }} src="static/img/logo.png" />
      </li>
      {menuItems.map((menuItem) => (
        <li>
          <NavLink to={menuItem.url} className="waves-effect">
            <i className="material-icons">{menuItem.icon}</i>
            {menuItem.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
