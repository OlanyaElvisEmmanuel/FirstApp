import React from "react";
import { View, StyleSheet, Image } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.detailButton} />
      <View style={styles.closeButton} />
      <Image
        resizeMode="contain"
        source={require("../assets/welcome.jpg")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 500,
    height: 500,
  },
  buttons: {
    flexDirection: "row",
    alignContent: "space-between",

    justifyContent: "flex-end",
  },
  detailButton: {
    backgroundColor: "dodgerblue",
    position: "absolute",
    width: 50,
    height: 50,
    top: 20,
    left: 40,
  },
  closeButton: {
    backgroundColor: "tomato",
    position: "absolute",
    width: 50,
    height: 50,
    top: 20,
    right: 40,
  },
});

export default ViewImageScreen;
