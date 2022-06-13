import React from "react";
import { renderToStaticHtml } from "@src/helpers/renderToStaticMarkup";
import Top from "@src/components/Top";

const index = () => {
  return renderToStaticHtml(<Top />);
};

export default index;
