import { ComponentType } from "react"
import { StyleProp, ViewStyle } from "react-native"

export type TLayers = ComponentType<{
  children: TLayersList,
}>

export type TLayersList = {
  [id: string]: TLayer<any>,
}

export type TLayerProps<P = {}> = {
  id: string,
  key: string,
  style: StyleProp<ViewStyle>,
} & P

export type TLayer<P = {}> = ComponentType<TLayerProps<P>>

export type TCreateLayer = <P>(
  id: string,
  LayerComp: TLayer<P>,
) => void

export type TRemoveLayer = (
  id: string,
) => void

export type TLayersContext = {
  list: TLayersList,
  create: TCreateLayer,
  remove: TRemoveLayer,
}

export type TMakeLayer = <P>(
  LayerComp: TLayer<P>,
  getPropsFunc?: (props: TLayerProps) => TLayerProps<P>,
) => TLayer<P>
