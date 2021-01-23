import * as React from "react";
import { Page } from "../../shared/components/Page";
import { translate } from "@src/App/shared/modules/Translation/translate";
import { ProductsList } from "./components/ProductsList";
import { OrderSideBar } from "./components/OrderSideBar";

export class Order extends React.Component {
  render(): JSX.Element {
    return (
    <Page title={translate("Order")}>
      <div className="row" style={{minHeight: "100vh"}}>
        <div className="col s8">
          <ProductsList />
        </div>
        <div className="col s4 z-depth-1" style={{minHeight: "100vh"}}>
          <OrderSideBar />
        </div>
      </div>
    </Page>
  );
  }
}
