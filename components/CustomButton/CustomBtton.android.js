import { Pressable, Text } from "react-native";

const CustomBtton = ({ onPress, title }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        borderRadius: 20,
        padding: 10,
      }}
    >
      <Text style={{ color: "blue", fontSize: 18 }}>{title}</Text>
    </Pressable>
  );
};

export default CustomBtton;
