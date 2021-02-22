import React from "react";
import BasePackage from "./packages";
import { IMode } from "./models/mode.interface";

export default React.createContext({
    pkg: BasePackage,
    changePackage: (cPkg: BasePackage) => {},
    changeMode: (mode: IMode) => {}
});
