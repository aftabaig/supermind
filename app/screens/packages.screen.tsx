import React from "react";
import {Text, View, Image, TouchableOpacity, FlatList} from "react-native";
import { PackagesScreenRouteProp } from "../Routes";
import AnimalPackage from "../packages/animals";
import FoodPackage from "../packages/food";
import LogoPackage from "../packages/logos";
import FlagPackage from "../packages/flags";
import EmoticonPackage from "../packages/emoticons";
import BasePackage from "../packages";
import GameContext from "../game.context";

type Props = {
    route: PackagesScreenRouteProp,
    navigation: undefined
}

type PackageListItem = {
    name: string,
    class: BasePackage
}

const PackagesScreen: React.FC<Props> = ({ route, navigation }) => {

    const { changePackage } = React.useContext(GameContext)

    const [ packages, setPackages ] = React.useState([
        { name: "Animals", class: new AnimalPackage() },
        { name: "Food", class: new FoodPackage() },
        { name: "Logos", class: new LogoPackage() },
        { name: "Flags", class: new FlagPackage() },
        { name: "Emoticons", class: new EmoticonPackage() }
    ]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                scrollEnabled={false}
                contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
                data={packages}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={{ height: 44, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => {
                                changePackage(item.class);
                                navigation.navigate("game");
                            }}>
                            <Text style={{ color: 'purple', fontFamily: 'MACCOS DOUBLE Demo', fontSize: 36 }}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    )
};

export default PackagesScreen;
