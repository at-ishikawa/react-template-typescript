// @flow
import React from "react";
import Header from "../organisms/DefaultHeader";
import Footer from "../organisms/DefaultFooter";

import "../../../css/layouts/container.css";

type Props = {
  children: any
};

const Container = ({ children }: Props) => (
  <div className="container">
    <Header />
    <main className="main">{children}</main>
    <Footer />
  </div>
);

export default Container;
