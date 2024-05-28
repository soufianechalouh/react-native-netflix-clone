import { Episode } from "@/types";
import { View } from "../Themed";
import { ResizeMode, Video } from "expo-av";
import React from "react";
import styles from "./styles";

interface VideoPlayerProps {
  episode: Episode;
}

export default function VideoPlayer(props: VideoPlayerProps) {
  const { episode } = props;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
}
