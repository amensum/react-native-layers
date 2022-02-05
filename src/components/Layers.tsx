import React from "react";
import produce from "immer";
import ContextInst from "../context";
import { LayersContext, LayersRenderer } from "../types";

const Layers: LayersRenderer = ({ children }) => {
  const [layersList, setLayersList] = React.useState(children);

  const context: LayersContext = React.useMemo(() => ({
    list: layersList,
    add: (layerId, layer) => {
      setLayersList(
        produce(draft => {
          draft[layerId] = layer;
        }),
      );
    },
    del: (layerId) => {
      setLayersList(
        produce(draft => {
          delete draft[layerId];
        }),
      );
    },
  }), [layersList, setLayersList]);

  return (
    <ContextInst.Provider value={context}>
      {
        Object
          .keys(layersList)
          .map(layerId => {
            const Component = layersList[layerId][0];
            const props = layersList[layerId][1];

            return <Component key={layerId} {...props} />;
          })
      }
    </ContextInst.Provider>
  );
};

export default Layers;
