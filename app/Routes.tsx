import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import GameScreen from "../app/screens/game.screen";
import HomeScreen from "../app/screens/home.screen";
import PackagesScreen from "../app/screens/packages.screen";
import DoneScreen from "../app/screens/done.screen";
import LogoPackage from "./packages/logos";
import { PackageInterface } from "./packages/package.interface";

type StackParamList = {
    game: { pkg: PackageInterface, cells: number },
    home: undefined,
    done: { player1: { name: string, score: number }, player2: { name: string, score: number } },
    gameType: undefined,
    packages: undefined
}
const Stack = createStackNavigator<StackParamList>();

export type GameScreenRouteProp = RouteProp<StackParamList, 'game'>;
export type HomeScreenRouteProp = RouteProp<StackParamList, 'home'>;
export type DoneScreenRouteProp = RouteProp<StackParamList, 'done'>;
export type GameTypeScreenRouteProp = RouteProp<StackParamList, 'gameType'>;
export type PackagesScreenRouteProp = RouteProp<StackParamList, 'packages'>;

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{}}>
                <Stack.Screen
                    name="home"
                    component={HomeScreen}
                    options={{ title: "Home", headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="packages"
                    component={PackagesScreen}
                    options={{ title: "Select a Package", headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="game"
                    component={GameScreen}
                    options={{ headerShown: false }}
                    //initialParams={{ pkg: new LogoPackage(), cells: 40 }}
                />
                <Stack.Screen
                    name="done"
                    component={DoneScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};




