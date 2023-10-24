import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  ActivityIndicator,
  Alert,
} from "react-native";
const logoImage = require("./assets/adaptive-icon.png");

const BasiscsStudy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "red", padding: 60 }}>
      {/* VIEW  */}
      {/* --------------- */}
      {/* VIEW IS LIKE A DIV ITS JUST FOR MAKING CONTAINER */}
      {/* <View style={{width:200,height:200,backgroundColor:"blue"}}> </View> */}
      {/* <View style={{width:200,height:200,backgroundColor:"green"}}></View> */}

      {/* TEXT  */}
      {/* ------------- */}
      {/*TEXT IS FOR SHOWING TEXT ITEMS IN NATIVE IF WE TYPE A CONTENT 
      WITHOUT TEXT TAG IT WILL GET ERROR WE ONLY PRINT CONTINT WITH ONLY TEXT */}
      {/* <Text>
        <Text style={{ color: "white" }}>Hello</Text> world
      </Text> */}

      {/* IMAGE  */}
      {/* -------------- */}
      {/* <Image source={logoImage} style={{ width: 300, height: 300 }} />
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D",
        }}
        style={{ width: 300, height: 300 }}
      /> */}

      {/* BACKGROUND IMAGES  */}
      {/* ------------------------- */}
      {/* <ImageBackground source={logoImage} style={{ flex: 1 }}>
        <Text>Hello world</Text>
      </ImageBackground> */}

      {/* SCROLL VIEW  */}
      {/* ------------------- */}

      {/* IN NATIVE VIEW CANNOT SCROLL OVERFLOW CONTENT IT WILL 
      HIDE IT BUT WE WRAPP WITH SCROLL VIEW IT CAN SCROLL  */}
      {/* <ScrollView>
        <Image source={logoImage} style={{ width: 300, height: 300 }} />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Image source={logoImage} style={{ width: 300, height: 300 }} />
      </ScrollView> */}

      {/* BUTTONS  */}
      {/* ------------- */}
      {/* <Button title="click" onPress={()=>console.log("On Click")} color={"midnightblue"} disabled /> */}

      {/* PRESSABLE  */}
      {/* ------------------ */}
      {/* THIS IS USING FOR PRESSING IMAGES TEXT ETC... AND MAKE ACTIONS  */}
      {/* <Pressable onPress={()=>console.log("Image pressed")}>
        <Image source={logoImage} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Pressable onPress={()=>console.log("Text pressed")}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Pressable> */}

      {/* MODAL  */}
      {/* ------------- */}

      {/* <Button
        title="Open"
        color={"lightblue"}
        onPress={() => setIsModalOpen(true)}
      />
      <Modal
        visible={isModalOpen}  //open or close
        onRequestClose={() => setIsModalOpen(false)}  //when we click back
        animationType="slide" //slide or fade for animation default will be none
        presentationStyle="fileSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightgreen", padding: 60 }}>
          <Text>Modal Content</Text>
          <Button
            title="Close"
            color={"midnightblue"}
            onPress={() => setIsModalOpen(false)}
          />
        </View>
      </Modal> */}

      {/* STATUS BAR  */}
      {/* --------------- */}
      {/* <StatusBar backgroundColor="lightgreen"  barStyle="light-content" hidden />  */}

      {/* ACTIVITY INTICATOR (SLIDER) */}
      {/* ----------------------------- */}

      {/* <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color={"midnightblue"} /> */}
      {/* Hidden */}
      {/* <ActivityIndicator size="large" color={"midnightblue"} animating={false} />   */}

      {/* ALERT  */}
      {/* ------------ */}

      {/* JUST SHOWING ALERT FROM THE APP  */}
      {/* <Button title="Alert" onPress={() => Alert.alert("Invalid Data")} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert("Invalid Data", "Name is not Included")}
      /> */}
      {/* CONFIGURE ALLERT BUTTONS IN ANDROID ONLY 3 BUTTONS AVAILABLE IN ALERT   */}
      {/* <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert("Invalid Data", "DOB incorrect", [
            {
              text: "Cancel",
              onPress: () => console.log("cancel press"),
            },
            {
              text: "Ok",
              onPress: () => console.log("Ok press"),
            },
            {
              text: "Ok2",
              onPress: () => console.log("Ok2 press"),
            },
            {
              text: "Ok3",
              onPress: () => console.log("Ok3 press"),
            },
          ])
        }
      /> */}
    </View>
  );
};

export default BasiscsStudy;
