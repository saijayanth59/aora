import { ScrollView, View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustumButton from "../components/CustumButton";
import { router, Redirect } from "expo-router";
import { useAuthContext } from "../context/AuthProvider";

const App = () => {
  const { loading, isLogged } = useAuthContext();

  if (!loading && isLogged) {
    return <Redirect href={"/home"} />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full flex justify-center items-center h-[90vh] px-4">
            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />

            <Image
              source={images.cards}
              resizeMode="contain"
              className="max-w-[280px] h-[298px] w-full"
            />

            <View className="relative">
              <Text className="text-gray-100 text-3xl font-bold text-center">
                Discover Endless{"\n"}
                Possibilities with{" "}
                <Text className="text-secondary-200">Aora</Text>
              </Text>
              <Image
                source={images.path}
                className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                resizeMode="contain"
              />
            </View>

            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with Aora
            </Text>

            <CustumButton
              containerStyles={"w-full"}
              title={"Continue with email"}
              onPress={() => router.push("/signIn")}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
