import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { icons } from "../constants";
import VideoScreen from "./VideoScreen";
import { useVideoPlayer } from "expo-video";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

const LatestItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);

  const player = useVideoPlayer(item.video, (player) => {
    player;
  });

  return (
    <Animatable.View
      className="mr-5 snap-center"
      animation={activeItem == item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <>
          <View className="w-52 h-72 rounded-3xl mt-3 bg-white/10">
            <VideoScreen player={player} />
          </View>
        </>
      ) : (
        <>
          <TouchableOpacity
            className="relative flex justify-center items-center"
            activeOpacity={0.7}
            onPress={() => {
              setPlay(true);
              player.play();
            }}
          >
            <ImageBackground
              source={{
                uri: item.thumbnail,
              }}
              className="w-52 h-72 rounded-3xl overflow-hidden shadow-lg shadow-black/40 bg-white/10"
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
    </Animatable.View>
  );
};

export default LatestItem;
