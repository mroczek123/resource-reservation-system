import * as React from "react";
import { Doughnut } from "react-chartjs-2";

function Dashboard(): JSX.Element {
  const data = {
    labels: ["free", "taken"],
    datasets: [
      {
        label: "Tables",
        data: [12, 9],
        backgroundColor: ["#673ab7", "lightgrey"]
      },
    ],
  };
  return (
    <div style={{ height: "100vh" }}>
      Dashboard
      <div className="card" style={{width: "300px", height:"300px", padding: "20px"}}>
        <Doughnut data={data} width={300} height={300} options={{ maintainAspectRatio: false }}  />
      </div>
    </div>
  );
}

export default Dashboard;
