import { useContext } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { AppContext } from "../../context/AppContext"

const InputsDes = () => {
  const { documentType, number } = useContext(AppContext)

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "30ch" },
        }}
      >
        <div>
          <TextField id="outlined-select-currency" disabled label={documentType} />
          <TextField disabled id="outlined-basic" label={number} variant="outlined" />
        </div>
      </Box>
    </div>
  )
}

export default InputsDes
