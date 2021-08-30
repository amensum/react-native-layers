import { createContext } from "react"
import { TLayersContext } from "./types"

const defaultContext: TLayersContext = {
  list: {},
  create: () => {},
  remove: () => {},
}

const LayersContext = createContext(defaultContext)

export default LayersContext
