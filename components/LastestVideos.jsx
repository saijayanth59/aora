import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import LatestItem from "./LatestItem";

const LastestVideos = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(0);

  function handleChangeInViewableItems({ viewableItems }) {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  }

  return (
    <>
      <Text className="mt-8 mb-8 text-sm text-gray-200 font-pmedium">
        Treding Videos
      </Text>
      <View className="snap-x mb-8">
        <FlatList
          data={posts}
          horizontal
          keyExtractor={(item) => item.$id}
          renderItem={({ item }) => (
            <LatestItem item={item} activeItem={activeItem} />
          )}
          onViewableItemsChanged={handleChangeInViewableItems}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 70,
          }}
          contentOffset={{ x: 130 }}
        />
      </View>
    </>
  );
};

export default LastestVideos;
