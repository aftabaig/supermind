import React from "react";
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    DeviceEventEmitter
} from 'react-native';
import {
    widthPercentageToDP as dp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import CanvasComponent from "../components/canvas.component";
import { GameScreenRouteProp } from "../Routes";
import GameContext from "../game.context";

type Props = {
    route: GameScreenRouteProp,
    navigation: undefined
}

const GameScreen: React.FC<Props> = ({ route, navigation }) => {

    const { pkg } = React.useContext(GameContext);
    const cells = 40;

    const [ player1Score, _setPlayer1Score ] = React.useState(0);
    const player1ScoreRef = React.useRef(player1Score);
    const setPlayer1Score = (score: number) => {
        player1ScoreRef.current = score;
        _setPlayer1Score(score);
    };

    const [ player2Score, _setPlayer2Score ] = React.useState(0);
    const player2ScoreRef = React.useRef(player2Score);
    const setPlayer2Score = (score: number) => {
        player2ScoreRef.current = score;
        _setPlayer2Score(score);
    };

    const [ isPlayer1Playing, _setPlayer1Playing ] = React.useState(true);
    const isPlayer1PlayingRef = React.useRef(isPlayer1Playing);
    const setPlayer1Playing = (isPlaying: boolean) => {
        isPlayer1PlayingRef.current = isPlaying;
        _setPlayer1Playing(isPlaying);
    };

    React.useEffect(() => {
        const noMatchSubscription = DeviceEventEmitter.addListener('noMatch', noMatchFound);
        const matchSubscription = DeviceEventEmitter.addListener('match', matchFound);
        const gameOverSubscription = DeviceEventEmitter.addListener('gameOver', gameOver);
        return () => {
            noMatchSubscription.remove();
            matchSubscription.remove();
            gameOverSubscription.remove();
        }
    }, []);

    const matchFound = () => {
        if (isPlayer1PlayingRef.current) {
            setPlayer1Score(player1ScoreRef.current+1);
        }
        else {
            setPlayer2Score(player2ScoreRef.current+1);
        }
    };

    const noMatchFound = () => {
        if (isPlayer1PlayingRef.current) {
            setPlayer1Playing(false);
        }
        else {
            setPlayer1Playing(true);
        }
    };

    const gameOver = () => {
        navigation.navigate('done', {
            player1: {
                name: "Player 1",
                score: player1ScoreRef.current
            },
            player2: {
                name: "Player 2",
                score: player2ScoreRef.current
            }
        });
    };

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.scoreboard}>
                <View style={styles.playerScore}>
                    <Text>Player 1</Text>
                    <View style={ isPlayer1Playing ? [ styles.scoreTextContainer, { borderBottomColor: 'black' } ] : [ styles.scoreTextContainer, { borderBottomColor: 'transparent' } ] }>
                        <Text style={styles.scoreText}>{player1Score}</Text>
                    </View>
                </View>
                <View style={styles.playerScore}>
                    <Text>Player 2</Text>
                    <View style={ !isPlayer1Playing ? [ styles.scoreTextContainer, { borderBottomColor: 'black' } ] : [ styles.scoreTextContainer, { borderBottomColor: 'transparent' } ] }>
                        <Text style={styles.scoreText}>{player2Score}</Text>
                    </View>
                </View>
            </View>
                <CanvasComponent pkg={pkg} cells={cells} />
        </SafeAreaView>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    scoreboard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: hp(15)
    },
    playerScore: {
        flex: 1,
        alignItems: 'center'
    },
    scoreTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
    },
    scoreText: {
        fontSize: 72,
        fontWeight: 'bold'
    }
});

