import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Main from "./src/Main";
import persist from "./src/store";

const persistStore = persist();
export default function App() {
  return (
    <Provider store={persistStore.store}>
      <PersistGate persistor={persistStore.persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
