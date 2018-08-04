// @flow
import React from "react";
import Header from "components/elements/DefaultHeader";
import Footer from "components/elements/DefaultFooter";

import style from "layouts/container.css";

type Props = {
  children: any
};

const Container = ({ children }: Props) => (
  <div className={style.container}>
    <Header />
    <main className={style.main}>{children}</main>
    <Footer />
  </div>
);

export default Container;
