import { StyleSheet, FlatList } from "react-native";

import { Text } from "@/components/Themed";
import MoviePoster from "@/components/MoviePoster";
import categories from "@/assets/data/categories";

const firstCategory = categories.items[0];
interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: { id: string; poster: string }[];
  };
}

export default function HomeCategory(props: HomeCategoryProps) {
  const { category } = props;
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => <MoviePoster path={item.poster} />}
        horizontal
      />
    </>
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
