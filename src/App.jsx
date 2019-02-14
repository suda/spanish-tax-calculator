import { Grommet, Box, TextInput } from "grommet"
import React, { Component } from "react"

import theme from "./theme"
import Graph from "./Graph"
import Slider from "./Slider"

class App extends Component {
  state = {
    maxIncome: 100000,
    income: 0,
    taxes: {},
    graphData: {}
  }

  taxRates = {
    0: 19,
    12450: 24,
    20200: 30,
    25200: 37,
    60000: 45
  }

  calculateTaxes(income) {
    let taxes = {}
    let taxable = income
    for (const bracket of Object.keys(this.taxRates).reverse()) {
      if (taxable > bracket) {
        const rate = this.taxRates[bracket]
        const tax = (taxable - bracket) * (rate / 100)
        taxes[rate] = tax.toFixed(2)
        taxable -= taxable - bracket
      }
    }
    return taxes
  }

  generateGraphData(income, taxes) {
    let i = 0
    let data = {
      datasets: [
        {
          label: "After tax",
          backgroundColor: theme.graph.colors[i],
          data: []
        }
      ]
    }

    let totalTax = 0
    for (const bracket of Object.keys(taxes)) {
      i++
      const label = `${bracket}%`
      data.datasets.push({
        label,
        backgroundColor: theme.graph.colors[i],
        data: [taxes[bracket]]
      })

      totalTax += parseFloat(taxes[bracket])
    }
    data.datasets[0].data.push((income - totalTax).toFixed(2))
    return data
  }

  setIncome(income) {
    income = parseInt(income)
    const taxes = this.calculateTaxes(income)
    console.log(taxes)
    const graphData = this.generateGraphData(income, taxes)
    // console.log(graphData)
    this.setState({ income, taxes, graphData })
  }

  render() {
    const { income } = this.state
    return (
      <Grommet theme={theme}>
        <Box width="large" margin={{ left: "auto", right: "auto" }}>
          <Box direction="row" align="center" justify="center">
            <Box width="small">
              <TextInput
                value={income}
                placeholder="Enter your income"
                onChange={event => {
                  this.setIncome(event.target.value)
                }}
              />
            </Box>
            <Box width="large" pad={{ left: "medium" }}>
              <Slider
                state={this.state}
                onChange={event => {
                  this.setIncome(event.target.value)
                }}
              />
            </Box>
          </Box>

          <Graph state={this.state} />
        </Box>
      </Grommet>
    )
  }
}

export default App
