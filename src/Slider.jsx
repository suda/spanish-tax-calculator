import { Box, RangeInput, Stack, Text } from "grommet"
import React, { Component } from "react"

class Slider extends Component {
  render() {
    const { income, maxIncome } = this.props.state
    return (
      <Stack>
        <Box direction="row" justify="between">
          <Box border={false}>
            <Text style={{ fontFamily: "monospace" }}>&euro;0</Text>
          </Box>
          <Box border={false}>
            <Text style={{ fontFamily: "monospace" }}>
              &euro;{maxIncome / 1000}k
            </Text>
          </Box>
        </Box>
        <Box pad={{ left: "large", right: "xlarge" }}>
          <RangeInput
            value={income}
            min={0}
            max={maxIncome}
            onChange={this.props.onChange}
          />
        </Box>
      </Stack>
    )
  }
}

export default Slider
