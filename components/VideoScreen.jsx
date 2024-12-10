import { VideoView } from "expo-video";
import { StyleSheet } from "react-native";

export default function VideoScreen({ player }) {
  return (
    <VideoView
      style={styles.video}
      player={player}
      allowsFullscreen
      //   allowsPictureInPicture
    />
  );
}

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
});
