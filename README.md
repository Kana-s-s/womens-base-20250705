# AI駆動開発勉強会 Women's Base - Vibe Coding


TMDB APIを用いた映画配信アプリを作成します。    
楽しくvibe codingしながら、映画データの取得・表示を体験してみましょう！


## ⏱️ 流れ
進め方はすべてIssuesに用意されています。  
**順番にIssueを見ながら進めていきます。**

 - [Step1：環境構築](https://github.com/nana-mn707/womens-base-20250705/issues/1)
   - プロジェクトをローカル起動できるようにしよう
 - [Step2：映画データを取得するための準備](https://github.com/nana-mn707/womens-base-20250705/issues/2)
   - 映画データを取得するためにTMDBを登録しよう
 - [Step.3：映画配信アプリ（NetFlix）の作成](https://github.com/nana-mn707/womens-base-20250705/issues/3)
   - 実際に見た目を作ってみよう
 - [Step4：その他映画配信アプリ作成にチャレンジ](https://github.com/nana-mn707/womens-base-20250705/issues/4)
   - チャレンジタスク！自分の工夫を加えてみよう

# Netflix Clone

Netflixのクローンアプリケーションです。TMDB APIを使用して映画・TVシリーズの情報を取得し、NetflixのようなUI/UXを提供します。

## 機能

- 🎬 人気映画・TVシリーズの表示
- 📺 トレンドコンテンツの表示
- 🎭 ジャンル別コンテンツ（アクション、コメディ、ホラー、ロマンス）
- 🏆 高評価コンテンツの表示
- 📱 レスポンシブデザイン
- 🎨 NetflixライクなUI/UX
- 🔍 検索機能（準備中）
- 📋 マイリスト機能（準備中）

## 技術スタック

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3
- **Icons**: React Icons
- **HTTP Client**: Axios
- **API**: The Movie Database (TMDB)

## セットアップ

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd womens-base-20250705
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 環境変数の設定

1. [TMDB](https://www.themoviedb.org/settings/api)でAPIキーを取得
2. プロジェクトルートに`.env`ファイルを作成
3. 以下の内容を追加：

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開いてアプリケーションを確認できます。

## ビルド

本番用ビルドを作成する場合：

```bash
npm run build
```

## プレビュー

ビルドされたアプリケーションをプレビューする場合：

```bash
npm run preview
```

## プロジェクト構造

```
src/
├── api/
│   └── tmdb.js          # TMDB API関連の関数
├── components/
│   ├── Banner.jsx       # メインバナーコンポーネント
│   ├── Banner.css
│   ├── Header.jsx       # ヘッダーコンポーネント
│   ├── Header.css
│   ├── Row.jsx          # 映画・TVシリーズ行コンポーネント
│   ├── Row.css
│   └── index.js         # コンポーネントエクスポート
├── App.jsx              # メインアプリケーションコンポーネント
├── App.css
├── main.jsx             # アプリケーションエントリーポイント
└── index.css            # グローバルスタイル
```

## 主な機能の実装

### 1. バナー表示
- トレンドコンテンツからランダムに選択
- 背景画像、タイトル、説明文の表示
- 再生・詳細情報ボタン

### 2. コンテンツ行
- 水平スクロール可能な映画・TVシリーズ一覧
- ホバーエフェクト
- カテゴリ別表示

### 3. ヘッダー
- 固定ヘッダー
- スクロール時の背景変化
- ナビゲーションメニュー
- アイコン（検索、通知、ユーザー）

## 今後の改善予定

- [ ] 検索機能の実装
- [ ] マイリスト機能の実装
- [ ] 動画再生機能の追加
- [ ] ユーザー認証システム
- [ ] 詳細ページの実装
- [ ] パフォーマンス最適化

## ライセンス

このプロジェクトは学習目的で作成されています。
