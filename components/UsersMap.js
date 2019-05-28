import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MapView from 'react-native-maps';

import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';

const usersMap = props => {
    let userLocationMarker = null;

    if (props.userLocation)
    {
        userLocationMarker = <MapView.Marker coordinate={props.userLocation}/>
    }
    const usersMarkers = props.usersPlaces.map((userPlace, i) => (
    <MapView.Marker coordinate={{latitude:userPlace.latitude, longitude:userPlace.longitude}} key={i} />));

    return (
        <View style={styles.mapContainer}>
            <MapView 
            initialRegion={{
                latitude: 62.2414166,
                longitude: 25.7597235,
                latitudeDelta: 0.0522,
                longitudeDelta: 0.0421,
            }}
            region={props.userLocation}
            style={styles.map}>
            {usersMarkers}
            {userLocationMarker}
            </MapView>
            <View style={styles.overlay}>
                <SketchCanvas
                style={{ flex: 1 }}
                strokeColor={'red'}
                strokeWidth={7}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: '80%'
    },
    map: {
        width: '100%',
        height: '80%'
    },
    overlay: {
        position:'absolute',
        bottom: 100,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0)',
    }
})

export default usersMap;