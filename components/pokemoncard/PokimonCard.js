import { Text, View, StyleSheet, Platform, Image } from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

const PokimonCard = ({ data }) => {
  const { borderColor, emoji } = getTypeDetails(data.type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.model}> {data.Model}</Text>
      </View>
      <Image
        source={data.image}
        accessibilityLabel={`${data.MOdel} porsche`}
        style={styles.image}
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor: borderColor }]}>
          <Text style={styles.emoji}>{emoji}</Text>
          <Text style={styles.typestyle}>{data.type}</Text>
        </View>
      </View>

      <Text style={styles.topspeedHead}>
        Top Speed : <Text style={styles.topspeedValue}>{data.topSpeed}</Text>
      </Text>
      <Text style={[styles.typestyle, { marginBottom: 10 }]}>Colors</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        {data.colors.map((item, ind) => (
          <View
            style={[styles.ColorRound, { backgroundColor: item }]}
            key={ind}
          ></View>
        ))}
      </View>
    </View>
  );
};

export default PokimonCard;

const styles = StyleSheet.create({
  card: {
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 10,
      },
    }),
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
  },
  model: {
    fontSize: 18,
  },
  image: {
    width: "100%",
    height: 200,
    marginVertical: 16,
    borderRadius: 10,
  },
  typeContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
    borderStyle: "solid",
  },
  emoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typestyle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  topspeedHead: {
    fontSize: 22,
    fontWeight: "500",
  },
  topspeedValue: {
    color: "red",
  },
  ColorRound: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
});
