import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const validationForm = () => {
    let errors = {};
    if (!name) errors.name = "User Name is required";
    if (!password) errors.password = "Password is required";
    setError(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validationForm()) {
      console.log("Submitted", name, password);
      setName("");
      setPassword("");
      setError({});
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : ""}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.container}
    >
      <View style={styles.form}>
        <Image
          source={require("./assets/adaptive-icon.png")}
          style={styles.image}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter Your Username"
          style={styles.input}
        />
        {error.name ? <Text style={styles.error}>{error.name}</Text> : null}
        <Text style={styles.label}>password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter Your Password"
          style={styles.input}
          secureTextEntry
        />
        {error.password ? (
          <Text style={styles.error}>{error.password}</Text>
        ) : null}

        <Button
          title="Submit"
          onPress={() => {
            handleSubmit();
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 50,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
