import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import CheckBox from "../buttons/CheckBox"
import CheckBoxDis from "../buttons/CheckBoxDis"
import TermCondi from "../dialog/TermCondi"
import InputsDes from "../inputs/InputsDes"

const FormDesh = () => {
  const { accept } = useContext(AppContext)

  return (
    <div>
      <InputsDes />
      <TermCondi />
      {!accept && <CheckBoxDis />}
      {accept && <CheckBox />}
    </div>
  )
}

export default FormDesh
