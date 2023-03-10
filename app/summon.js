import { View, Text, Button, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import React, { useRef } from'react';

const SummonScreen = () => {
  const mapRef = useRef(null);

  const floridaRegion = {
    latitude: 25.761681,
    longitude: -80.191788,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const goToFlorida = () => {
    mapRef.current.animateToRegion(
      floridaRegion, 3 * 1000
    );
  }

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={floridaRegion}
        showsUserLocation={true}
        ref={mapRef}
      >
        <Marker 
          coordinate={floridaRegion}
          pinColor="green"
        />
      </MapView>
      <View style={styles.header}>
       <Button title="Go to Florida" onPress={goToFlorida} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      header: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#eee',
        marginBottom: 8,
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
});

export default SummonScreen