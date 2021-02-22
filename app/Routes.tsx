import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';
import GameScreen from "../app/screens/game.screen";
import HomeScreen from "../app/screens/home.screen";
import PackagesScreen from "../app/screens/packages.screen";
import DoneScreen from "../app/screens/done.screen";
import ModesScreen from "./screens/modes.screen";
import FacebookLoginScreen from "./screens/login.fb.screen";

type StackParamList = {
    game: undefined,
    home: undefined,
    done: { player1: { name: string, score: number }, player2: { name: string, score: number } },
    modes: undefined,
    packages: undefined,
    login: undefined
}
const Stack = createStackNavigator<StackParamList>();

export type GameScreenRouteProp = RouteProp<StackParamList, 'game'>;
export type HomeScreenRouteProp = RouteProp<StackParamList, 'home'>;
export type DoneScreenRouteProp = RouteProp<StackParamList, 'done'>;
export type GameTypeScreenRouteProp = RouteProp<StackParamList, 'gameType'>;
export type PackagesScreenRouteProp = RouteProp<StackParamList, 'packages'>;
export type LoginScreenRouteProp = RouteProp<StackParamList, 'login'>;

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
                    name="modes"
                    component={ModesScreen}
                    options={{ title: "Select Game Mode", headerBackTitleVisible: false }}
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
                <Stack.Screen
                    name="login"
                    component={FacebookLoginScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};




