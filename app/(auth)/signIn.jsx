import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Link, router } from "expo-router";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustumButton from "../../components/CustumButton";

const signIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full flex justify-center h-[90vh] px-4">
            <Image
              source={images.logo}
              resizeMode="contain"
              className="w-32 h-12"
            />
            <Text className="text-white text-3xl font-psemibold mt-5">
              Log in to Aora
            </Text>
            <FormField
              title="Email"
              otherStyles={"mt-7"}
              value={formData.email}
              onChange={(text) => setFormData({ ...formData, email: text })}
            />
            <FormField
              title="Password"
              otherStyles={"mt-7"}
              value={formData.password}
              onChange={(text) => setFormData({ ...FormField, password: text })}
            />
            <CustumButton
              containerStyles={"w-full mt-7"}
              title={"Sign In"}
              onPress={() => router.push("/signIn")}
            />
            <View className="flex justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Don't have an account?{" "}
                <Link
                  href="/signUp"
                  className="text-secondary-200 text-xl font-psemibold"
                >
                  Sign up
                </Link>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default signIn;
