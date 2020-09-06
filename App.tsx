import { Badge, Button, Container, Content, Footer, FooterTab, Header, Icon, Text } from "native-base";
import React from "react";
const App = () => {
  return (
    <Container>
      <Header />
      <Content />
      <Footer>
        <FooterTab>
          <Button badge vertical>
            <Badge>
              <Text>2</Text>
            </Badge>
            <Icon name="apps" />
          </Button>
          <Button vertical>
            <Icon name="camera" />
          </Button>
          <Button active badge vertical>
            <Badge>
              <Text>51</Text>
            </Badge>
            <Icon active name="navigate" />
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

export default App;
