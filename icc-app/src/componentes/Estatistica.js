import React, { Component } from 'react';
import Chart from './Chart';
import axios from 'axios';
import Calendar from "./Datepicker";

class Estatistica extends Component {

  constructor() {
    super();
    this.state = {
      chartData: {
        labels: ["Seu aproveitamento da aula", "Explicação do conteúdo", "Material da aula", "Avaliação geral da aula"],
        datasets: [
          {
            label: "Avaliações Recebidas",
            data: [],
            backgroundColor: [
              'rgba(255,99,132,0.6)',
              'rgba(54,162,235,0.6)',
              'rgba(255,206,86,0.6)',
              'rgba(75,192,192,0.6)',
              'rgba(153,102,255,0.6)',
              'rgba(255,159,64,0.6)',
              'rgba(255,99,132,0.6)'
            ]
          }
        ]
      },
      date: ((new Date().getDate() < 9 ? "0" + new Date().getDate() : new Date().getDate()) + "/" + (new Date().getMonth() < 9 ? "0"+ (new Date().getMonth() + 1) : (new Date().getMonth() + 1)) + "/" + new Date().getFullYear())
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let d = e
    d = (d.getDate() < 9 ? "0" + d.getDate() : d.getDate()) + "/" + (d.getMonth() < 9 ? "0"+ (d.getMonth() + 1) : (d.getMonth() + 1)) + "/" + d.getFullYear();
    this.state.date = d;
    this.setState({ date: d });
    this.getDados();
  }

 

  getDados() {
    const dataAgora = {data: this.state.date};
    axios.get("http://localhost:9000/pegaValores", {params: dataAgora})
      .then(res => {
        let chartData = { ...this.state.chartData }
        chartData.datasets[0].data = res.data;
        this.setState({ chartData: chartData });
      });
  }

  render() {
    return (
      <div className="App">
        <Calendar
          myFunction={this.handleChange}
        ></Calendar>
        <Chart chartData={this.state.chartData} /*titleGraph="Estatística de avaliação de aula"*/ legendPosition="top"></Chart>
      </div>
    )
  }
}

export default Estatistica;