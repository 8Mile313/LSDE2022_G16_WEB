import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['Non-pessimistic mood', 'Pessimistic mood']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'value'
    }
  ],
  yAxis: [
    {
      type: 'category',
      axisTick: {
        show: false
      },
      data: [
        'February 2020',
        'March/April 2020',
        'May/June 2020',
        'July 2020',
        'August 2020',
        'September 2020',
        'October 2020',
        'November/December 2020',
        'January 2021',
        'February/March 2021',
        'April 2021',
        'May 2021',
        'June 2021',
        'July/August 2021',
        'September 2021',
        'October 2021',
        'November/December 2021',
        'January 2022',
        'May 2022',
        'June/July 2022',
        'August 2022',
        'September/October 2022'
      ]
    }
  ],
  series: [
    {
      name: 'Pessimistic mood',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [
        50, 32, 8, 20, 6, 36, 28, 20, 24, 12, 12, 16, 16, 24, 44, 12, 28, 16,
        43, 23, 12, 40
      ]
    },

    {
      name: 'Non-pessimistic mood',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'left'
      },
      emphasis: {
        focus: 'series'
      },
      data: [
        -50, -64, -92, -80, -94, -63, -72, -80, -76, -88, -88, -84, -84, -76,
        -56, -88, -72, -84, -56, -76, -88, -60
      ]
    }
  ]
};