import * as React from "react";
import { Redirect } from "react-router";

export function LogOut(props: unknown): JSX.Element {
    return <Redirect to="/app/account/log-in"/>
} 