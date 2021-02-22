import React from "react";
import {
    View,
    FlatList, StyleSheet, DeviceEventEmitter
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import CardComponent from "../components/card.component";
import { PackageItemInterface } from "../packages/package.interface";
import BasePackage from "../packages";

interface CanvasProps {
    pkg: BasePackage
    cells: number
}

const CanvasComponent: React.FC<CanvasProps> = ({ pkg, cells }) => {

    const [ item1, setItem1 ] = React.useState({});
    const [ item2, setItem2 ] = React.useState({});
    const [ matches, setMatches ] = React.useState(0);

    const onFlip = (item: PackageItemInterface) => {
        if (Object.keys(item1).length === 0) {
            setItem1(item);
        }
        else if (Object.keys(item2).length === 0) {
            setItem2(item);
            if (item1.id === item.id) {
                setMatches(matches+1);
                console.log("matches: ", matches);
                DeviceEventEmitter.emit('disable');
                DeviceEventEmitter.emit('match', { id: item.id });
                if (matches + 1 >= cells / 2) {
                    DeviceEventEmitter.emit('gameOver');
                }
            }
            else {
                DeviceEventEmitter.emit('disable');
                DeviceEventEmitter.emit('noMatch', { id1: item1.id, id2: item.id });
            }
            setItem1({});
            setItem2({});
        }
    }

    return (
        <FlatList
            style={style.main}
            data={pkg.gameItems}
            numColumns={5}
            renderItem={({item, index}) => (
                    <CardComponent item={item} onFlip={(item) => { onFlip(item) }} />
            )}
        />
    )
}

export default  CanvasComponent;

const style = StyleSheet.create({
    main: {
        marginLeft: wp(1.5),
        marginRight: wp(1.5),
        marginTop: hp(1),
        marginBottom: hp(1)
    }
});
