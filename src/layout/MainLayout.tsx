import { Badge, Button, Container, Footer, FooterTab, Header, Icon, Text } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
export const MainLayout = ({ children }) => {
  return (
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
    justifyContent: "center"
  }
});
