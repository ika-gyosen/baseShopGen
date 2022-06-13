import React from "react";
import { renderToStaticHtml } from "@src/helpers/renderToStaticMarkup";
import Privacy from "@src/components/Privacy";

export default function LawPage() {
  return renderToStaticHtml(<Privacy />);
}
