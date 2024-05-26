import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import styles from "./styles";
import movie from "@/assets/data/movie";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";

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

      <Pressable onPress={() => console.warn("play")} style={styles.playButton}>
        <Text style={styles.playButtonText}>
          <Entypo name="controller-play" size={16} color="black" />
          Play
        </Text>
      </Pressable>

      <Pressable
        onPress={() => console.warn("Download pressed")}
        style={styles.downloadButton}
      >
        <Text style={styles.downloadButtonText}>
          <AntDesign name="download" size={16} color="white" /> Download
        </Text>
      </Pressable>

      <Text style={styles.plot}>{movie.plot}</Text>
      <Text style={styles.year}>Cast: {movie.cast}</Text>
      <Text style={styles.year}>Creator: {movie.creator}</Text>

      {/* Row with icon buttons */}
      <View style={{ flexDirection: "row" }}></View>
    </View>
  );
}
