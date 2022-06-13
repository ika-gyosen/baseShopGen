import React from "react";
import { CacheProvider } from "@emotion/react";
import { renderToString } from "react-dom/server";
import createCache from "@emotion/cache";
import createEmotionServer from "@emotion/server/create-instance";
import Head from "@src/helpers/renderToStaticMarkup/Head";

const myRenderToStaticMarkup = (element: React.ReactElement) => {
  // Emotion CSS setup
  const key = "custom";
  const cache = createCache({ key });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);
  const staticMarkup = renderToString(
    <CacheProvider value={cache}>{element}</CacheProvider>
  );
  const chunks = extractCriticalToChunks(staticMarkup);
  const styles = constructStyleTagsFromChunks(chunks);

  // read Head component
  const staticHead = renderToString(<Head />);

  if (process.env.NODE_ENV === "production") {
    // template
    return `
      {block:NotLoadItemsPage}
      <!doctype html>
      <html>
        <head lang="ja">
          ${staticHead}
          ${styles}
        </head>
        <body>
          ${staticMarkup}
        </body>
      </html>
      {/block:NotLoadItemsPage}
      {block:LoadItemsPage}
        <p>loading...</p>
      {/block:LoadItemsPage}
    `;
  } else {
    // preview
    return `    <!doctype html>
    <html>
     <head lang="ja">
       ${staticHead}
       ${styles}
     </head>
     <body>
       ${staticMarkup}
     </body>
   </html>
 `;
  }
};

export const renderToStaticHtml = (element: React.ReactElement) => {
  return myRenderToStaticMarkup(element);
};
