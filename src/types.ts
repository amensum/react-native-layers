import React from "react";

export type Component<P = {}> = React.ComponentType<P>

export type LayerId = React.Key

export type Layer<P = {}> = [Component<P>, P]

export type LayerAddFunc = (layerId: LayerId, layer: Layer<any>) => void

export type LayerDelFunc = (layerId: LayerId) => void

export type LayersList = Record<LayerId, Layer<any>>

export type LayersRenderer = Component<{ children: LayersList }>

export interface LayersContext {
  list: LayersList;
  add: LayerAddFunc;
  del: LayerDelFunc;
}
