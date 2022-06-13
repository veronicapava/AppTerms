import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

const InputNumDoc = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Número de documento" variant="outlined" />
    </Box>
  )
}
export default InputNumDoc
