import React from "react"
import { StyleSheet, View } from "react-native"
import { TLayer } from "../types"

const Layer: TLayer = ({ children, style }) => {
  return (
    <View style={[styles.layer, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  layer: {
    position: "absolute",
  },
})

export default Layer
