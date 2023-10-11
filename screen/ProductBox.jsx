import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Rating, Icon } from "react-native-elements";

const ProductBox = ({ route, navigation }) => {
  const { image } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <View>
          <Image source={image} />
        </View>
        <View>
          <Text>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
          <View style={{ marginEnd: 50 }}>
            <Rating fractions={1} startingValue={5} imageSize={20} />
          </View>
          <View>
            <Text>(Xem 842 đánh giá)</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View style={{ marginEnd: 50 }}>
            <Text style={{ fontWeight: "bold" }}>1.799.000 đ</Text>
          </View>
          <View>
            <Text style={{ textDecorationLine: "line-through" }}>2.000.000 đ</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Text style={{ color: "red", marginEnd: 100 }}>Ở đâu rẻ hơn hoàn tiền</Text>
          <Icon name="help-outline"></Icon>
        </View>

        <View style={{ borderWidth: 1, width: "100%", height: 40, alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("ChooseColor")} style={{ width: "100%", alignItems: "center" }}>
            <Text>4 Màu - Chọn Màu </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ borderWidth: 1, width: "100%", height: 40, alignItems: "center", justifyContent: "center", marginTop: 50, backgroundColor: "red" }}>
        <TouchableOpacity style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>Chọn Mua</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    // alignItems: "center",
    backgroundColor: "white",
  },
});

export default ProductBox;
