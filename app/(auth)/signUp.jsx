import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Link, router } from "expo-router";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustumButton from "../../components/CustumButton";
import { createUser } from "../../lib/appwrite";
import { useAuthContext } from "../../context/AuthProvider";

const signUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setUser, setIsLogged } = useAuthContext();

  const submit = async () => {
    try {
      if (!formData.email || !formData.username || !formData.password) {
        Alert.alert("Error", "Full details");
        return;
      }
      // console.log(formData);
      setIsSubmitting(true);
      const result = await createUser(
        formData.email,
        formData.password,
        formData.username
      );

      setUser(result);
      setIsLogged(true);

      console.log("Sign Up: ", result);
      router.replace("/home");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full flex justify-center h-[100vh] px-4">
            <Image
              source={images.logo}
              resizeMode="contain"
              className="w-32 h-12"
            />
            <Text className="text-white text-3xl font-psemibold mt-5">
              Sign up to Aora
            </Text>
            <FormField
              title="Email"
              otherStyles={"mt-7"}
              value={formData.email}
              onChange={(text) => setFormData({ ...formData, email: text })}
            />
            <FormField
              title="Username"
              otherStyles={"mt-7"}
              value={formData.username}
              onChange={(text) => setFormData({ ...formData, username: text })}
            />
            <FormField
              title="Password"
              otherStyles={"mt-7"}
              value={formData.password}
              onChange={(text) =>
                setFormData((prev) => ({ ...prev, password: text }))
              }
            />
            <CustumButton
              containerStyles={"w-full mt-7"}
              title={"Sign Up"}
              onPress={submit}
              loading={isSubmitting}
            />
            <View className="flex justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Already have an account?{" "}
                <Link
                  href="/signIn"
                  className="text-secondary-200 text-xl font-psemibold"
                >
                  Sign In
                </Link>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default signUp;
