import React from "react";
import {Text, View, Image, TouchableOpacity, FlatList} from "react-native";
import { PackagesScreenRouteProp } from "../Routes";
import { PackageInterface } from "../packages/package.interface";
import AnimalPackage from "../packages/animals";
import FoodPackage from "../packages/food";
import LogoPackage from "../packages/logos";

type Props = {
    route: PackagesScreenRouteProp,
    navigation: undefined
}

type PackageListItem = {
    name: string,
    class: PackageInterface
}

const PackagesScreen: React.FC<Props> = ({ route, navigation }) => {

    const [ packages, setPackages ] = React.useState([
        { name: "Animals", class: new AnimalPackage() },
        { name: "Food", class: new AnimalPackage() },
        { name: "Logos", class: new LogoPackage() },
        { name: "Flags", class: new LogoPackage() },
        { name: "Emoticons", class: new LogoPackage() }
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
                                navigation.navigate("game", {
                                    pkg: item.class
                                })
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
