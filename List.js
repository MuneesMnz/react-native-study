import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    FlatList,
    SectionList,
  } from "react-native";
  import PokimonCardParent from "./components/PokimonCardParent";
  import PokimonList from "./data.json";
  import GroupedData from "./grouped-data.json";
  
  const List = () => {
    return (
      <SafeAreaView style={styles.container}>
        {/* <ScrollView style={styles.ScrollView}>
          {PokimonList.map((pokemon) => {
            return (
              <View key={pokemon.id} style={styles.card}>
                <Text style={styles.cardText}>{pokemon.type}</Text>
                <Text style={styles.cardText}>{pokemon.name}</Text>
              </View>
            );
          })}
        </ScrollView> */}
        <View style={styles.ScrollView}>
          {/* <FlatList
            data={PokimonList}
            // data={[]}
            renderItem={({ item }) => {
              // console.log(item.id);
              return (
                <View key={item.id} style={styles.card}>
                  <Text style={styles.cardText}>{item.type}</Text>
                  <Text style={styles.cardText}>{item.name}</Text>
                </View>
              );
            }}
            // horizontal
            keyExtractor={(item, ind) => item.id.toString()}
            ItemSeparatorComponent={<View style={{ marginBottom: 20 }} />}
            ListEmptyComponent={<Text>No Items Found</Text>}
            ListHeaderComponent={
              <Text style={styles.headerStyles}>Pokemon List</Text>
            }
            ListFooterComponent={
              <Text style={styles.footerText}> End Of Text</Text>
            }
          /> */}
          <SectionList
            sections={GroupedData}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <Text style={styles.cardText}>{item}</Text>
                </View>
              );
            }}
            renderSectionHeader={({ section }) => {
              return <Text style={styles.SectionHeader}>{section.type}</Text>;
            }}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default List;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
      // alignItems: "center",
      // justifyContent:"center",
      paddingTop: StatusBar.currentHeight,
    },
    ScrollView: {
      paddingHorizontal: 16,
    },
    card: {
      padding: 16,
      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: "white",
      // marginBottom: 16,
    },
    cardText: {
      fontSize: 30,
    },
    headerStyles: {
      fontSize: 35,
      marginBottom: 25,
      textAlign: "center",
    },
    footerText: {
      fontSize: 20,
      marginVertical: 20,
      textAlign: "center",
    },
    SectionHeader: {
      backgroundColor: "white",
      fontSize: 24,
      fontWeight: "bold",
    },
  });
  