import { Text, View, StyleSheet } from "react-native";

const styleApi = () => {
  return (
    <View style={styles.container}>
      <View style={styles.darkmode}>
        <Text style={styles.darkModeText}>
          Style Inherit <Text style={styles.boldText}>In Bold</Text>
        </Text>
      </View>
      {/* wee can add more than one styles using array */}
      <View style={[styles.lightblueBg, styles.box, styles.boxShadow]}>
        <Text style={{ borderRadius: 5, backgroundColor: "green" }}>
          Lightblue Box
        </Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
        <Text>Lightgreen Box</Text>
      </View>
      <View style={styles.containerFlex}>
        <Box style={{ backgroundColor: "#8e9b00", top: 75, left: 75 }}>
          Box 1
        </Box>
        <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
        <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
        <Box
          style={{
            backgroundColor: "#ab9156",
            position: "absolute",
            top: 100,
            left: 100,
          }}
        >
          Box 4
        </Box>
        <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
        <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
        <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  darkmode: { backgroundColor: "black" },
  darkModeText: { color: "white" },
  boldText: { fontWeight: "bold" },

  container: { flex: 1, backgroundColor: "red", padding: 60 },
  containerFlex: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: "blue",
    flex: 1,
  },
  box: {
    width: 250,
    height: 250,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    backgroundColor: "pink",
    borderWidth: 2,
    borderColor: "purple",
    borderStyle: "solid",
    borderRadius: 10,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  //shadow property not work in android only work ios
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },

  //with elivetion we can apply shadow
  androidShadow: {
    elevation: 10,
  },
});

export default styleApi;
