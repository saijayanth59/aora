import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const Post = ({
  item: {
    prompt,
    title,
    thumbnail,
    video,
    user: { username, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);
  //   console.log(thumbnail);
  return (
    <>
      <View className="flex items-center px-5 mb-14 flex-1">
        <View className="flex flex-row  items-start gap-3">
          <View className="w-[45px] h-[45px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="contain"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1 mt-1">
            <Text
              className="font-psemibold text-sm text-white"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text className="text-sm text-gray-100 font-pregular">
              {username}
            </Text>
          </View>
          <View className="p-2 mt-1">
            <Image
              source={icons.menu}
              resizeMode="contain"
              className="w-5 h-5"
            />
          </View>
        </View>
        {play ? (
          <Text className="text-xl text-gray-100">Playing</Text>
        ) : (
          <>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setPlay(true)}
              className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
            >
              <Image
                source={{ uri: thumbnail }}
                className="w-full h-full rounded-xl mt-3"
                resizeMode="cover"
              />

              <Image
                source={icons.play}
                className="w-12 h-12 absolute"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
};

export default Post;
