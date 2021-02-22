import React from "react";
import { DoneScreenRouteProp } from "../Routes";
import {Image, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";

type Props = {
    route: DoneScreenRouteProp,
    navigation: undefined
}

const DoneScreen: React.FC<Props> = ({ route, navigation }) => {

    console.log(route.params.player1.score);
    console.log(route.params.player2.score);

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Image source={require('../assets/images/win3.gif')} />
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: '75%', height: 44 }} onPress={() => { navigation.navigate('game')}}>
                <Text style={{ color: 'purple', fontFamily: 'MACCOS DOUBLE Demo', fontSize: 36 }}>Play Again</Text>
            </TouchableOpacity>
            <View style={{ height: 5 }}/>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: '75%', height: 44 }} onPress={() => { navigation.navigate('home')}}>
                <Text style={{ color: 'purple', fontFamily: 'MACCOS DOUBLE Demo', fontSize: 36 }}>Home</Text>
            </TouchableOpacity>
        </View>
    )
};

export default DoneScreen;
