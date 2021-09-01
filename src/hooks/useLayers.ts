import { useContext } from "react"
import LayersContext from "../context"
import { TLayersContext } from "../types"

const useLayers: () => TLayersContext = () => {
  return useContext(LayersContext)
}

export default useLayers
