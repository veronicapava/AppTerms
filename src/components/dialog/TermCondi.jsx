import { useState, useRef, useEffect, useContext } from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { AppContext } from "../../context/AppContext"
import fetchApi from "../../hooks/useFetch"

export default function TermCondi() {
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState("paper")

  const { setAccept, data, setData } = useContext(AppContext)

  const handleClickOpen = (scrollType) => () => {
    setOpen(true)
    setScroll(scrollType)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleOk = (e) => {
    setAccept(true)
    setOpen(false)
  }

  const descriptionElementRef = useRef(null)
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  useEffect(() => {
    async function fetching() {
      // Fetch para traernos el ultimo termino y condiciones
      let data = await fetchApi("/ultimosTyC")
      setData(data)
    }
    fetching()
  }, [])

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen("paper")}>
        Términos y condiciones
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title"> Términos y condiciones</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef}>
            {data.map((data) => (
              <h3 key={data.id}>{JSON.stringify(data)}</h3>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="contained" color="success" onClick={handleOk}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
