import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />

      {navigation.state === "loading" && <Loader />}

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
