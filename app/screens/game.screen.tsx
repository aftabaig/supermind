import React from "react";
import {
    View,
    Text, StyleSheet, DeviceEventEmitter
} from 'react-native';
import CanvasComponent from "../components/canvas.component";
import { PackageInterface } from "../packages/package.interface";

interface GameScreenProps {
    pkg: PackageInterface
    cells: number
}

const GameScreen: React.FC<GameScreenProps> = ({ pkg, cells }) => {

    const [ player1Score, setPlayer1Score ] = React.useState(0);
    const [ player2Score, setPlayer2Score ] = React.useState(0);
    const [ isPlayer1Playing, setPlayer1Playing ] = React.useState(false);

    React.useEffect(() => {
        const noMatchSubscription = DeviceEventEmitter.addListener('noMatch', noMatchFound);
        const matchSubscription = DeviceEventEmitter.addListener('match', matchFound);
        return () => {
            noMatchSubscription.remove();
            matchSubscription.remove();
        }
    }, []);

    const matchFound = () => {
        if (isPlayer1Playing) {
            setPlayer1Score(player1Score+1);
        }
        else {
            setPlayer2Score(player2Score+1);
        }
    };

    const noMatchFound = () => {
        console.log("no match", isPlayer1Playing);
        if (isPlayer1Playing) {
            setPlayer1Playing(false);
            console.log(isPlayer1Playing);
        }
        else {
            setPlayer1Playing(true);
        }
    };

    return (
        <View style={styles.main}>
            <View style={styles.scoreboard}>
                <View style={styles.playerScore}>
                    <Text style={ isPlayer1Playing ? [styles.scoreText, { backgroundColor: 'red' }] : [styles.scoreText, { backgroundColor: 'transparent' }] }>{player1Score}</Text>
                </View>
                <Text style={styles.scoreText}>|</Text>
                <View style={styles.playerScore}>
                    <Text style={ !isPlayer1Playing ? [styles.scoreText, { backgroundColor: 'red' }] : [styles.scoreText, { backgroundColor: 'transparent' }] }>{player2Score}</Text>
                </View>
            </View>
            <CanvasComponent pkg={pkg} cells={cells} />
        </View>
    );

}

export default GameScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    scoreboard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150
    },
    playerScore: {
        flex: 1,
        alignItems: 'center'
    },
    scoreText: {
        fontSize: 72,
        fontWeight: 'bold'
    }
});

