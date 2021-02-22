import React from "react";
import {Text, View, Image, TouchableHighlight, FlatList, TouchableOpacity} from "react-native";
import {GameTypeScreenRouteProp, HomeScreenRouteProp} from "../Routes";
import GameContext from "../game.context";
import { IMode } from "../models/mode.interface";

type Props = {
    route: GameTypeScreenRouteProp,
    navigation: undefined
}

const ModesScreen: React.FC<Props> = ({ route, navigation }) => {

    const { changeMode } = React.useContext(GameContext)

    const [ modes, _ ] = React.useState<IMode[]>([
        { name: "solo", title: "Solo" },
        { name: "doubles_same_device", title: "Doubles (same device)" },
        { name: "doubles_via_internet", title: "Doubles (via internet)" },
    ]);

    const showNextScreen = (mode: IMode) => {
        if (mode.name === 'doubles_via_internet') {
            navigation.navigate("login");
        }
        else {
            navigation.navigate("game");
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                scrollEnabled={false}
                contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
                data={modes}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={{ height: 44, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => {
                                changeMode(item);
                                showNextScreen(item);
                            }}>
                            <Text style={{ color: 'purple', fontFamily: 'MACCOS DOUBLE Demo', fontSize: 28 }}>{item.title}</Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    )
};

export default ModesScreen;
