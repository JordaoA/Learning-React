import React, { Component } from 'react'; 
import { Bar, Line, Pie, HorizontalBar } from 'react-chartjs-2';

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

    Rerender = () => {
        this.forceUpdate();
    }


    render() {
        return(
            <div {...this.Rerender} className="chart">
            
                
                <Pie data={this.state.chartData}
                     //width={720}
                     //height={300}
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
                </Pie>

            </div>
        );
    }
}

export default Chart;