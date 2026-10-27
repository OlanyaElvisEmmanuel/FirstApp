import React from "react";
import { View, StyleSheet, Image, Text, Button } from "react-native";

function Product(props) {
  return (
    <View style={styles.container}>
      <View style={styles.card1}>
        <Image source={require("../assets/product.png")} style={styles.image} />
        <Text
          style={{
            textDecorationStyle: "solid",
            marginBottom: 10,
            fontWeight: "bold",
          }}
        >
          Wireless Headphones
        </Text>
        <Text
          style={{
            color: "green",
            textDecorationStyle: "solid",
            marginBottom: 10,
            fontWeight: "bold",
          }}
        >
          UGX 50,000
              </Text>
              
        <Button
          style={{
            width: 50,
            height: 40,
            borderRadius: 20,
            // alignSelf: "",
            // position:'absolute',
            // bottom: 100,
          }}
          title="BUY NOW"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  card1: {
    width: 300,
    height: 300,
    backgroundColor: "#fff",
    alignSelf: "center",
    shadowColor: "grey",
    elevation: 15,
    padding: 10,
    borderRadius: 20,
  },
  image: {
    width: 250,
    height: 150,
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 0.1,
    marginBottom: 20,
  },
});

export default Product;
