# react-native-layers
[![version](https://img.shields.io/npm/v/react-native-layers.svg?style=flat-square&logo=npm)](https://npmjs.com/package/react-native-layers)
[![license](https://img.shields.io/npm/l/react-native-layers.svg?style=flat-square&logo=npm)](https://npmjs.com/package/react-native-layers)
[![downloads](https://img.shields.io/npm/dm/react-native-layers.svg?style=flat-square&logo=npm)](https://npmjs.com/package/react-native-layers)

Layers for React Native.

## Installing
Using npm:
```bash
$ npm install react-native-layers
```

## Demo
![Demo](./demo/video.gif)
```javascript
import React, { useEffect, useState } from "react"
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  TouchableOpacity,
} from "react-native"
import { Layers, useLayers, makeLayer } from "react-native-layers"
import { TLayer } from "react-native-layers/lib/esm/types"

const LayerButton: React.FC = () => {
  const { create } = useLayers()
  const [count, setCount] = useState<number>(0)

  const onLoad = () => {
    setCount(c => c + 1)
  }

  const onClose = () => {
    setCount(c => c - 1)
  }

  const onPressHandler = () => {
    create("_added_" + count, makeLayer(DemoLayer, props => {
      return { ...props, onLoad, onClose, count }
    }))
  }

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.layerButton}>
        <Text>New</Text>
      </View>
    </TouchableOpacity>
  )
}

const DemoLayer: TLayer<{
  count?: number,
  onLoad?: () => void,
  onClose?: () => void
}> = ({
  id,
  style,
  count = 0,
  onLoad = () => {},
  onClose = () => {},
}) => {
  const { remove } = useLayers()

  useEffect(() => {
    onLoad()

    return () => {
      onClose()
    }
  }, [onClose, onLoad])

  const onPressHandler = () => {
    remove(id)
  }

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[
        style,
        styles.demoLayer,
        {
          right: 162 - (count * 24),
          top: 196 + (count * 24),
        },
      ]}
    >
      <Text>Layer №{count}</Text>
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
      {{
        "_base_0": BaseLayer,
      }}
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
