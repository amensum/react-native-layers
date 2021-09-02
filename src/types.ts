import { ComponentType } from "react"
import { StyleProp, ViewStyle } from "react-native"

export type TLayer = ComponentType<{
  id: string,
  style: StyleProp<ViewStyle>,
}>

export type TLayerProvider = () => TLayer

export type TLayers = ComponentType<{
  children: TLayerProvider,
}>

export type TLayersList = {
  [key: string]: TLayerProvider,
}

export type TCreateLayer = (
  id: string,
  getComponentFunc: TLayerProvider,
) => void

export type TRemoveLayer = (
  id: string,
) => void

export type TLayersContext = {
  list: TLayersList,
  create: TCreateLayer,
  remove: TRemoveLayer,
}
