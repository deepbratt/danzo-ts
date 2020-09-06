import { AppRegistry } from "react-native";
import App from "./App";
import { isWeb } from "./src/utils/general.utils";

AppRegistry.registerComponent("danzo-ts", () => App);

if (isWeb) {
  const rootTag = document.getElementById("root") || document.getElementById("main");
  AppRegistry.runApplication("danzo-ts", { rootTag });
}
