import React from "react"
import { StyleProp, ViewStyle } from "react-native"

export type TLayer = React.FC<{
  style?: StyleProp<ViewStyle>,
}>

export type TLayersList = {
  [key: string]: React.FC,
}

export type TCreateLayer = (
  id: string,
  component: React.FC,
) => void

export type TRemoveLayer = (
  id: string,
) => void

export type TLayersContext = {
  list: TLayersList,
  create: TCreateLayer,
  remove: TRemoveLayer,
}

