import React from "react"
import { TMakeLayerProvider } from "../types"

const makeLayerProvider: TMakeLayerProvider = (Layer, additionalProps) => {
  return () => baseProps => <Layer {...baseProps} {...additionalProps}/>
}

export default makeLayerProvider
