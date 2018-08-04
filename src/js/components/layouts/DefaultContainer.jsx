// @flow
import React from "react";
import Header from "components/elements/DefaultHeader";
import Footer from "components/elements/DefaultFooter";

import "layouts/container.css";

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
