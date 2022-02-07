import React from "react";

export type Component<P = {}> = React.ComponentType<P>

export type Element<P = {}> = React.ReactElement<P>

export type LayerId = React.Key

export type LayerConfig<P = {}> = { id: LayerId, component: Component<P>, props: P }

export type LayerComponent<P = {}> = Component<LayerConfig<P>>

export type LayerElement<P = {}> = Element<LayerConfig<P>>

export type LayersComponent<P = {}> = Component<{ children: LayerElement<P> | LayerElement<P>[] }>

export interface LayersContext {
  list: LayerConfig<any>[];
  add: LayerAddFunc;
  del: LayerDelFunc;
}

export type LayerAddFunc = (layerConfig: LayerConfig<any>) => void

export type LayerDelFunc = (id: LayerId) => void
