import { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"

import InputTypeDoc from "./InputTypeDoc"
import ButtonTerm from "../buttons/ButtonTerm"
import ButtonTermHab from "../buttons/ButtonTermHab"
import CheckBoxDis from "../buttons/CheckBoxDis"

import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

const InputNumDoc = () => {
  const [errorMessage, setErrorMessage] = useState("")
  const { number, setNumber, documentType } = useContext(AppContext)
  const [numeroVerificado, setNumeroVerificado] = useState(false)

  let pasaporteRegex = "^\\d{4}-PN-\\w{3}-\\d{4}$"
  let nuiRegex = "^\\d{12}$"

  const handleChange = (event) => {
    setNumber(event.target.value)

    if (documentType == "Pasaporte") {
      validatePasaporte(event.target.value)
    } else if (documentType == "NUI") {
      validateNui(event.target.value)
    } else {
      setErrorMessage("Ingresa datos validos")
    }
  }

  const validatePasaporte = (value) => {
    let valor = value.match(pasaporteRegex)
    setNumeroVerificado(valor)
  }
  const validateNui = (value) => {
    let valor2 = value.match(nuiRegex)

    setNumeroVerificado(valor2)
  }
  return (
    <form>
      {!numeroVerificado && (
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <InputTypeDoc />
          <TextField
            id="outlined-basic"
            label="Número de documento"
            variant="outlined"
            onChange={handleChange}
            required
          />
          <ButtonTerm disabled />
          <CheckBoxDis />
          <p>Pasaporte: ####-PN-ABC-####</p>
          <p>NUI: ############</p>
          {errorMessage ? <p className="alert alert-dismissible alert-primary">{errorMessage}</p> : null}
        </Box>
      )}
      {numeroVerificado && <ButtonTermHab />}
    </form>
  )
}
export default InputNumDoc
