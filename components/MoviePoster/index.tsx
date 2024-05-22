import { Image, StyleSheet } from "react-native";

export default function MovieImage({ path }: { path: string }) {
  return (
    <Image
      style={styles.image}
      source={{
        uri: path,
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 170,
    resizeMode: "cover",
    borderRadius: 5,
    margin: 5,
  },
});
