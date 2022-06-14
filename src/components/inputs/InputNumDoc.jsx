import { useState } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Checkbox } from "@mui/material"
import InputTypeDoc from "./InputTypeDoc"
import ButtonTerm from "../buttons/ButtonTerm"
import CheckBox from "../buttons/CheckBox"
import ButtonTermHab from "../buttons/ButtonTermHab"

const InputNumDoc = () => {
  const [number, setNumber] = useState("")

  let pasaporte = "^\\d{4}-PN-\\w{3}-\\d{4}$"
  let nui = "^\\d{12}$"

  let pasaporteVerificado = number.match(pasaporte)
  let nuiVerificado = number.match(nui)

  const handleChange = (event) => {
    setNumber(event.target.value)
  }
  return (
    <div>
      {!pasaporteVerificado && (
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <InputTypeDoc />
          <TextField id="outlined-basic" label="Número de documento" variant="outlined" onChange={handleChange} />
          <ButtonTerm disabled />
          <CheckBox />
        </Box>
      )}
      {pasaporteVerificado && <ButtonTermHab />}
    </div>
  )
}
export default InputNumDoc
