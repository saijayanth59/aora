import { View, Text, FlatList } from "react-native";
import React from "react";

const LastestVideos = () => {
  return (
    <>
      <Text className="mt-8 text-sm text-gray-200 font-pmedium">
        Treding Videos
      </Text>
      <FlatList
        data={[{ id: 1 }, { id: 2 }]}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text className="text-3xl">{item.id}</Text>}
      />
    </>
  );
};

export default LastestVideos;
