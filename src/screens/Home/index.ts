import { StyleSheet, Text, View } from "react-native";
interface home {}
const Home = (props: home) => {
  return (
    <View style={styles.container}>
      <Text>open up App.js to start working on your app!</Text>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
