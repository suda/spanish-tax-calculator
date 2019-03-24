import { Box, Heading } from "grommet"
import React, { Component } from "react"

class Header extends Component {
  render() {
    return (
      <Box
        style={{
          background: "#0b0c0c",
          color: "#ffffff",
          paddingTop: "13px",
          paddingBottom: "7px",
          borderBottom: "10px solid #005ea5"
        }}
      >
        <Box width="large" align="center">
          <Heading
            style={{
              margin: "0",
              fontSize: "24px",
              fontWeight: "400"
            }}
          >
            Spanish IPRF tax calculator
          </Heading>
        </Box>
      </Box>
    )
  }
}

export default Header
