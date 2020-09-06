import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import {
  Badge,
  Button,
  Container,
  Footer,
  FooterTab,
  Header,
  Icon,
  Text,
} from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
export const MainLayout = ({ children }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
      setLoader(false);
    };
  }, []);
  return loader ? (
    <View>
      <Text>loading..</Text>
    </View>
  ) : (
    <Container>
      <Header />
      <View style={styles.container}>{children}</View>
      <Footer>
        <FooterTab>
          <Button badge vertical>
            <Badge>
              <Text>2</Text>
            </Badge>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button vertical>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button active badge vertical>
            <Badge>
              <Text>51</Text>
            </Badge>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
          </Button>
          <Button vertical>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};
export default MainLayout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
