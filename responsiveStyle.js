import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
  SafeAreaView,
  Platform,
  Alert,
} from "react-native";
import CustomBtton from "./components/CustomButton/CustomBtton";

export default function ResponsiveStyle() {
  // RESPONCIVE STYLES USING DIMENTIONS (PHONE ROTATION INCLUDED)
  // --------------------------------------------------------------
  // const [dimention, setDimention] = useState({
  //   window: Dimensions.get("window"),
  // });

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener("change", ({ window }) => {
  //     setDimention({ window });
  //   });
  //   return () => subscription?.remove();
  // });

  // const { window } = dimention;
  // const windowWidth = window.width;
  // const windowHeight = window.height;

  // RESPONCIVE STYLES USING USEWINDOWDIMENTIONS() HOOK (PHONE ROTATION INCLUDED)
  // const windowWidth = useWindowDimensions().width;
  // const windowHeight = useWindowDimensions().height;

  return (
    //While using Dimentions the code is below
    // <View style={styles.container}>
    //   <View
    //     style={[
    //       styles.box,
    //       {
    //         width: windowWidth > 500 ? "70%" : "90%",
    //         height: windowHeight > 500 ? "60%" : "70%",
    //       },
    //     ]}
    //   >
    //     <Text
    //       style={{
    //         fontSize: windowWidth > 500 ? 50 : 25,
    //       }}
    //     >
    //       Welcome !
    //     </Text>
    //   </View>
    // </View>
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome !</Text>
          <CustomBtton title="hello" onPress={() => alert("asas")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;
// console.log(windowHeight, "windowHeight");
// console.log(windowWidth, "windowWidth");

const styles = StyleSheet.create({
  safearea: { flex: 1, backgroundColor: "plum" },
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "ios" ? 20 : 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
  box: {
    // backgroundColor: "lightblue",
    // alignItems: "center",
    // justifyContent: "center",
    // borderRadius: 15,
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "red",
        fontSize: 25,
        fontStyle: "italic",
      },
      android: {
        color: "blue",
        fontSize: 35,
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});
