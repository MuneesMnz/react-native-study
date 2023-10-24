import { View, Text, StyleSheet } from "react-native";

const Box = ({ children, style }) => {
  return (
    <View style={[styles.boxItem, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  boxItem: {
    backgroundColor: "#fff",
    padding: 20,
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
