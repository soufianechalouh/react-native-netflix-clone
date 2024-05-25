import { Text, StyleSheet, View, Image } from "react-native";
import styles from "./styles";
import movie from "@/assets/data/movie";
import { MaterialIcons } from "@expo/vector-icons";

const firstEpisode = movie.seasons.items[0].episodes.items[0];

export default function MovieDetailsScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
      <Text style={styles.title}>{movie.title}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.match}> 98% match</Text>
        <Text style={styles.year}> {movie.year}</Text>
        <View style={styles.ageContainer}>
          <Text style={styles.age}> 12+</Text>
        </View>
        <Text style={styles.year}>{movie.numberOfSeasons} Seasons </Text>
        <MaterialIcons name="hd" size={24} color="white" />
      </View>
    </View>
  );
}
