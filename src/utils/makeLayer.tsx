import React from "react"
import { TMakeLayer } from "../types"

const makeLayer: TMakeLayer = (LayerComp, getPropsFunc) => {
  return props => <LayerComp {...typeof getPropsFunc === "undefined" ? props : getPropsFunc(props)}/>
}

export default makeLayer
