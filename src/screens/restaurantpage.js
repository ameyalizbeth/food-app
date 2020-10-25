import React, { useState , useEffect } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
  StatusBar,
  Text,
  ImageBackground,
   TextInput,
   Image,
   Button
} from 'react-native';
import zomato from "./zomato.js";
import Restaurant from '../components/restaurant'
function cards(item){
    if(item.restaurant.thumb!==""){
    return <Restaurant key = {item.restaurant.id} id={item.restaurant.R.res_id} rating={item.restaurant.user_rating.aggregate_rating} image={item.restaurant.thumb} locality={item.restaurant.location.locality} timings={item.restaurant.timings} name={item.restaurant.name} />
    
    }
    
}
const Restaurantpage=(props)=>
{

    // console.log( props.route.params.namey);
    // const [name,setName] = useState("kottayam");
    const name=props.route.params.namey;
    const [rest,setRest] = useState(null);
    const [location,setLocation] = useState([]);
    const [cityId,setCityId] = useState(null);
    const [resId,setResId] = useState(null);
    
    // useEffect(()=>{
    //     if(props.navigation.route.params){
    //     setName(props.navigation.params.namey);
    //     }

    // });
    
    useEffect(() => {
        const getLocation = () => {
          zomato
          .get(`/cities?q=${name}`)
          .then(result=>setCityId(result.data.location_suggestions[0].id))
          
        }
        getLocation();
        
    },[name]);
    useEffect(() => {
        const getRes = () => {
          zomato
          .get(`/search?entity_id=${cityId}&entity_type=city`)
          .then(result => setRest(result.data))
        }
        if(cityId){
        getRes();
        }
      },[cityId]);    
      
    
    return(
        <View>
            <ScrollView>
            <View>

            { (rest===null)?<ActivityIndicator animating={true}/>:rest.restaurants.map(cards)}
            

            </View>
            </ScrollView>
        </View>


    );

};
export default Restaurantpage;