import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginBottom: 8,
    padding: 8,
    width: "100%",
    height: 64,
    backgroundColor: "#fbfbfb",
    borderRadius: 8,
    shadowColor: "#fbfbfb",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    marginBottom: 6,
    justifyContent: "space-around",
  },
  infoBox: {
    marginLeft: 8,
  },
  imgBox: {
    width: 50,
    height: 50,
    backgroundColor: "#dcdcdc",
    borderRadius: 50,
    borderColor: "#708090",
    borderWidth: 1,
  },
});
