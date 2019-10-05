import React, { Component } from "react";
import MapView from "expo";
import { View } from "react-native";
import { Marker } from "react-native-maps";

export default function Map() {
  return (
    <View>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {/* {this.state.markers.map(marker => (
        <Marker
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
     /> */}
        ))}
      </MapView>
    </View>
  );
}
