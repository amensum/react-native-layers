import React, { useMemo, useState } from "react"
import { TLayersContext, TLayersList } from "../types"
import LayersContext from "../context"

const Layers: React.FC = ({ children }) => {
  const [list, setList] = useState<TLayersList>({
    "_base": () => (
      <>
        {children}
      </>
    ),
  })

  const context: TLayersContext = useMemo(() => ({
    list,
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
      {Object.keys(list).map(id => {
        const Component = list[id]

        return <Component key={id}/>
      })}
    </LayersContext.Provider>
  )
}

export default Layers
