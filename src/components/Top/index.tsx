/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BaseTag from "@src/helpers/baseTag";

export default function Top() {
  return (
    <div>
      {BaseTag("LogoTag")}
      <h1
        css={css`
          color: green;
        `}
      >
        ようこそ！XX商店へ
      </h1>
      <ul>
        <li>
          <a href={BaseTag("ContactPageURL") as string}>お問い合わせ</a>
        </li>
        <li>
          <a href={BaseTag("PrivacyPageURL") as string}>プライバシーポリシー</a>
        </li>
        <li>
          <a href={BaseTag("LawPageURL") as string}>特定商取引法</a>
        </li>
      </ul>
      {BaseTag("BASEMenuTag")}

      <div>
        <h3>商品ページに必ず付与する内容</h3>
        {BaseTag("ItemAttentionTag")}
        {BaseTag("IllegalReportTag")}
      </div>
    </div>
  );
}
