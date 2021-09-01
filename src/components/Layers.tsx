import React, { useMemo, useState } from "react"
import { TLayersContext, TLayersList } from "../types"
import LayersContext from "../context"

const Layers: React.FC = ({ children }) => {
  const [list, setList] = useState<TLayersList>({})

  const context: TLayersContext = useMemo(() => ({
    list: list,
    create: (id, component) => {
      setList(prev => {
        const next = { ...prev }
        next[id] = component
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
      {children}
      {Object.keys(list).map(id => {
        const Component = list[id]

        return <Component key={id} />
      })}
    </LayersContext.Provider>
  )
}

export default Layers
