import React from "react";
import { Text, View, TouchableHighlight } from "react-native";
import { HomeScreenRouteProp } from "../Routes";

type Props = {
    route: HomeScreenRouteProp,
    navigation: undefined
}

const HomeScreen: React.FC<Props> = ({ route, navigation }) => {

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <TouchableHighlight style={{ backgroundColor: 'purple', alignItems: 'center', justifyContent: 'center', width: '50%', height: 44 }} onPress={() => { navigation.navigate('game')}}>
                <Text style={{ color: 'white'  }}>Play</Text>
            </TouchableHighlight>
        </View>
    )
};

export default HomeScreen;
