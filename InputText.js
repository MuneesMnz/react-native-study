import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Switch,
} from "react-native";

const InputText = () => {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
        autoCorrect={false}
        autoCapitalize="none"
        // secureTextEntry //for password
        // keyboardType="numeric" //this is for type of keayboard like number,text,email etcc..
      />
      <TextInput
        style={[styles.input, styles.multilineText]}
        placeholder="message"
        multiline
      />
      <Text style={styles.text}>my Name is {name}</Text>
      <View style={styles.SwitchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((prev) => !prev)}
          trackColor={{ false: "#767577", true: "lightgreen" }}
          thumbColor={"#f4f3f4"}
        />
      </View>
    </SafeAreaView>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    padding: 10,
  },
  input: {
    height: 40,
    padding: 12,
    borderWidth: 1,
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  SwitchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
