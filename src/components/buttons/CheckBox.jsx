import React from "react"
import Checkbox from "@mui/material/Checkbox"

const CheckBox = () => {
  const handleCheck = () => {
    console.log("Hachiendo click en el check")
  }

  return (
    <div>
      <Checkbox onClick={handleCheck} />
    </div>
  )
}

export default CheckBox
