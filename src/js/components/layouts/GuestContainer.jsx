// @flow
import React from "react";
import Header from "../organisms/headers/GuestHeader";
import Footer from "../organisms/footers/GuestFooter";

import "../../../css/layouts/guest-container.css";

type Props = {
  children: any
};

const GuestContainer = ({ children }: Props) => (
  <div className="guest-container">
    <Header />
    <main className="main">{children}</main>
    <Footer />
  </div>
);

export default GuestContainer;
