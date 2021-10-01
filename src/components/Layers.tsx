import React, { useState, useMemo } from "react"
import { StyleSheet } from "react-native"
import { TLayers, TLayersContext, TLayersList } from "../types"
import LayersContext from "../context"

const Layers: TLayers = ({ children }) => {
  const [list, setList] = useState<TLayersList>(children)

  const context: TLayersContext = useMemo(() => ({
    list,
    create: (id, LayerComp) => {
      setList(prev => {
        const next = { ...prev }
        next[id] = LayerComp
        return next
      })
    },
    remove: (id) => {
      setList(prev => {
        const next = { ...prev }
        delete next[id]
        return next
      })
    },
  }), [list, setList])

  return (
    <LayersContext.Provider value={context}>
      {
        Object.keys(list).map(id => React.createElement(list[id], {
          id: id,
          key: id,
          style: styles.layer,
        }))
      }
    </LayersContext.Provider>
  )
}

const styles = StyleSheet.create({
  layer: {
    position: "absolute",
  },
})

export default Layers
