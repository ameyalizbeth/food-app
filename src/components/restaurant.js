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
import Dishes from './dishes'
const Restaurant=(props)=>{
  const [modalv,setModalv] = useState(false);
  const res_id = props.id;
  const [url,setUrl] = useState('');
  useEffect(() => {
    const getMenu = () => {
      zomato
      .get(`/restaurant?res_id=${res_id}`)
      .then(result => setUrl(result.data.menu_url))
    }
    getMenu();
    } ,[res_id]);
  
  return(
    
    <View>
      
       <Image source={{uri:props.image}} style={styles.boxes} >  
        
        


     </Image>  
          {/* <Text>IMAGE GOES HERE</Text> */}
      
      <View style={styles.text}>
      <Text>{props.name}</Text>
      <Text>{props.locality}</Text>
      <Text>Rating:{props.rating}</Text>
        <Text>Timings:{props.timings}</Text>
        
        

      </View>
      <Button style={{width:20,}} title="view" onPress={()=>{
          setModalv(true);
        }}/>
        <View>
          <Modal animationType="slide" visible={modalv} style={{flex:1}}>
            <Dishes url={url}/>
            <Button title="Go Back" onPress={()=>{
          setModalv(false);
        }} />
          </Modal>

        </View>
    </View>
     
    
    
    

  );
};
const styles = StyleSheet.create({
  
  engine: {
    position: 'absolute',
    right: 0,
  },
  
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
   
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
   
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  boxes:{
    margin:10,
    marginBottom:0,
    height:200,
    width:370,
    // backgroundColor:'#6ED4C8',
    
  },
  text: {
    margin:50,
    marginTop:0,
    marginLeft:18,
    height:50,
    width:350,


  }
});

export default Restaurant;
