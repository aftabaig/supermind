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

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

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
        <FlipCard style={ cleared === false ? [ styles.card, { backgroundColor: 'purple' } ] : [ styles.card, { backgroundColor: 'transparent' } ]}
                  clickable={false}
                  flip={revealed}
                  friction={6}
                  flipHorizontal={true}
                  flipVertical={false}>
            <View style={styles.cardButton}>
            <TouchableOpacity onPress={() => flip()}>
                <Image style={styles.cardImage}
                       source={ require("../assets/images/question.png") }
                />
            </TouchableOpacity>
            </View>
            <View style={styles.cardButton}>
                <TouchableHighlight>
                    <Image style={styles.cardImage}
                           source={ cleared == false ? item.image : null }
                    />
                </TouchableHighlight>
            </View>
        </FlipCard>
    );
};

export default CardComponent;

const styles = StyleSheet.create({
    card: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        width: wp(19.2),
        height: hp(8)
    },
    cardImage: {
        width: 50,
        height: 50
    },
    cardButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(19.2),
        height: hp(8)
    }
});
