import { Container, Content } from "native-base";
import { StatusBar } from "react-native";
const MainLayout = ({ children }) => {
  return (
    <>
      <Container>
        <StatusBar barStyle="light-content" />
        <Content padder>{children}</Content>
      </Container>
    </>
  );
};
export default MainLayout;
