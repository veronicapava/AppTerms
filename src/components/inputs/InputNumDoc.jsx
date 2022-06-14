import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

import InputTypeDoc from "./InputTypeDoc"
import ButtonTerm from "../buttons/ButtonTerm"
import ButtonTermHab from "../buttons/ButtonTermHab"
import CheckBoxDis from "../buttons/CheckBoxDis"

import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

const InputNumDoc = () => {
  const { number, setNumber } = useContext(AppContext)

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
          <CheckBoxDis />
        </Box>
      )}
      {pasaporteVerificado && <ButtonTermHab />}
    </div>
  )
}
export default InputNumDoc
