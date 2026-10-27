import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  Button,
  Alert,
  Dimensions,
  ImageBackground,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";

import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./App/screens/WelcomeScreen";
import ViewImageScreen from "./App/screens/ViewImageScreen";
import Practice from "./App/screens/Practice";
import Product from "./App/screens/Product";
// import AppText from "./App/components/AppText";
export default function App() {
  // console.log(Dimensions.get("screen"));
  // const { landscape } = useDeviceOrientation();
  // const handlePress = () => console.log("clicked");
  // const Aler = () => Alert.alert("Hello");
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <Practice/>
    // <View
    //   style={{
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <View
    //     style={{
    //       backgroundColor: "orange",
    //       width: 200,
    //       height: 100,
    //       borderWidth: 5,
    //       borderColor: "black",
    //       borderRadius: 15,
    //       shadowColor: "blue",
    //       shadowOffset: { width: 10, height: 10 },
    //       shadowOpacity: 3,
    //       elevation:20

    //     }}
    //   ></View>
    // </View>
    // <Product/>
    <View style={styles.container}>
      {/* <Text
        style={{
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600",
          fontFamily: "Courier",
          color: "Gold",
        }}
      >
        I love React Native
      </Text> */}
      <Inicons name="love" style={{size:60}}/>
      {/* <AppText> I love React Native</AppText> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    ImageBackground: "",
  },
  bg: {
    width: 360,
    height: 800,
  },
  logo: {
    width: 200,
    height: 200,
    // align
  },
  // cards: {
  //   alignItems:"flex-start"
  // },
});

//   <View style={styles.container}>
//     <Text numberOfLines={1} onPress={handlePress}>
//       first App! The package version is especially relevant in Expo, because
//       Expo provides react-native-safe-area-context for this purpose.
//     </Text>
//     <TouchableNativeFeedback
//       onPress={() => {
//         console.log("clicked");
//         Aler();
//       }}
//     >
//       <Image
//         // blurRadius={}
//         fadeDuration={1000}
//         source={{
//           width: 200,
//           height: 200,

//           uri: "https://picsum.photos/200/300",
//         }}
//       />
//     </TouchableNativeFeedback>
//     <Button
//       title="Click me"
//       onPress={() =>
//         Alert.alert("My title", "Message", [{ text: "Yes" }, { text: "No" }])
//       }
//     />

//   </View>
// );
// <View style={styles.container}>

//   <Image
//     source={{
//       width: 150,
//       height: 150,
//       uri: "https://picsum.photos/id/237/200/300",
//     }}
//   />
//   <Text>John Doe</Text>
//   <Text numberOfLines={1}>React Native Developer</Text>
//   <Button
//     title="Show Alert"
//     onPress={()=> Alert.alert("Profile", "Hello John!")}
//   />
//   <StatusBar style="auto" />
// </View>

// <View style={styles.container}>
//   <View
//     styles={{
//       backgroundColor: "blue",
//       width: "100%",
//       height: landscape ? "100%": "30%",
//     }}
//   >
//     <Text>Testing</Text>
//   </View>
// </View>

// <View
//   style={{
//     backgroundColor: "ffff",
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "stretch",
//     alignContent: "center",
//     flexWrap: "wrap"
//   }}
// >
//   <View
//     style={{
//       backgroundColor: "dodgerblue",
//       flexBasis: 100,
//       // width: 100,
//       height: 100,

//       position: "relative"
//     }}
//   />
//   <View
//     style={{
//       backgroundColor: "gold",

//       width: 100,
//       height: 100,

//     }}
//   />

//   <View
//     style={{
//       backgroundColor: "tomato",

//       width: 100,
//       height: 100,
//     }}
//   />
//   <View
//     style={{
//       backgroundColor: "grey",

//       width: 100,
//       height: 100,
//     }}
//   />
//   <View
//     style={{
//       backgroundColor: "green",

//       width: 100,
//       height: 100,
//     }}
//   />
// </View>
// <View style={styles.container}>
//   <ImageBackground
//     source={require("../my-app/assets/unsplash.jpg")}
//     style={styles.bg}
//   />
//   <Image
//     source={require("../my-app/assets/logo.jpg")}
//     style={styles.logo}
//   />
//   <Text>Sell what you dont want </Text>

//     <View
//       style={{
//         backgroundColor: "tomato",
//         flex: 1,
//         alignSelf: "row",
//         width: 100,
//         height: 100,
//       }}
//     />
//     <View
//       style={{
//         backgroundColor: "green",
//         alignSelf: "row",
//         flex: 1,
//         width: 100,
//         height: 100,
//       }}
//     />
//   </View>
