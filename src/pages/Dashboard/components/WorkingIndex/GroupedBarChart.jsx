import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';

const mock = [
  // {
  //   name: '维修情况',
  //   已维修: 40,
  //   正在维修: 71,
  //   待处理: 40,
  // },
  // {
  //   name: '平均情况',
  //   未执行: 36,
  //   实际执行率: 60,
  //   执行终结率: 52,
  // },
];

const ds = new DataSet();
const dv = ds.createView().source(mock);
// dv.transform({
//   type: 'fold',
//   fields: ['未执行', '实际执行率', '执行终结率'],
//   key: '维修情况',
//   value: '完成率',
// });

export default class GroupedBarChart extends Component {
  formatAxis = (text) => {
    return `${text}%`;
  };

  onTooltipChange = (event) => {
    event.items.forEach((item) => {
      item.value += '%';
    });
  };

  render() {
    return (
      <Chart
        width={40}
        height={180}
        // data={dv}
        padding={[40, 8, 40, 40]}
        onTooltipChange={this.onTooltipChange}
      >
        <Axis
          name="维修情况"
          label={{
            offset: 4,
            textStyle: {
              textAlign: 'center',
              fill: '#666',
              fontSize: '12',
              fontWeight: 'normal',
              rotate: 0,
              textBaseline: 'top',
            },
            autoRotate: false,
          }}
        />
        {/* <Axis
          name="完成率"
          label={{
            formatter: this.formatAxis,
          }}
        /> */}
        {/* <Legend position="top-center" />
        <Tooltip crosshairs={{ type: 'y' }} />
        <Geom
          type="interval"
          position="维修情况*完成率"
          color={['name', ['#5e83fb', '#58ca9a']]}
          adjust={[
            {
              type: 'dodge',
              marginRatio: 1 / 32,
            },
          ]}
        /> */}
      </Chart>
    );
  }
}
