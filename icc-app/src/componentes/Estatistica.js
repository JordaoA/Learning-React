import React, { Component } from 'react';
import Chart from './Chart';
import axios from 'axios';

class Estatistica extends Component {

    constructor() {
      super();
      this.state = {
        chartData: {
          labels: ["Seu aproveitamento da aula", "Explicação do conteúdo", "Material da aula", "Avaliação geral da aula"],
          datasets: [
              {
                  label: "Avaliações Recebidas",
                  data: [20,15,37,8,13],
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
        }
      }
    }

    componentWillMount() {
      //console.log(this.getDados());
      this.getDados();
    }

    async getDados() {
      //console.log("Pegou")
      axios.get("http://localhost:9000/pegaValores")
      .then(res => console.log(res.data));
    }

  
    render() {
      return(
        <div className="App">
          <Chart chartData={this.state.chartData} /*titleGraph="Estatística de avaliação de aula"*/ legendPosition="top"></Chart>
        </div>
      ) 
    }
  }

  export default Estatistica;