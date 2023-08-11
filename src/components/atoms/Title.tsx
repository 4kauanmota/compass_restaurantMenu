import { Text, View, StyleSheet } from "react-native";

function Title({ children }: { children: any }) {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  text: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#ffffff",
  },
});

export default Title;
