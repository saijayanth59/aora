import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustumButton = ({
  title,
  containerStyles,
  textStyles,
  onPress,
  loading,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`${containerStyles} ${
        loading ? "opacity-50" : ""
      } bg-secondary flex justify-center items-center flex-row min-h-[50px] mt-5 rounded-xl`}
    >
      <Text
        className={`text-primary font-psemibold text-lg ${textStyles} text-center`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustumButton;
