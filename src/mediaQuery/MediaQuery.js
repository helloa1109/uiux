import React from "react";

const Mobile = ({ children }) => {
  const isMobile = window.innerWidth <= 767;
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

const PC = ({ children }) => {
  const isPc = window.innerWidth >= 768;
  return <React.Fragment>{isPc && children}</React.Fragment>;
};

export { Mobile, PC };
