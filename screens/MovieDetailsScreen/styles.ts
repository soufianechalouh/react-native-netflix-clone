import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", // Assuming you want a black background
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  match: {
    color: "#59d467",
    fontWeight: "bold",
    marginRight: 10,
  },
  year: {
    color: "#757575",
    marginRight: 5,
  },
  ageContainer: {
    backgroundColor: "#e6e229",
    borderRadius: 4,
    paddingHorizontal: 3,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  age: {
    color: "black",
    fontWeight: "bold",
  },
});

export default styles;
