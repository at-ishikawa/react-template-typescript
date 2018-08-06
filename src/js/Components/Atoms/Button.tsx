import * as React from "react";
import "../../../css/atoms/button.css";

type Props = {
  onClick: () => void;
  children: any;
};

const button = ({ onClick, children }: Props) => (
  <button className="button" type="button" onClick={onClick}>
    {children}
  </button>
);
export default button;
