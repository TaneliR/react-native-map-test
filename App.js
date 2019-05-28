import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';

import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';



export default class App extends React.Component {

  state = {
    userLocation: null,
    usersPlaces: []
  }

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0522,
          longitudeDelta: 0.0421
        }
      });
    }, err => console.log(err));
  }
  
  getUserPlacesHandler = () => {
    let dummyData = [
      {
        latitude:62.2414166,
        longitude:25.7597235
      },
      {
        latitude:62.2424166,
        longitude:25.7537235
      },
      {
        latitude:62.2404166,
        longitude:25.7577235
      },
      {
        latitude:62.2454166,
        longitude:25.7507235
      },
      {
        latitude:62.2410166,
        longitude:25.7507235
      },
    ]
    this.setState({
      usersPlaces: dummyData
    })
  }
      /*
        <SketchCanvas
            style={{ flex: 1 }}
            strokeColor={'red'}
            strokeWidth={7}
            />


                 <View>
          
        </View>
      */
  render() {
    return (
      <View style={styles.container}>
        <UsersMap
            userLocation={this.state.userLocation} 
            usersPlaces={this.state.usersPlaces}/>
            
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Button title="Get User Places" onPress={this.getUserPlacesHandler}/>      
          <FetchLocation onGetLocation={this.getUserLocationHandler}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
});
