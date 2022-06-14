import { useState } from "react"
import { AppContext } from "./AppContext"

const AppProvider = ({ children }) => {
  const [document, setDocument] = useState("")
  const [number, setNumber] = useState("")
  const [accept, setAccept] = useState(false)

  return (
    <AppContext.Provider value={{ document, setDocument, number, setNumber, accept, setAccept }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
