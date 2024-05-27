import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  plot: {
    color: "darkgrey",
  },
  image: {
    aspectRatio: 16 / 9,
    height: 75,
    resizeMode: "cover",
    borderRadius: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  titleContainer: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
  },
  title: {},
  duration: {
    color: "darkgrey",
    fontSize: 10,
  },
});

export default styles;
