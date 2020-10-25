import React, { useState , useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  
  StatusBar,
  Text,
  ImageBackground,
   TextInput,
   Image,
   Button,
   Modal
} from 'react-native';
import WebView from 'react-native-webview';
import { color } from 'react-native-reanimated';
import zomato from '../screens/zomato';
const Dishes=(props)=>{
    console.log(props.url)
    return (
        <WebView source={{uri:props.url}} />
    )

}
export default Dishes;