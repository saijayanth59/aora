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
import { getCurrentUser, signInUser } from "../../lib/appwrite";
import { useAuthContext } from "../../context/AuthProvider";

const signIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { setUser, setIsLogged } = useAuthContext();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    try {
      if (!formData.email || !formData.password) {
        Alert.alert("Error", "Enter details");
        return;
      }
      setIsSubmitting(true);
      await signInUser(formData.email, formData.password);
      const result = await getCurrentUser();

      console.log("Sign In: ", result);
      setUser(result);
      setIsLogged(true);
      Alert.alert("Success", "User signed in successfully");

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
              onChange={(text) =>
                setFormData((prev) => ({ ...prev, email: text }))
              }
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
              title={"Sign In"}
              onPress={submit}
              loading={isSubmitting}
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
