import React from "react";
import BasePackage from "./packages";

export default React.createContext({
    pkg: BasePackage,
    changePackage: (cPkg: BasePackage) => {}
});
