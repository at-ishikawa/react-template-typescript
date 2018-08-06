import * as React from "react";
import GuestHeader from "../Organisms/Headers/GuestHeader";
import GuestFooter from "../Organisms/Footers/GuestFooter";

import "../../../css/layouts/guest-container.css";

type Props = {
  children: any;
};

const guestContainer = ({ children }: Props) => (
  <div className="guest-container">
    <GuestHeader />
    <main className="main">{children}</main>
    <GuestFooter />
  </div>
);

export default guestContainer;
