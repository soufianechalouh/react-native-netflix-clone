import { Pressable } from "react-native";
import { View, Text } from "../Themed";
import styles from "./styles";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import movie from "@/assets/data/movie";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function MovieInfo() {
  const seasonNames = movie.seasons.items.map((season) => season.name);
  return (
    <>
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
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View style={styles.iconContainer}>
          <AntDesign name="plus" size={24} color="white" />
          <Text style={styles.iconText}>My List</Text>
        </View>

        <View style={styles.iconContainer}>
          <Feather name="thumbs-up" size={24} color="white" />
          <Text style={styles.iconText}>Rate</Text>
        </View>

        <View style={styles.iconContainer}>
          <FontAwesome name="send-o" size={24} color="white" />
          <Text style={styles.iconText}>Share</Text>
        </View>
      </View>

      <Picker
        selectedValue={""}
        style={{ color: "white" }}
        onValueChange={(itemValue, itemIndex) => {}}
      >
        {seasonNames.map((seasonName) => (
          <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
        ))}
      </Picker>
    </>
  );
}
