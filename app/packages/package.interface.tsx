import { ImageSourcePropType } from "react-native";

export interface PackageItemInterface {
    id: number,
    image: ImageSourcePropType
}

export interface PackageInterface {
    items: PackageItemInterface[]
    gameItems: PackageItemInterface[]
}
