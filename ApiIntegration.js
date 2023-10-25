import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  Text,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";

const ApiIntegration = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (limit = 10) => {
    try {
      const responce = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data = await responce.json();
      setPostList(data);
      setIsLoading(false);
      setError("");
    } catch (err) {
      console.log("error");
      setIsLoading(false);
      setError("Failed to fetch post list");
    }
  };

  useEffect(() => {
    fetchData(10);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };

  const addPost = async () => {
    setIsPosting(true);
    try {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: postTitle,
            body: postBody,
          }),
        }
      );

      const newPOst = await responce.json();
      setPostList([newPOst, ...postList]);
      setPostTitle("");
      setPostBody("");
      setIsPosting(false);
    } catch (err) {
      setIsPosting(false);
      setError("Failed of Adding Post ");
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={Styles.loadingContainer}>
        <ActivityIndicator size={"large"} color={"blue"} />
        <Text>Loading....</Text>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={Styles.container}>
        {error ? (
          <View>
            <Text>{error}</Text>
          </View>
        ) : (
          <>
            <View style={Styles.inputContainer}>
              <Text style={Styles.label}>Title</Text>
              <TextInput
                style={Styles.input}
                placeholder="Title"
                value={postTitle}
                onChangeText={setPostTitle}
              />
              <Text style={Styles.label}>Body</Text>
              <TextInput
                style={Styles.input}
                placeholder="Body"
                value={postBody}
                onChangeText={setPostBody}
              />
              <Button
                style={Styles.button}
                title={isPosting ? "Adding..." : "Add Post"}
                color={"green"}
                onPress={addPost}
                disabled={isPosting}
              />
            </View>
            <View style={Styles.list}>
              <FlatList
                data={postList}
                ListEmptyComponent={<Text>No data Found</Text>}
                ListHeaderComponent={
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 24,
                      marginBottom: 20,
                    }}
                  >
                    Post List
                  </Text>
                }
                renderItem={({ item }) => {
                  return (
                    <View style={Styles.card}>
                      <Text style={Styles.Title}>{item.title}</Text>
                      <Text style={Styles.body}>{item.body}</Text>
                    </View>
                  );
                }}
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    );
  }
};

export default ApiIntegration;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    elevation: 5,
  },
  Title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 10,
  },
  body: {
    color: "gray",
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    alignSelf: "flex-start",
    width: "100%",
    padding: 20,
    backgroundColor: "white",
  },
  label: {
    fontSize: 22,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    height: 50,
    backgroundColor: "white",
    padding: 15,
    borderStyle: "solid",
    marginBottom: 15,
  },
  button: {
    borderRadius: 5,
  },
});
