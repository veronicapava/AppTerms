import React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

const InputsDes = () => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <div>
          <TextField id="outlined-select-currency" disabled label="Tipo de documento" />
          <TextField disabled id="outlined-basic" label="Número de documento" variant="outlined" />
        </div>
      </Box>
    </div>
  )
}

export default InputsDes
