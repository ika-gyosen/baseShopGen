import React from "react";
import { renderToStaticHtml } from "@src/helpers/renderToStaticMarkup";
import Law from "@src/components/Law";

export default function LawPage() {
  return renderToStaticHtml(<Law />);
}
