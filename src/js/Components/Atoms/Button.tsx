import * as React from "react";
import * as styles from "../../../css/atoms/button.css";

type Props = {
  onClick: () => void;
  children: any;
};

const button = ({ onClick, children }: Props) => (
  <button className={styles.button} type="button" onClick={onClick}>
    {children}
  </button>
);
export default button;
