# THUTA ZAW — Game Programmer Portfolio (3 Projects)

**Home Hearth（プレイ動画を含む）→ Chroma Painter → Space Shooter → About / Contact** の順に掲載した、日本語ゲームプログラマーポートフォリオサイトです。

## 作品

1. **Home Hearth** — C++ / DirectX、3Dマルチプレイヤー、防衛ゲーム。TCP/UDP・レンダリング・オリジナル3Dモデル、学校内コンテストでの受賞歴。元のPDFも同梱。ホームページのGallery後にYouTubeデモ動画セクションを追加。
2. **Chroma Painter** — C++ / DirectX 2D。色で足場の性質を変えるゲーム。実際のスクリーンショット、説明、YouTube動画。
3. **Space Shooter** — Unity 6 / C#、2Dシューティング。HP・エネルギー、ウェーブ管理、オブジェクトプール、ボス、ポーズ、ミッションクリア。Unity Editorの画面とプレイ画像、YouTube動画。

## ファイル構成

- `index.html` — 3作品すべてを順番に紹介するホームページ
- `chroma-painter.html` — Chroma Painterの専用技術紹介ページ
- `space-shooter.html` — Space Shooterの専用紹介ページ
- `style.css`, `chroma-detail.css`, `space.css` — スタイル
- `script.js`, `video-embed.js` — ナビゲーション・画像拡大・動画表示
- `assets/` — 本人が提供したゲームスクリーンショットから最適化した画像など
- `THUTA_ZAW_Portfolio.pdf` — Home Hearthの元PDF

**Windowsビルド（.exe）やソースコード、UnityプロジェクトはZIPには含めていません。** 応募する企業の提出方法に合わせて別途共有してください。

## Space Shooterの情報に関する注意

今回送信された `SpaceShooter.7z` は、Windows向けの**ビルド一式**です。`.exe`、`_Data/`、`Managed/Assembly-CSharp.dll` などが含まれていますが、編集可能な `Assets/Scripts/*.cs` と `ProjectSettings/` の入ったUnityプロジェクトではありません。したがって、Space Shooterの技術内容は**添付されたUnity EditorのInspector画像とプレイ中のスクリーンショット**を根拠としており、C#ソースを行単位で確認したという意味ではありません。Windowsビルドの実機動作検証も行っていません。

## ローカルでプレビューする方法

ZIPを解凍し、`index.html` をダブルクリックしてください。Project 03の詳細は `space-shooter.html` です。
ローカルの `file://` ではYouTube Error 153が出ることがあるため、動画は「YouTubeで見る」ボタンから直接開けます。公開サイトでは「サイト内で再生」も選択できます。動画の実体はZIPには含まれません。

## GitHub Pagesに無料で公開する方法

1. GitHubで Public リポジトリを作成します。名前を `yourusername.github.io` にすると個人サイトとして公開できます。
2. このZIPを解凍し、`index.html`・HTML/CSS/JS・`assets/`・PDFを**リポジトリ直下**にアップロードしてください（外側のフォルダごとアップしない）。
3. リポジトリで `Settings → Pages → Build and deployment → Deploy from a branch` に進みます。
4. `main` / `/(root)` を選び保存します。
5. `https://yourusername.github.io/` で公開できます。ほかのリポジトリ名なら `https://yourusername.github.io/<repository>/` です。

公式説明: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 公開前のチェック

- 氏名、連絡先メールアドレス、受賞歴、開発担当範囲を確認してください。
- Home HearthのPDFは元のままです。新たに追加した作品はウェブページ側に掲載しています。
- Space Shooterで使用したアート等の素材に公開・再配布できないものが含まれる場合、権利を確認してください。
- 応募時に各作品のビルド・ソースコード・Unityプロジェクトを別途提出してください。

## 今回の更新（Home Hearth動画・お問い合わせ）

- Home Hearthのギャラリー後、Chroma Painterより前に、他の作品と共通の動画プレビュー・YouTubeボタン・オンライン再生機能を追加しました。
- ページ最下部のお問い合わせ欄から「PDFをダウンロード」「デモリールを見る」の２つのボタンを削除しました。メールボタンはそのままです。
- 履歴書のボタンはまだ追加していません。後日、履歴書PDFを受け取った段階で差し替えられます。
- Home HearthのPDFは、その他の紹介場所では引き続き利用できます。


## Japanese / English language option (2026-11 update)

- `index.html`, `chroma-painter.html`, `space-shooter.html`: Japanese pages.
- `index-en.html`, `chroma-painter-en.html`, `space-shooter-en.html`: English pages.
- The language selector in the header links to the corresponding page in the other language.
- `language.css` styles the selector and improves English typography. Upload this file to the repository root too.


### Updating the live GitHub Pages site
Upload every file and directory from this ZIP into the root of `THUTAZAW29.github.io` and choose to replace existing files. In particular, include all CSS, JavaScript, `assets/` files, English HTML pages, and the PDF if you knowingly want it public. After the commit, GitHub Pages redeploys; use Ctrl+Shift+R to bypass cache.


## Privacy / プライバシー
This public website package deliberately excludes the full résumé with personal data. The résumé button drafts an email request instead. Submit the résumé privately through employers' official application systems.
公開用ファイルに個人情報を含む履歴書PDFは入っていません。履歴書ボタンからメールで依頼できます。応募先へは履歴書を非公開の応募フォーム等で送付してください。

**Important:** Removing the sensitive PDF in the current GitHub branch alone does not remove it from previous commits. Follow GitHub guidance for removing sensitive data from repository history.
