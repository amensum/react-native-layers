import { useContext } from "react"
import LayersContext from "../context"
import { TCreateLayer, TRemoveLayer } from "../types"

const useLayers: () => [TCreateLayer, TRemoveLayer] = () => {
  const { create, remove } = useContext(LayersContext)

  return [create, remove]
}

export default useLayers
