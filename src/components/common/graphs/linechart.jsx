import React from 'react';
import ChartJs from 'chart.js';
import moment from 'moment';

const emptyChartData = {
  labels: [],
  datasets: []
};

const chartOptions = {
  elements: {
    point: {
      backgroundColor: '#ffffff',
      radius: 2
    },
    line: {
      fill: false
    }
  },
  legend: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          display: false
        },
        ticks: {
          min: 0,
          max: 100,
          stepSize: 50,
          callback: (value, index, values) => value.toString() + "%"
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ]
  }
};

export default class LineChart extends React.Component {

  componentDidMount() {
    this.chart = this.createEmptyChart();
  }

  componentWillReceiveProps(nextProps) {
    let data = {
      labels: this.createLabels(nextProps),
      datasets: [
        {
          lineTension: 0.1,
          label: this.props.querySettings.period.title,
          data: this.createDataMapping(nextProps, nextProps.timeSeries.current),
          borderColor:'#2FCE84',
          pointBorderColor: '#ffffff',// Seems like borderColor overrides global pointBorderColor, hence using pointBorderColor here.

        },
        {
          lineTension: 0.1,
          label: this.props.querySettings.period.prevTitle,
          data: this.createDataMapping(nextProps, nextProps.timeSeries.previous),
          borderColor:'#5473FB',
          pointBorderColor: '#ffffff',
        }
      ]
    };
    // Clear old chart.
    this.chart.destroy();
    this.chart = this.createChart(data);
    document.getElementById('chart-legend').innerHTML = this.chart.generateLegend();

  }

  render() {
    return (
      <div>
        <canvas className="line-chart"></canvas>
        <div id="chart-legend"></div>
      </div>
    )
  }

  createLabels(props) {
    switch (props.dateType) {
      case 'day': {
        // Hour difference to fill the gaps
        let startDate = moment(props.timeSeries.startDate) || moment({hour: 23, minute: 59, seconds: 59}).format('x') ;
        let endDate = moment(props.timeSeries.endDate) || moment({hour: 0, minute: 0, seconds: 1}).format('x') ;

        let difference = moment(endDate).diff(startDate, 'hours');
        let labels = [];
        for (let i = 0 ; i <= difference ; i++ ) {
			 var strDate = props.timeSeries.startDate ; 
			 strDate = strDate.replace(/-/g,'/');  // replaces all occurances of "-" with "/"
          let myDate = new Date( strDate );
          myDate.setHours(myDate.getHours() + i);
          labels.push(moment(new Date(myDate)).format("ddd HH:mm"));
        }
        return labels;
      }
      case 'week': {
        return props.timeSeries.previous.map( time => {
          var localtime = moment(time.time);
          return localtime.format('dddd').toString()
        })
      }
      case 'month': {
        return [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
        ]
      }
      case 'custom': {
        return props.timeSeries.previous.map(entry => {
			 var strDate = entry.time ; 
			 strDate = strDate.replace(/-/g,'/');  // replaces all occurances of "-" with "/"
          var localtime = moment.utc(strDate).toDate();
          return moment(localtime).format('MM.DD').toString()
        })
      }
    }

  }

  createDataMapping(props, timeseries) {
    if (timeseries.length == 0) {
      return []
    }
    switch (props.dateType) {
      case 'day': {
        return timeseries.map( entry => {
          return Math.floor(parseFloat(entry.value) * 100).toFixed(2)
        })
      }
      case 'week': {
        var datamap = [];
        var currentDay = moment().isoWeekday();
        var iterator = 0;
        while (iterator < currentDay) {
          datamap.push(0);
          iterator++;
        }
        timeseries.forEach( entry => {
          var day = moment(entry.time).isoWeekday();
          datamap[day] = Math.floor(parseFloat(entry.value) * 100).toFixed(2)
        });
        datamap.shift();
        return datamap;

      }
      case 'month': {
        var datamap = [];
        var currentMonth = moment().month();
        var iterator = 0;
        while (iterator <= currentMonth) {
          datamap.push(0);
          iterator++;
        }
        timeseries.forEach( entry => {
          var month = moment.utc(entry.time).month();
          datamap[month] = Math.floor(parseFloat(entry.value) * 100).toFixed(2)
        });
        return datamap;
      }
      case 'custom': {
        return timeseries.map( entry => {
          return Math.floor(parseFloat(entry.value) * 100).toFixed(2)
        })
      }
    }
  }

  createChart(data) {
    return Chart.Line(document.getElementsByClassName("line-chart"), {data, options: chartOptions});
  }

  createEmptyChart() {
    return Chart.Line(document.getElementsByClassName("line-chart"), {data: emptyChartData, options: chartOptions});
  }
}
