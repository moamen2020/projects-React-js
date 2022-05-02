import React from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  // console.log(props.dataPoints);
  const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  // console.log(dataPointValue);
  const totalMaximum = Math.max(...dataPointValue);

  // console.log(props.dataPoints);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
