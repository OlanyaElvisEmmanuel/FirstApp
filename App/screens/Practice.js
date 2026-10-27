import React from "react";
import { View, Image, StyleSheet, Text, Button } from "react-native";

function Practice(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>MY PRODUCTS</Text>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/welcome.jpg")}
      />
      <Text style={styles.ProductName}>
        Product Name Short description of the product goes here...
      </Text>
<Button title="BUY"/>
      <View style={{ backgroundColor: "grey", width: 50, height: 50}} />
      <Text> UGX 50,000 </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignContent: "center",
  },
  name: {
    position: "absolute",
    top: 50,
    alignSelf: "center",
  },
  image: {
    width: 300,
    height: 500,
    top: 50,
    alignSelf: "center",
  },
  ProductName: {
    position: "relative",
  },
});

export default Practice;
