# ReadMe

## 使い方
まず`yarn`してnode_modulesを生成してください。

`yarn start`するとhtmlファイルが生成されローカルサーバーが立ち上がります。同時に本番用のテンプレートファイルも生成されます。


## フォルダ構成
```txt
├── ReadMe.md
├── dist
│   ├── ここに生成されたプレビュー用のhtmlファイルが出力されます。
├── dist_template
│   └── ここに本番用のBASEテンプレートhtmlファイルが出力されます。
├── img 画像を扱う場合はここに置いてください(本番環境へは手動でアップロードする必要があります。)
├── src
│   ├── base_template 本番テンプレート用のtsx dist_templateの元になります。
│   ├── components Reactコンポーネント
│   ├── helpers BASEのタグ用関数とHTMLをレンダリングするためのファイル
│   ├── index.js webpack用のダミーjsファイル
│   └── pages このフォルダ内にあるtsxがプレビュー用のhtmlとして出力されます。 distの元になります。
├── webpack.config.js react->HTML変換のための設定も書かれています。
```