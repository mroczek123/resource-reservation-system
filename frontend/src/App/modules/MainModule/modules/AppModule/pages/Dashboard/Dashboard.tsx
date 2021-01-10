import { connect } from "@src/App/shared/modules/Store/Store";
import { StateProps } from "@src/App/shared/modules/Store/types/StateProps";
import * as React from "react";
import { Doughnut } from "react-chartjs-2";

function _Dashboard(props: StateProps): JSX.Element {
  const data = {
    labels: ["free", "taken"],
    datasets: [
      {
        label: "Tables",
        data: [12, 9],
        backgroundColor: [props.state.settings.theme.colors.main.value, "lightgrey"]
      },
    ],
  };
  return (
    <div style={{height: "100vh"}}>
      Dashboard
      <div className="card" style={{width: "300px", height:"300px", padding: "20px"}}>
        <Doughnut data={data} width={300} height={300} options={{ maintainAspectRatio: false }}  />
      </div>
    </div>
  );
}

export const Dashboard = connect(_Dashboard);
