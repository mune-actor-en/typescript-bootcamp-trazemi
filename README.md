# TypeScriptブートキャンプ（とらゼミ）
## 概要
2020年1月9日にオンラインコミュニティ「とらゼミ」で行われた、「TypeScriptブートキャンプ」の学習用リポジトリです。
## ディレクトリ構成
```
src
 |- components
 |   |- atoms     button, formなどの最小部品
 |   |- layouts   汎用的なレイアウト用コンポーネント
 |   |- organisms 検索フォームなどコンポーネントの1まとまる
 |   └  templates ページ毎に作成するテンプレート
 |- lib           関数用ファイルをまとめる 
 |- rakuten
 |   └  config.ts 楽天APIの設定値
 |- styles        Scssファイルをまとめる
 └  types         型定義用ファイルをまとめる
 ```

 ## どんなアプリか
 React + TypeScript + 楽天APIを使った、簡易的な検索アプリです。