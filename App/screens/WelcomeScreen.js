import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/unsplash.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image source={require("../assets/logo.jpg")} style={styles.logo} />
        <Text style={styles.text}>Sell what you don't need</Text>
      </View>

      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "tomato",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "dodgerblue",
  },
  logo: {
    width: 100,
    height: 100,
  },
  container: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
});
export default WelcomeScreen;
