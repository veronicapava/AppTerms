import { useState } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"

const currencies = [
  {
    value: "Pasaporte",
    label: "Pasaporte",
  },
  {
    value: "Número único de Identificación",
    label: "NUI",
  },
]
const InputTypeDoc = () => {
  const [currency, setCurrency] = useState("")

  const handleChange = (event) => {
    setCurrency(event.target.value)
  }
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Tipo de documento"
          value={currency}
          onChange={handleChange}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  )
}

export default InputTypeDoc
