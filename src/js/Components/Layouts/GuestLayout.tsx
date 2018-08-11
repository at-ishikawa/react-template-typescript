import * as React from "react";
import GuestHeader from "../Organisms/Headers/GuestHeader";
import GuestFooter from "../Organisms/Footers/GuestFooter";

import * as styles from "../../../css/layouts/base-layout.css";

type Props = {
  hasHeader?: boolean;
  hasFooter?: boolean;
  children: any;
};

const guestLayout = (props: Props) => {
  const defaultProps = {
    hasHeader: true,
    hasFooter: true
  };
  const { hasHeader, hasFooter, children } = {
    ...defaultProps,
    ...props
  };

  return (
    <div className={styles.layout}>
      {hasHeader && <GuestHeader />}
      <main className={styles.main}>{children}</main>
      {hasFooter && <GuestFooter />}
    </div>
  );
};

export default guestLayout;
