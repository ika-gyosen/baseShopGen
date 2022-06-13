import React from "react";
import { renderToStaticHtml } from "@src/helpers/renderToStaticMarkup";
import Contact from "@src/components/Contact";

export default function ContactPage() {
  return renderToStaticHtml(<Contact />);
}
