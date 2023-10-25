import { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const AboutScreen = ({ route, navigation }) => {
  const { name } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen {name}</Text>
      <Button
        title="Update the Name"
        onPress={() =>
          navigation.setParams({
            name: "Muhammed Munees",
          })
        }
      />
      <View style={{ marginTop: 20 }}>
        <Button
          title="Go back with data"
          onPress={() =>
            navigation.navigate("Home", { result: "Data from about" })
          }
        />
      </View>
    </View>
  );
};

export default AboutScreen;

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
