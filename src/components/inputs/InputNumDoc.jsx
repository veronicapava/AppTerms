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
    event.preventDefault()
    setNumber(event.target.value.toUpperCase())

    if (documentType == "Pasaporte") {
      validatePasaporte(event.target.value.toUpperCase())
    } else if (documentType == "NUI") {
      validateNui(event.target.value.toUpperCase())
    } else {
      setErrorMessage("Ingresa datos válidos")
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
            "& > :not(style)": { m: 1, width: "30ch" },
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
        </Box>
      )}
      {numeroVerificado && <ButtonTermHab />}
    </form>
  )
}
export default InputNumDoc
