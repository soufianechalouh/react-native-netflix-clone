import { StyleSheet, FlatList } from "react-native";

import { Text, View } from "@/components/Themed";
import MoviePoster from "@/components/MoviePoster";
import categories from "@/assets/data/categories";

const firstCategory = categories.items[0];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular on Netflix</Text>
      <FlatList
        data={firstCategory.movies}
        renderItem={({ item }) => <MoviePoster path={item.poster} />}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
