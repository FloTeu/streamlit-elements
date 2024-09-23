import React, { ReactNode } from "react"
import { Skeleton, Box } from "@mui/material"
import { Streamlit, withStreamlitConnection } from "streamlit-component-lib"


// Notify Streamlit that the component is ready
//Streamlit.setComponentReady()

const ElementsLoading = () => (
  <Box sx={{ flex: 1, padding: "0 5px 0 5px" }}>
    <Skeleton height={35} width="100%" animation="wave" />
  </Box>
)

export default ElementsLoading
