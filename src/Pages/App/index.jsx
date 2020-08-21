import React from "react";
import { HashRouter } from "react-router-dom";

import { Header } from "../../template/header";
import { Footer } from "../../template/footer";

import Routes from "../../routes";

const App = () => (
  <HashRouter>
    <Header />
    <Routes />
    <Footer />
  </HashRouter>
);

export default App;
