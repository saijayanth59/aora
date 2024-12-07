import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

const App = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-plight">Home Page</Text>
      <Link href="/home" className="text-blue-500">
        Go to home
      </Link>
    </View>
  );
};

export default App;
