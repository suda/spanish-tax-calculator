import { Table, TableHeader, TableBody, TableRow, TableCell } from "grommet"
import React, { Component } from "react"

class RateTable extends Component {
  render() {
    const { graphData } = this.props.state
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              Rate
            </TableCell>
            <TableCell scope="col" border="bottom">
              Amount
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {graphData.datasets
            ? graphData.datasets.map(d => {
                return (
                  <TableRow>
                    <TableCell scope="row">
                      <strong>{d.label}</strong>
                    </TableCell>
                    <TableCell style={{ textAlign: "right" }}>
                      {d.data[0]}
                    </TableCell>
                  </TableRow>
                )
              })
            : ""}
        </TableBody>
      </Table>
    )
  }
}

export default RateTable
