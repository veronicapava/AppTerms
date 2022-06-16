import { useState, useContext } from "react"
import Checkbox from "@mui/material/Checkbox"
import fetchApi from "../../hooks/useFetch"
import { AppContext } from "../../context/AppContext"

const CheckBox = () => {
  const { data } = useContext(AppContext)

  const [registros, setRegistros] = useState([])

  const handleCheck = async () => {
    //Hacemos fetch para crear registro
    let request = await fetchApi(`/createUser`, "POST", data)
    // let newRegistro = await fetchApi(`/createUser"`)
    // setRegistros([...registros, newRegistro])
  }

  return (
    <div>
      <Checkbox onClick={handleCheck} />
    </div>
  )
}

export default CheckBox
