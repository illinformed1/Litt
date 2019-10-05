import { StyleSheet, Text, View } from "react-native";

import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import Yelp from "./components/yelp";

export default function App() {
  const [searchResults, setSearchResults] = useState([]);

  let latlng = {
    latitude: -27.4699,
    longitude: 153.026708
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {searchResults.map(result => {
          return (
            <Marker coordinate={result.coordinates} title={`${result.name}`} />
          );
        })}
      </MapView>
      <Yelp setSearchResults={setSearchResults} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
