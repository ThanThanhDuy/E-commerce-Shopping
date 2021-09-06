import { Dimensions, StyleSheet } from "react-native";
import Color from "../../styles/colors/Color";
import FontSize from "../../styles/fonts/FontSize";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 44,
  },
  Input: {
    backgroundColor: Color.$Dark,
    borderRadius: 3,
    width: Dimensions.get("screen").width * 0.9,
    marginBottom: 8,
    fontFamily: "Poppins-bold",
  },
  Button: {
    backgroundColor: Color.$PrimaryDark,
    borderRadius: 25,
    height: 48,
    justifyContent: "center",
    marginTop: 24,
  },
  header: {
    fontFamily: "Poppins-bold",
    fontSize: FontSize.$Headline,
    // fontWeight: '700',
    lineHeight: 44,
    color: "#F6F6F6",
  },
  body_container: {
    marginTop: 50,
    padding: 10,
  },
  lisence: {
    fontFamily: "Poppins-regular",
    color: "#F6F6F6",
    textAlign: "center",
    opacity: 10,
    marginTop: 40,
    fontSize: FontSize.$11px,
  },
});
export default styles;
