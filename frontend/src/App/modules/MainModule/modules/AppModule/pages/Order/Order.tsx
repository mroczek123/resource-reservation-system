import * as React from "react";
import { connect } from "@src/App/shared/modules/Store/Store";
import { Page } from "../../shared/components/Page";
import { StateProps } from "@src/App/shared/modules/Store/types/StateProps";
import { translate } from "@src/App/shared/modules/Translation/translate";
import { ProductsList } from "./components/ProductsList";
import { OrderSideBar } from "./components/OrderSideBar";

function _Order(props: StateProps) {
  return (
    <Page title={translate("Order")}>
        <ProductsList/>
        <OrderSideBar/>
    </Page>
  )
}

export const Order = connect(_Order);