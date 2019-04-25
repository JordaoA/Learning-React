import React, { Component } from 'react'; 
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }


    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        titleGraph: 'Estatística de avaliação de aula'
    }


    render() {
        return(
            <div className="chart">
                
                <Bar data={this.state.chartData}
                     options={{/*maintainAspectRatio: false*/
                              title: {
                                  display: this.props.displayTitle,
                                  text: this.props.titleGraph,
                                  fontSize: 25
                              },
                              legend: {
                                  display: this.props.displayLegend,
                                  position: this.props.legendPosition
                              }}}>
                </Bar>

            </div>
        );
    }
}

export default Chart;