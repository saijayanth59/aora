import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import LastestVideos from "../../components/LastestVideos";
import Empty from "../../components/Empty";
import useAppWrite from "../../lib/useAppWrite";
import { getAllPosts } from "../../lib/appwrite";

const home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { data, refetch } = useAppWrite(getAllPosts);

  console.log(data);

  async function refresh() {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }

  return (
    <>
      <SafeAreaView className="bg-primary min-h-full">
        <FlatList
          data={data}
          keyExtractor={(item) => item.$id}
          renderItem={({ item }) => (
            <Text className="text-3xl">{item.$id}</Text>
          )}
          ListHeaderComponent={() => (
            <View className="flex my-6 px-5 space-y-6">
              <View className="flex flex-row justify-between items-start mb-5">
                <View className="space-x-1">
                  <Text className="font-pmedium text-sm text-green-100">
                    Welcome Back
                  </Text>
                  <Text className="text-3xl text-white font-psemibold">
                    Mahathi
                  </Text>
                </View>
                <View className="mt-1">
                  <Image
                    source={images.logoSmall}
                    resizeMode="contain"
                    className="w-10 h-10"
                  />
                </View>
              </View>
              <SearchInput />

              <LastestVideos />
            </View>
          )}
          ListEmptyComponent={() => (
            <Empty
              title={"No videos created"}
              subtitle={"grab a chance to be first uploader"}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} refresh={refresh} />
          }
        />
      </SafeAreaView>
    </>
  );
};

export default home;
