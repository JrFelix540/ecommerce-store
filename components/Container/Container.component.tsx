import React, { Fragment } from "react";
import { MaxWidth } from "./Container.styles";

const Container: React.FC = ({ children }) => {
  return (
    <Fragment>
      <MaxWidth>{children}</MaxWidth>
    </Fragment>
  );
};

export default Container;
