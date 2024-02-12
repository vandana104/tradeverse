import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  PieSeries,
} from "@syncfusion/ej2-react-charts";

const Donut = () => {
  const data1 = [
    { x: "United States", y: 45, text: "USA", fill: "#00226C" },
    { x: "Australia", y: 53, text: "AUS: 14%", fill: "#0450C2" },
    { x: "China", y: 56, text: "CHN", fill: "#0073DC" },
    { x: "India", y: 61, text: "IND", fill: "#0D98FF" },
    { x: "Japan", y: 40, text: "JPN", fill: "#9CD9FF" },
    { x: "United Kingdom", y: 20, text: "UK", fill: "#0450C2" },
  ];

  return (
    <AccumulationChartComponent id="charts">
      <Inject services={[PieSeries]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={data1}
          xName="x"
          yName="y"
          type="Pie"
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Donut;
