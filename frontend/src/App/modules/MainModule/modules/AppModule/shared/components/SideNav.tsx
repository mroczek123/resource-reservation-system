import * as React from "react";
import { StyleProps } from "@src/App/shared/types/StyleProps";
import { NavLink, useRouteMatch } from "react-router-dom";
import { translate } from "@src/App/shared/modules/Translation/translate";
import { StateProps } from "@src/App/shared/modules/Store/types/StateProps";
import { connect, Store } from "@src/App/shared/modules/Store/Store";
import { UserRole } from "../../../AccountModule/services/UserService/types/User";

function _SideNav(props: StyleProps & StateProps): JSX.Element {
  const match = useRouteMatch();
  const user = props.state.user;
  const allMenuItems = [
    {
      label: user?.fullName,
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
    {
      label: translate("Reservations"),
      icon: "schedule",
      url: `${match.url}/reservations`,
    },
  ];
  let menuItems: { label: string; icon: string; url: string }[] = [];
  switch (user?.role) {
    case UserRole.CLIENT:
      menuItems = [
        {
          label: user?.fullName,
          icon: "account_circle",
          url: `${match.url}/dashboard`,
        },
        {
          label: translate("Reservations"),
          icon: "schedule",
          url: `${match.url}/reservations`,
        },
        {
          label: translate("Order"),
          icon: "restaurant_menu",
          url: `${match.url}/order`,
        },
        {
          label: translate("Logout"),
          icon: "power_settings_new",
          url: "account/log-out",
        },
      ];
      break;
    case UserRole.RESTAURATOR:
      menuItems = [
        {
          label: user?.fullName,
          icon: "account_circle",
          url: `${match.url}/dashboard`,
        },
        {
          label: translate("Menu"),
          icon: "restaurant_menu",
          url: `${match.url}/products`,
        },
        {
          label: translate("Employees"),
          icon: "group",
          url: `${match.url}/employees`,
        },
        {
          label: translate("Logout"),
          icon: "power_settings_new",
          url: "account/log-out",
        },
      ];
      break;
    case UserRole.WAITER:
      menuItems = [
        {
          label: user?.fullName,
          icon: "account_circle",
          url: `${match.url}/dashboard`,
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
      break;
  }
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
