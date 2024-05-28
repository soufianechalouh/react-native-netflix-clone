import { Image, StyleSheet } from "react-native";
import { View, Text } from "../Themed";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Episode } from "@/types";

interface EpisodeItemProps {
  episode: Episode;
}

export default function EpisodeItem(props: EpisodeItemProps) {
  const { episode } = props;
  return (
    <View style={{ marginVertical: 10 }}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: episode.poster }} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{episode.title}</Text>
          <Text style={styles.duration}>{episode.duration}</Text>
        </View>
        <AntDesign name="download" size={24} color={"white"} />
      </View>

      <Text style={styles.plot}> {episode.plot}</Text>
    </View>
  );
}
