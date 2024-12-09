import { View, Text } from "react-native";
import React from "react";
import { signOut } from "../../lib/appwrite";
import CustumButton from "../../components/CustumButton";

const home = () => {
  return (
    <View>
      <Text>home</Text>
      <CustumButton title={"push"} onPress={() => signOut()} />
    </View>
  );
};

export default home;
