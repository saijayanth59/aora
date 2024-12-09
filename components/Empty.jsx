import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustumButton from "./CustumButton";
import { router } from "expo-router";

const Empty = ({ title, subtitle }) => {
  return (
    <View className="flex justify-center items-center px-5 mt-5">
      <Image
        source={images.empty}
        resizeMode="contain"
        className="w-[230px] h-[190px]"
      />
      <Text className="text-sm font-pmedium text-gray-100">{title}</Text>
      <Text className="text-xl text-center font-psemibold text-white mt-2">
        {subtitle}
      </Text>
      <CustumButton
        title={"Back to explore"}
        onPress={() => router.push("/home")}
        containerStyles={"w-full"}
      />
    </View>
  );
};

export default Empty;
