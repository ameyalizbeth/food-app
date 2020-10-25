import React, { useState , useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  
  ImageBackground,
   TextInput,
   Image
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker} from "@react-native-community/picker";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Homescreen= ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState();
  
  
   
  return (
  
      <View style={{flex: 1}}>
      
         <ImageBackground source={require('./images/bg.png') } style={{width:'100%',height:'100%'}}>
         <Picker  placeholder="select a city" selectedValue={selectedValue}
        style={{ height: 50, width: 150,flex:1 }}
        onValueChange={(itemValue, itemIndex) =>{ 
        
            setSelectedValue(itemValue);
            navigation.navigate({name:'restaurants',params:{namey:itemValue},key:itemIndex})
            

        } }>
        
        <Picker.Item label="kottayam" value="kottayam" key="1" />
        <Picker.Item label="ernakulam" value="ernakulam" key="2" />
        <Picker.Item label="TRIVANDRUM" value="TRIVANDRUM" key="3" />
      </Picker>
         
         
      
    
         
           

         </ImageBackground>
      
     
      </View>
      
    
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

export default Homescreen;