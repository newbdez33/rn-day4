'use strict';
import React,{ Component } from 'react';
import { StyleSheet,Text,TouchableHighlight,View,ScrollView,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../utils/utils.js'
import TwitterDemo from './twitter.js'

export default class MainView extends Component {
  constructor() {
    super();
    this.state = {
      days:[{
          key:0,
          title:"Twitter Demo",
          component: TwitterDemo,
          isFA: false,
          icon: "logo-twitter",
          size:50,
          color:"#2aa2ef",
          hideNav: true,
      }]
    }
  }

  _jumpToDay(index){
    this.props.navigator.push({
      title: this.state.days[index].title,
      component: this.state.days[index].component,
      navigationBarHidden: this.state.days[index].hideNav,
    })
  }

  render() {
    var onThis = this;
    var boxs = this.state.days.map(function(elem, index) {
      return(
        <TouchableHighlight key={elem.key} style={[styles.touchBox, index%3==2?styles.touchBox2:styles.touchBox1]} underlayColor="#eee" onPress={()=> onThis._jumpToDay(index)}>
            <View style={styles.boxContainer}>
                <Text style={styles.boxText}>{elem.title}</Text>
                <Icon size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></Icon>
          </View>
        </TouchableHighlight>
      );
    })
    return(
      <ScrollView>
          <View style={styles.touchBoxContainer}>
              {boxs}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  touchBox:{
    width: Util.size.width/3-0.33334,
    height:Util.size.width/3,
    backgroundColor:"#fff",
  },
  touchBoxContainer:{
    flexDirection: "row",
    flexWrap:"wrap",
    width: Util.size.width,
    borderTopWidth: Util.pixel,
    borderTopColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox1:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox2:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
  },
  boxContainer:{
    alignItems:"center",
    justifyContent:"center",
    width: Util.size.width/3,
    height:Util.size.width/3,
  },
  boxIcon:{
    position:"relative",
    top:-10
  },
  boxText:{
    position:"absolute",
    bottom:15,
    width:Util.size.width/3,
    textAlign:"center",
    left: 0,
    backgroundColor:"transparent"
  },
  slide: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideText:{
    position:"absolute",
    bottom: 0,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"rgba(255,255,255,0.5)",
    width: Util.size.width,
    textAlign:"center",
    fontSize: 12
  },
  image:{
    width: Util.size.width,
    flex: 1,
    alignSelf: 'stretch',
  }
});
