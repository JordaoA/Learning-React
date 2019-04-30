import React, { Component } from 'react';
import Chart from './Chart';

class Estatistica extends Component {

    constructor() {
      super();
      this.state = {
        chartData: {}
      }
    }
  
    componentWillMount() {
      this.getChartData();
    }
  
    getChartData() {
      this.setState({
        chartData: {
          labels: this.props.labels,
          datasets: [
              {
                  label: this.props.label,
                  data: this.props.values,
                  backgroundColor: this.props.colors
              }
          ]
      }
      });
    }
  
    render() {
      return(
        <div className="App">
          <Chart chartData={this.state.chartData} /*titleGraph="Estatística de avaliação de aula"*/ legendPosition="top"></Chart>
        </div>
      );
    }
  }

  export default Estatistica;