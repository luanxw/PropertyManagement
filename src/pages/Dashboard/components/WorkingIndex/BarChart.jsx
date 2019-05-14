import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';
import DataBinder from '@icedesign/data-binder';

const cols = {
  number: {
    tickInterval: 1,
  },
};
@DataBinder({
  AccountTable: {
    url: 'http://localhost:8000/work/workcount',
    method: 'get',
    data: {
      
    },
    defaultBindingData: {
      data: {
        data: []
      },
      
    },
  },

})
export default class BarChart extends Component {

  
  componentDidMount() {
    // 第一次渲染，初始化第一页的数据
    const {AccountTable} = this.props.bindingData;
    this.props.updateBindingData('AccountTable');
  }
  

  render() {
    const { AccountTable } = this.props.bindingData;
    return (
      <div style={styles.container}>
        <h4 style={styles.average}>
       
        </h4>
        <Chart
          width={420}
          height={210}
          data={AccountTable.data}
          scale={cols}
          padding={[40, 10, 40, 60]}
        >
          <Axis
            name="index"
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
          <Axis
            name="number"
            label={{
              formatter: this.formatAxis,
            }}
          />
          <Tooltip
            crosshairs={{
              type: 'y',
            }}
          />
          <Geom
            type="interval"
            color="#5e83fb"
            position="index*number"
            shape={['index', ['circle', 'rect']]}
            tooltip={['index*number', this.formatTooltip]}
          />
        </Chart>
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'relative',
  },
  average: {
    position: 'absolute',
    top: '-10px',
    textAlign: 'center',
    width: '100%',
    fontSize: '12px',
    textIndent: '20px',
    color: '#999',
  },
  number: {
    color: '#5e83fb',
  },
};
