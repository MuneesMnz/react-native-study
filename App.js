import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import PokimonCrad from "./components/pokemoncard/PokimonCard";

const App = () => {
  const data = [
    {
      name: "911 Special Edition",
      Model: "2021",
      image: require("./assets/porsche-1.jpg"),
      type: "fire",
      topSpeed: 250,
      colors: ["red", "green", "gray", "yellow"],
    },
    {
      name: "Boxter",
      Model: "2022",
      image: require("./assets/porsche-2.jpeg"),
      type: "water",
      topSpeed: 230,
      colors: ["red", "green", "yellow"],
    },
    {
      name: "Carrera",
      Model: "2023",
      image: require("./assets/porsche-3.jpeg"),
      type: "fire",
      topSpeed: 260,
      colors: ["red", "green", "gray", "yellow","blue","purple","black"],
    },
    {
      name: "Cayenne",
      Model: "2020",
      image: require("./assets/porsche-4.jpeg"),
      type: "grass",
      topSpeed: 200,
      colors: ["yellow","red", "green", "blue", "white","black"],
    },
    {
      name: "Taycan",
      Model: "2022",
      image: require("./assets/porsche-5.jpeg"),
      type: "electric",
      topSpeed: 280,
      colors: ["black","red", "green", "gray", "yellow"],
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {data.map((item, ind) => (
          <PokimonCrad data={item} key={ind} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
});
