import React from 'react';
import { AxisModel, BubbleSeries, ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';

const Charts = () => {
  const primaryXAxis = {};

  const data1 = [
    { x: 1, y: 45, text: 'USA', fill: '#00226C', size: 1.347 },
    { x: 2, y: 20, text: 'AUS', fill: '#0450C2', size: 1 },
    { x: 3, y: 56, text: 'CHN', fill: '#0073DC', size: 0.01 },
    { x: 4, y: 30, text: 'IND', fill: '#0D98FF', size: 0.7 },
    { x: 5, y: 13, text: 'JPN', fill: '#9CD9FF', size: 0.333 },
    { x: 6, y: 45, text: 'UK', fill: '#0450C2', size: 1 }
  ];

  return (
    <ChartComponent id='charts' primaryXAxis={primaryXAxis}>
      <Inject services={[BubbleSeries]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data1} xName='x' yName='y' type='Bubble' />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Charts;
