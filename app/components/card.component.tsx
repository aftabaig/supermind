import * as React from "react";
import {
    DeviceEventEmitter,
    Image,
    ImageSourcePropType,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";
import RNFetchBlob from "rn-fetch-blob";
import FlipCard from "react-native-flip-card";
import { PackageItemInterface } from "../packages/package.interface";

interface CardProps {
    item: PackageItemInterface
    onFlip: (item: PackageItemInterface) => {}
}

const CardComponent: React.FC<CardProps> = ({ item, onFlip }) => {

    const [ revealed, setRevealed ] = React.useState(false);
    const [ cleared, setCleared ] = React.useState(false);
    const [ disabled, setDisabled ] = React.useState(false);

    React.useEffect(() => {
        const noMatchSubscription = DeviceEventEmitter.addListener('noMatch', noMatch);
        const matchSubscription = DeviceEventEmitter.addListener('match', match);
        const enableSubscription = DeviceEventEmitter.addListener('enable', enable);
        const disableSubscription = DeviceEventEmitter.addListener('disable', disable);
        return () => {
            noMatchSubscription.remove();
            matchSubscription.remove();
            enableSubscription.remove();
            disableSubscription.remove();
        }
    }, []);

    const match = (e) => {
        if (item.id === e.id) {
                setCleared(true);
                DeviceEventEmitter.emit('enable');
        }
    };

    const noMatch = (e) => {
        if (item.id == e.id1 || item.id == e.id2) {
            setDisabled(true);
            setTimeout(() => {
                setRevealed(false);
                DeviceEventEmitter.emit('enable');
            }, 1000);
        }
    };

    const disable = () => {
        setDisabled(true);
    };

    const enable = () => {
        setDisabled(false);
    };

    const flip = () => {
        if (!disabled) {
            setRevealed(true);
            disable();
            onFlip(item);
        }
    };

    return (
        <FlipCard style={ cleared === false ? [ styles.card, { backgroundColor: '#c58c85' } ] : [ styles.card, { backgroundColor: 'transparent' } ]} clickable={false} flip={revealed} friction={6}>
            <TouchableOpacity style={styles.cardButton} onPress={ () => flip() }>
                <Image style={styles.cardImage} source={ require("../assets/images/question.png") } />
            </TouchableOpacity>
            <TouchableHighlight style={styles.cardButton}>
                <Image style={styles.cardImage} source={ cleared == false ? item.image : null } />
            </TouchableHighlight>
        </FlipCard>
    );
};

export default CardComponent;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 5,
        padding: 10,
        alignItems: 'center',
        borderRadius: 2,
    },
    cardImage: {
        width: 50,
        height: 50
    },
    cardButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50
    }
});
