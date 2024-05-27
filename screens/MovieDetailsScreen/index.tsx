import { Text, View, Image, Pressable, FlatList } from "react-native";
import styles from "./styles";
import movie from "@/assets/data/movie";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import EpisodeItem from "@/components/EpisodeItem";
import MovieInfo from "@/components/MovieInfo";

const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0];

export default function MovieDetailsScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
      <FlatList
        data={firstSeason.episodes.items}
        renderItem={({ item }) => <EpisodeItem episode={item} />}
        ListHeaderComponent={<MovieInfo />}
      />
    </View>
  );
}
