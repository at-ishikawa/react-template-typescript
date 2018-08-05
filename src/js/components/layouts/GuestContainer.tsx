import * as React from "react";
import GuestHeader from "../organisms/headers/GuestHeader";
import GuestFooter from "../organisms/footers/GuestFooter";

import "../../../css/layouts/guest-container.css";

type Props = {
  children: any
};

const guestContainer = ({ children }: Props) => (
  <div className="guest-container">
    <GuestHeader />
    <main className="main">{children}</main>
    <GuestFooter />
  </div>
);

export default guestContainer;
