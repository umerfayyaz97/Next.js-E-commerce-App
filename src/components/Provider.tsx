"use client";
import { store, persister } from "@/store/store";
// import { store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        {children} {/* Render the child components */}
        <Toaster />
      </PersistGate>
    </Provider>
  );
};

export default Providers;
