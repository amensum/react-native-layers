import React from "react";
import { LayerComponent } from "../types";

const Layer: LayerComponent<any> = ({ id, component, props }) => {
  return <>{{ id, component, props }}</>;
};

export default Layer;
