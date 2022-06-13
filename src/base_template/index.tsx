import React from "react";
import { renderToStaticHtml } from "@src/helpers/renderToStaticMarkup/";
import Top from "@src/components/Top";
import Contact from "@src/components/Contact";
import Privacy from "@src/components/Privacy";
import Law from "@src/components/Law";

function template() {
  return renderToStaticHtml(
    <>
      {"{"}block:IndexPage{"}"}
      <Top />
      {"{"}/block:IndexPage{"}"}
      {"{"}block:ContactPage{"}"}
      <Contact />
      {"{"}/block:ContactPage{"}"}
      {"{"}block:PrivacyPage{"}"}
      <Privacy />
      {"{"}/block:PrivacyPage{"}"}
      {"{"}block:LawPage{"}"}
      <Law />
      {"{"}/block:LawPage{"}"}
    </>
  );
}

export default template;
