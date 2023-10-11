import { useState } from "react";
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from "react-native";

const ChooseColor = ({ navigation }) => {
  const [image, setImage] = useState(require("../assets/vs_blue.png"));

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 50, flexDirection: "row" }}>
        <Image source={image} resizeMode="contain" style={{ width: 150, height: 150 }}></Image>
        <Text>Điện thoại Vsmart Joy 3 - Chính Hãng</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "#ccc", alignItems: "center", justifyContent: "space-around" }}>
        <View style={{ width: 100, height: 100, backgroundColor: "#C5F1FB" }}>
          <TouchableOpacity
            onPress={() => {
              setImage(require("../assets/vs_blue.png"));
            }}
            style={{ width: "100%", height: "100%" }}
          ></TouchableOpacity>
        </View>
        <View style={{ width: 100, height: 100, backgroundColor: "#F30D0D" }}>
          <TouchableOpacity
            onPress={() => {
              setImage(require("../assets/vs_red.png"));
            }}
            style={{ width: "100%", height: "100%" }}
          ></TouchableOpacity>
        </View>
        <View style={{ width: 100, height: 100, backgroundColor: "#000000" }}>
          <TouchableOpacity
            onPress={() => {
              setImage(require("../assets/vs_black.png"));
            }}
            style={{ width: "100%", height: "100%" }}
          ></TouchableOpacity>
        </View>
        <View style={{ width: 100, height: 100, backgroundColor: "#234896" }}>
          <TouchableOpacity
            onPress={() => {
              setImage(require("../assets/vs_silver.png"));
            }}
            style={{ width: "100%", height: "100%" }}
          ></TouchableOpacity>
        </View>
        <View style={{ borderWidth: 1, width: "100%", height: 40, alignItems: "center", marginTop: 50, backgroundColor: "#1952E2" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ProductBox", {
                image: image,
              });
            }}
            style={{ width: "100%", alignItems: "center" }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>Xong</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChooseColor;
