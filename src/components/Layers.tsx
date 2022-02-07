import React from "react";
import produce from "immer";
import ContextInst from "../context";
import { LayersComponent, LayerElement, LayersContext } from "../types";

const Layers: LayersComponent<any> = ({ children }) => {
  const [list, setList] = React.useState(() => {
    const casted = children as LayerElement | LayerElement[];

    if (Array.isArray(casted)) {
      return casted.map(el => el.props);
    }

    return [casted.props];
  });

  const context: LayersContext = React.useMemo(() => ({
    list,
    add: (layerConfig) => {
      setList(
        produce(draft => {
          draft.push(layerConfig);
        }),
      );
    },
    del: (id) => {
      setList(
        produce(draft => {
          const index = draft.findIndex(layer => layer.id === id);

          if (index > -1) {
            draft.splice(index);
          }
        }),
      );
    },
  }), [list, setList]);

  return (
    <ContextInst.Provider value={context}>
      {
        list.map(Layer => (
          <Layer.component key={Layer.id} {...Layer.props} />
        ))
      }
    </ContextInst.Provider>
  );
};

export default Layers;
