import React, { Component } from "react"
import { HorizontalBar } from "react-chartjs-2"

class Graph extends Component {
  render() {
    const { income, graphData } = this.props.state
    return (
      <HorizontalBar
        data={graphData}
        height={5}
        options={{
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                stacked: true,
                display: false,
                ticks: {
                  max: income + 1,
                  min: 0
                }
              }
            ],
            yAxes: [
              {
                stacked: true,
                display: false
              }
            ]
          },
          legend: {
            display: false
          },
          tooltips: {
            mode: "dataset",
            displayColors: false,
            xPadding: 10,
            yPadding: 10
          }
        }}
      />
    )
  }
}

export default Graph
