import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import GameScreen from "../app/screens/game.screen";
import HomeScreen from "../app/screens/home.screen";
import LogoPackage from "./packages/logos";
import { PackageInterface } from "./packages/package.interface";

type StackParamList = {
    game: { pkg: PackageInterface, cells: number },
    home: undefined
}
const Stack = createStackNavigator<StackParamList>();

export type GameScreenRouteProp = RouteProp<StackParamList, 'game'>;
export type HomeScreenRouteProp = RouteProp<StackParamList, 'home'>;

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="game"
                    component={GameScreen}
                    initialParams={{ pkg: new LogoPackage(), cells: 40 }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};




