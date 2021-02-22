/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Routes } from "./app/Routes";
import GameContext from './app/game.context'
import AnimalPackage from "./app/packages/animals";
import BasePackage from "./app/packages";
import { IMode } from "./app/models/mode.interface";

const App = () => {

  const [ currentPackage, setPackage ] = React.useState<BasePackage | undefined>(undefined);
  const changePackage = (pkg: BasePackage) => {
    setPackage(pkg);
  };

  const [ currentMode, setMode ] = React.useState<IMode>();
  const changeMode = (mode: IMode) => {
    setMode(mode);
  };

  return (
      <GameContext.Provider value={{ pkg: currentPackage, changePackage: changePackage, changeMode: changeMode }}>
        <Routes/>
      </GameContext.Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
