import * as React from "react";
import { StyleProps } from "@src/App/shared/types/StyleProps";
import { NavLink, useRouteMatch } from "react-router-dom";
import { translate } from "@src/App/shared/modules/Translation/translate";
import { StateProps } from "@src/App/shared/modules/Store/types/StateProps";
import { connect } from "@src/App/shared/modules/Store/Store";

function _SideNav(props: StyleProps & StateProps): JSX.Element {
  const match = useRouteMatch();
  const menuItems = [
    {
      label: props.state.user?.fullName,
      icon: "account_circle",
      url: `${match.url}/dashboard`,
    },
    {
      label: translate("Menu"),
      icon: "restaurant_menu",
      url: `${match.url}/products`,
    },
    {
      label: translate("Order"),
      icon: "restaurant_menu",
      url: `${match.url}/order`,
    },
    {
      label: translate("Employees"),
      icon: "group",
      url: `${match.url}/employees`,
    },
    {
      label: translate("Bills"),
      icon: "account_balance_wallet",
      url: `${match.url}/bills`,
    },
    {
      label: translate("Logout"),
      icon: "power_settings_new",
      url: "account/log-out",
    },
  ];
  return (
    <ul
      className="sidenav sidenav-fixed"
      style={{ zIndex: 1, position: "unset", height: "unset", width: "unset", ...props.style }}
    >
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

export const SideNav = connect(_SideNav);