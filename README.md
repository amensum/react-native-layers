# react-native-layers
[![version](https://img.shields.io/npm/v/react-native-layers.svg?style=flat-square&logo=npm)](https://npmjs.com/package/react-native-layers)

Layers for React Native.

## Installing
Using npm:
```bash
$ npm install react-native-layers
```

## Demo
![Demo](./demo/video.gif)
```javascript
import React, { useMemo } from "react"
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  TouchableOpacity,
} from "react-native"
import { Layers, useLayers } from "react-native-layers"
import { TLayer } from "react-native-layers/lib/esm/types"

let layersCount = 0

const LayerButton: React.FC = () => {
  const { create } = useLayers()

  const onPressHandler = () => {
    const layerID = Date.now().toString()
    create(layerID, () => DemoLayer)
  }

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.layerButton}>
        <Text>New</Text>
      </View>
    </TouchableOpacity>
  )
}

const DemoLayer: TLayer = ({ id, style }) => {
  const { remove } = useLayers()
  const number = useMemo(() => ++layersCount, [])

  const onPressHandler = () => {
    remove(id)
    layersCount--
  }

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[
        style,
        styles.demoLayer,
        {
          right: 162 - (number * 24),
          top: 196 + (number * 24),
        },
      ]}
    >
      <Text>Layer №{number}</Text>
    </TouchableOpacity>
  )
}

const BaseLayer: TLayer = () => {
  const isDarkMode = useColorScheme() === "dark"

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"}/>
      <LayerButton/>
    </SafeAreaView>
  )
}

const App = () => {
  return (
    <Layers>
      {() => BaseLayer}
    </Layers>
  )
}

const styles = StyleSheet.create({
  demoLayer: {
    height: 256,
    width: 256,
    backgroundColor: "#00ffc4",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  layerButton: {
    height: 50,
    width: 50,
    backgroundColor: "#0ff",
    justifyContent: "center",
    alignItems: "center",
  },
})

export default App
```
