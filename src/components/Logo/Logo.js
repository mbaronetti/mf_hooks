import React from "react";
import useLogo from "./useLogo";

export const Logo = props => {
  const { logoSrc, logoStyle } = useLogo();

  return (
    <img className="header--logo" src={logoSrc} style={logoStyle} alt="logo" />
  );
};

export default Logo;
