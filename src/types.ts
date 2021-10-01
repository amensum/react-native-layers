import { ComponentType } from "react"
import { StyleProp, ViewStyle } from "react-native"

export type TLayer<P = {}> = ComponentType<{
  id: string,
  key: string,
  style: StyleProp<ViewStyle>,
} & P>

export type TLayers = ComponentType<{
  children: TLayersList,
}>

export type TLayersList = {
  [id: string]: TLayer,
}

export type TCreateLayer = (
  id: string,
  LayerComp: TLayer,
) => void

export type TRemoveLayer = (
  id: string,
) => void

export type TLayersContext = {
  list: TLayersList,
  create: TCreateLayer,
  remove: TRemoveLayer,
}

export type TMakeLayer = (
  LayerComp: TLayer,
  getPropsFunc?: <T> (props: T) => T,
) => TLayer
