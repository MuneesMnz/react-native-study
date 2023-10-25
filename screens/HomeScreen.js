import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation, route }) => {
  // const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>{route.params?.result}</Text>
      <Button
        title="Go To About"
        onPress={() =>
          navigation.navigate(
            "About"
            // { name: "mnz" }
          )
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
