/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry,DeviceEventEmitter,Image,NavigatorIOS,ScrollView,StatusBar,StyleSheet,Text,TouchableHighlight,View } from 'react-native';
import Util from './utils/utils.js'
import MainView from './components/mainview.js'

export default class day4 extends Component {

  componentDidMount() {
    StatusBar.setBarStyle(0);
  }

  render() {
    return (
        <NavigatorIOS
            ref='nav'
            style={styles.container}
            initialRoute={{
                title:"React native coach",
                component: MainView,
                //backButtonTitle: 'back',
                shadowHidden: true,
            }}
            itemWrapperStyle={styles.itemWrapper}
            tintColor="#777"
        />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  itemWrapper:{
    backgroundColor: '#f3f3f3'
  }
});

AppRegistry.registerComponent('day4', () => day4);
