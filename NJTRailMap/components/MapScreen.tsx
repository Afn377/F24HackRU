import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const initialRegion = {
    latitude: 40.0583, // Latitude for New Jersey
    longitude: -74.4057, // Longitude for New Jersey
    latitudeDelta: 0.1, // Zoom level
    longitudeDelta: 0.1,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion} 
        // No provider prop needed
      >
        <Marker
          coordinate={{ latitude: 40.0583, longitude: -74.4057 }}
          title={"New Jersey"}
          description={"This is New Jersey!"}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
