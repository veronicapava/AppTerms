import React from "react"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import TermCondi from "../dialog/TermCondi"

const ButtonTermHab = () => {
  return (
    <Stack direction="row" spacing={2}>
      {/* <Button variant="contained">Términos y condiciones</Button> */}
      <TermCondi />
    </Stack>
  )
}

export default ButtonTermHab
