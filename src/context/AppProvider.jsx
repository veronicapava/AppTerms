import { useState } from "react"
import { AppContext } from "./AppContext"

const AppProvider = ({ children }) => {
  const [documentType, setDocumentType] = useState("")
  const [number, setNumber] = useState("")
  const [accept, setAccept] = useState(false)
  const [data, setData] = useState([])

  return (
    <AppContext.Provider value={{ documentType, setDocumentType, number, setNumber, accept, setAccept, data, setData }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
