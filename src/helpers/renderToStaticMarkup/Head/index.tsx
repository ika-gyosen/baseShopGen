import React from "react";
import BaseTag from "@src/helpers/baseTag";

function Head(): React.ReactElement {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {BaseTag("requiredTags")}
    </>
  );
}

export default Head;
