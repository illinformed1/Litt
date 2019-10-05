import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
import axios from "axios";
import publicIP from "react-native-public-ip";
import { CLIENT_ID, API_KEY } from "react-native-dotenv";
import Constants from "expo-constants";

export default function Yelp({ setSearchResults }) {
  const [location, setLocation] = useState("");

  const { manifest } = Constants;

  const uri = `http://${manifest.debuggerHost.split(":").shift()}:8080`;

  console.log(uri);

  let axiosTest = () => {
    axios.get(`${uri}`).then(res => console.log(res));
  };

  let getYelpData = () => {
    axios
      .get(`${uri}/yelp/coffee/${location}`)
      .then(res => {
        setSearchResults(res.data.splice(0, 5));
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.postionWrapper}>
      <View style={styles.buttonWrapper}>
        <TextInput
          style={styles.text}
          onChangeText={text => setLocation(text)}
          value={location}
        />
        <Button
          style={styles.button}
          title="test"
          onPress={() => axiosTest()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postionWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0
  },
  buttonWrapper: {
    flex: 1
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    backgroundColor: "#fff"
  }
});
