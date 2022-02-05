import { useContext } from "react";
import ContextInst from "../context";
import { LayersContext } from "../types";

const useLayers: () => LayersContext = () => {
  return useContext(ContextInst);
};

export default useLayers;
