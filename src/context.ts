import { createContext } from "react";
import { LayersContext } from "./types";

const defaultContext: LayersContext = {
  list: {},
  add: () => {},
  del: () => {},
};

const ContextInst = createContext(defaultContext);

export default ContextInst;
