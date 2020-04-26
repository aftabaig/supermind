import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { HomeScreenRouteProp } from "../Routes";

type Props = {
    route: HomeScreenRouteProp,
    navigation: undefined
}

const HomeScreen: React.FC<Props> = ({ route, navigation }) => {

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: '50%', height: 44 }} onPress={() => { navigation.push('packages')}}>
                <Text style={{ color: 'purple', fontFamily: 'MACCOS DOUBLE Demo', fontSize: 36  }}>Play</Text>
            </TouchableOpacity>
        </View>
    )
};

export default HomeScreen;
