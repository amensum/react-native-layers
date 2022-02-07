# react-native-layers

[![version](https://img.shields.io/npm/v/react-native-layers.svg?style=flat-square&logo=npm)](https://npmjs.com/package/react-native-layers)
[![license](https://img.shields.io/npm/l/react-native-layers.svg?style=flat-square&logo=npm)](https://npmjs.com/package/react-native-layers)
[![downloads](https://img.shields.io/npm/dm/react-native-layers.svg?style=flat-square&logo=npm)](https://npmjs.com/package/react-native-layers)

Layers for React Native.

## Setup

Using npm:

```bash
$ npm install react-native-layers
```

Using yarn:

```bash
$ yarn add react-native-layers
```

## Preview

![Demo](./demo/video.gif)

## Guide

Add initial layer (or layers):

```tsx
import { Layer, Layers } from "react-native-layers";
import BaseComponent from "./BaseComponent";

const ExampleApp = () => {
  return (
    <Layers>
      <Layer id={"_base"} component={BaseComponent} props={{}}/>
    </Layers>
  );
};

export default ExampleApp;
```

Add new layer dynamically:

```tsx
import { View, Button } from "react-native";
import { useLayers } from "react-native-layers";
import ModalComponent from "./ModalComponent";

const ExampleScreen = () => {
  const layers = useLayers();

  const openModal = () => {
    layers.add({ id: "_modal", component: ModalComponent, props: {} });
  };

  return (
    <View>
      <Button title={"Open modal"} onPress={openModal}/>
    </View>
  );
}

export default ExampleScreen;
```
