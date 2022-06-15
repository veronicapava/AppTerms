import { useContext, useState } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import { AppContext } from "../../context/AppContext"

const documentsTypes = [
  {
    value: "Pasaporte",
    label: "Pasaporte",
  },
  {
    value: "NUI",
    label: "NUI",
  },
]
const InputTypeDoc = () => {
  const handleChange = (event) => {
    setDocumentType(event.target.value)
  }

  const { documentType, setDocumentType } = useContext(AppContext)

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Tipo de documento"
          value={documentType}
          onChange={handleChange}
        >
          {documentsTypes.map((option) => (
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
