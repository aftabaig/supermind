import React from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import {GameTypeScreenRouteProp, HomeScreenRouteProp} from "../Routes";

type Props = {
    route: GameTypeScreenRouteProp,
    navigation: undefined
}

const GameTypeScreen: React.FC<Props> = ({ route, navigation }) => {

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Image source={require('../assets/images/win3.gif')} />
            <TouchableHighlight style={{ backgroundColor: 'purple', alignItems: 'center', justifyContent: 'center', width: '50%', height: 44 }} onPress={() => { navigation.push('game')}}>
                <Text style={{ color: 'white'  }}>Play</Text>
            </TouchableHighlight>
        </View>
    )
};

export default GameTypeScreen;
