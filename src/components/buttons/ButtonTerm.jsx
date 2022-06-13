import React from "react"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"

const ButtonTerm = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" disabled>
        Términos y condiciones
      </Button>
    </Stack>
  )
}

export default ButtonTerm
