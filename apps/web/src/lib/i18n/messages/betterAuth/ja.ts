/**
 * Neon Auth UI コンポーネントの日本語翻訳
 * Better Auth UI の AuthLocalization API リファレンスに基づく：
 * https://better-auth-ui.com/api-reference/auth-localization
 */
const betterAuthJa = {
  // 基本的な認証
  SIGN_IN: 'ログイン',
  SIGN_UP: 'サインアップ',
  SIGN_OUT: 'ログアウト',
  FORGOT_PASSWORD: 'パスワードを忘れた',
  RESET_PASSWORD: 'パスワードをリセット',
  CHANGE_PASSWORD: 'パスワードを変更',

  // フォームフィールド
  EMAIL: 'メールアドレス',
  PASSWORD: 'パスワード',
  CONFIRM_PASSWORD: 'パスワードを確認',
  NAME: '名前',
  USERNAME: 'ユーザー名',
  PHONE: '電話番号',
  CODE: '確認コード',

  // フォームプレースホルダー
  EMAIL_PLACEHOLDER: 'm@example.com',
  USERNAME_PLACEHOLDER: 'ユーザー名',
  SIGN_IN_USERNAME_PLACEHOLDER: 'ユーザー名またはメールアドレス',
  PASSWORD_PLACEHOLDER: 'パスワード',
  NAME_PLACEHOLDER: '名前',
  PHONE_PLACEHOLDER: '電話番号',
  CONFIRM_PASSWORD_PLACEHOLDER: 'パスワードを確認',
  CURRENT_PASSWORD_PLACEHOLDER: '現在のパスワード',
  NEW_PASSWORD_PLACEHOLDER: '新しいパスワード',
  BACKUP_CODE_PLACEHOLDER: 'バックアップコード。',

  // ボタンと操作
  SUBMIT: '送信',
  CONTINUE: '続ける',
  BACK: '戻る',
  GO_BACK: '戻る',
  CANCEL: 'キャンセル',
  SAVE: '保存',
  DELETE: '削除',
  EDIT: '編集',
  UPDATE: '更新',
  CREATE: '作成',
  REMOVE: '削除',
  ADD: '追加',
  UPLOAD: 'アップロード',
  LINK: 'リンク',
  UNLINK: 'リンク解除',
  DONE: '完了',
  REVOKE: '取り消し',
  ACCEPT: '承認',
  REJECT: '拒否',

  // 接続詞
  OR: 'または',
  AND: 'と',
  OR_CONTINUE_WITH: 'または続ける',

  // OAuth 関連
  SIGN_IN_WITH: '',
  SIGN_UP_WITH: '',

  // アカウント切り替え
  ALREADY_HAVE_AN_ACCOUNT: 'アカウントをお持ちですか？',
  DONT_HAVE_AN_ACCOUNT: 'アカウントがありませんか？',
  REMEMBER_ME: 'ログイン状態を保持',
  SIGN_IN_ACTION: 'ログイン',
  SIGN_UP_ACTION: 'アカウントを作成',
  RESET_PASSWORD_ACTION: '新しいパスワードを保存',
  FORGOT_PASSWORD_ACTION: 'リセットリンクを送信',

  // ページ説明
  SIGN_IN_DESCRIPTION: 'メールアドレスを入力してアカウントにログインしてください',
  SIGN_IN_USERNAME_DESCRIPTION: 'ユーザー名またはメールアドレスを入力してアカウントにログインしてください',
  SIGN_UP_DESCRIPTION: '情報を入力してアカウントを作成してください',
  SIGN_UP_EMAIL: 'メールを確認して検証リンクを取得してください。',
  RESET_PASSWORD_DESCRIPTION: '新しいパスワードを入力してください',
  FORGOT_PASSWORD_DESCRIPTION: 'メールアドレスを入力してパスワードをリセットしてください',
  FORGOT_PASSWORD_EMAIL: 'メールを確認してパスワードリセットリンクを取得してください。',
  FORGOT_PASSWORD_LINK: 'パスワードを忘れた？',

  // アカウント
  ACCOUNT: 'アカウント',
  ACCOUNTS: 'アカウント',
  ACCOUNTS_DESCRIPTION: '現在ログインしているアカウントを管理します。',
  ACCOUNTS_INSTRUCTIONS: '追加のアカウントにログインします。',
  ADD_ACCOUNT: 'アカウントを追加',
  SWITCH_ACCOUNT: 'アカウントを切り替え',
  PERSONAL_ACCOUNT: '個人アカウント',

  // アバター
  AVATAR: 'アバター',
  AVATAR_DESCRIPTION: 'アバターをクリックしてファイルからカスタムアバターをアップロードします。',
  AVATAR_INSTRUCTIONS: 'アバターはオプションですが、強く推奨されます。',
  UPLOAD_AVATAR: 'アバターをアップロード',
  DELETE_AVATAR: 'アバターを削除',

  // 設定
  SETTINGS: '設定',
  SECURITY: 'セキュリティ',
  UPDATED_SUCCESSFULLY: '更新が完了しました',

  // 名前
  NAME_DESCRIPTION: 'フルネームまたは表示名を入力してください。',
  NAME_INSTRUCTIONS: '最大32文字まで使用してください。',

  // ユーザー名
  USERNAME_DESCRIPTION: 'ログインに使用するユーザー名を入力してください。',
  USERNAME_INSTRUCTIONS: '最大32文字まで使用してください。',
  OPTIONAL_BRACKETS: '（オプション）',

  // メールアドレス
  EMAIL_DESCRIPTION: 'ログインに使用するメールアドレスを入力してください。',
  EMAIL_INSTRUCTIONS: '有効なメールアドレスを入力してください。',
  EMAIL_IS_THE_SAME: 'メールアドレスが同じです',
  EMAIL_REQUIRED: 'メールアドレスは必須です',
  EMAIL_VERIFICATION: 'メールアドレス検証',
  EMAIL_VERIFICATION_DESCRIPTION: '登録を完了するために、メールを確認して検証コードを取得してください。',
  EMAIL_VERIFICATION_SUCCESS: 'メールアドレス検証が成功しました。',
  EMAIL_VERIFY_CHANGE: '変更を確認するためにメールを確認してください。',
  EMAIL_OTP: 'メール確認コード',
  EMAIL_OTP_DESCRIPTION: 'コードを受け取るためにメールアドレスを入力してください',
  EMAIL_OTP_SEND_ACTION: 'コードを送信',
  EMAIL_OTP_VERIFY_ACTION: 'コードを確認',
  EMAIL_OTP_VERIFICATION_SENT: 'メールを確認して検証コードを取得してください。',

  // パスワード
  PASSWORD_REQUIRED: 'パスワードは必須です',
  PASSWORDS_DO_NOT_MATCH: 'パスワードが一致しません',
  NEW_PASSWORD: '新しいパスワード',
  NEW_PASSWORD_REQUIRED: '新しいパスワードは必須です',
  CURRENT_PASSWORD: '現在のパスワード',
  CHANGE_PASSWORD_DESCRIPTION: '現在のパスワードと新しいパスワードを入力してください。',
  CHANGE_PASSWORD_INSTRUCTIONS: '最小8文字を使用してください。',
  CHANGE_PASSWORD_SUCCESS: 'パスワードが変更されました。',
  SET_PASSWORD: 'パスワードを設定',
  SET_PASSWORD_DESCRIPTION: 'アカウントのパスワードを設定するためのメールを受け取るには、下のボタンをクリックしてください。',
  USER_ALREADY_HAS_PASSWORD: 'ユーザーは既にパスワードを持っています',

  // 二段階認証
  TWO_FACTOR: '二段階認証',
  TWO_FACTOR_DESCRIPTION: '続けるには、ワンタイムパスワードを入力してください',
  TWO_FACTOR_ACTION: 'コードを確認',
  TWO_FACTOR_CARD_DESCRIPTION: 'アカウントに追加のセキュリティ層を追加します。',
  TWO_FACTOR_DISABLE_INSTRUCTIONS: '二段階認証を無効にするには、パスワードを入力してください。',
  TWO_FACTOR_ENABLE_INSTRUCTIONS: '二段階認証を有効にするには、パスワードを入力してください',
  TWO_FACTOR_ENABLED: '二段階認証が有効になりました',
  TWO_FACTOR_DISABLED: '二段階認証が無効になりました',
  TWO_FACTOR_PROMPT: '二段階認証',
  TWO_FACTOR_TOTP_LABEL: '認証アプリでQRコードをスキャン',
  ENABLE_TWO_FACTOR: '二段階認証を有効にする',
  DISABLE_TWO_FACTOR: '二段階認証を無効にする',
  TRUST_DEVICE: 'このデバイスを信頼',
  FORGOT_AUTHENTICATOR: '認証アプリを忘れた？',
  CONTINUE_WITH_AUTHENTICATOR: '認証アプリで続ける',
  ONE_TIME_PASSWORD: 'ワンタイムパスワード',

  // バックアップコード
  BACKUP_CODES: 'バックアップコード',
  BACKUP_CODES_DESCRIPTION: 'これらのバックアップコードを安全な場所に保存してください。二段階認証方法を失った場合、これらを使用してアカウントにアクセスできます。',
  BACKUP_CODE: 'バックアップコード',
  BACKUP_CODE_REQUIRED: 'バックアップコードは必須です',
  COPY_ALL_CODES: 'すべてのコードをコピー',
  COPY_TO_CLIPBOARD: 'クリップボードにコピー',
  COPIED_TO_CLIPBOARD: 'クリップボードにコピーしました',
  RECOVER_ACCOUNT: 'アカウントを回復',
  RECOVER_ACCOUNT_DESCRIPTION: 'アカウントにアクセスするためにバックアップコードを入力してください',
  RECOVER_ACCOUNT_ACTION: 'アカウントを回復',

  // セッション
  SESSIONS: 'セッション',
  SESSIONS_DESCRIPTION: 'アクティブなセッションを管理し、アクセスを取り消します。',
  CURRENT_SESSION: '現在のセッション',
  SESSION_NOT_FRESH: 'セッションが期限切れです。再度ログインしてください。',

  // プロバイダー
  PROVIDERS: 'プロバイダー',
  PROVIDERS_DESCRIPTION: 'アカウントをサードパーティサービスに接続します。',
  SOCIAL_ACCOUNT_ALREADY_LINKED: 'ソーシャルアカウントが既にリンクされています',
  DISABLED_CREDENTIALS_DESCRIPTION: 'アカウントにログインするプロバイダーを選択してください',

  // Passkeys
  PASSKEYS: 'Passkeys',
  PASSKEY: 'Passkey',
  PASSKEYS_DESCRIPTION: '安全なアクセスのためのPasskeysを管理します。',
  PASSKEYS_INSTRUCTIONS: 'パスワードなしで安全にアカウントにアクセスします。',
  ADD_PASSKEY: 'Passkeyを追加',

  // APIキー
  API_KEYS: 'APIキー',
  API_KEY: 'APIキー',
  API_KEYS_DESCRIPTION: '安全なアクセスのためのAPIキーを管理します。',
  API_KEYS_INSTRUCTIONS: 'プログラムでアカウントにアクセスするためのAPIキーを生成します。',
  CREATE_API_KEY: 'APIキーを作成',
  CREATE_API_KEY_DESCRIPTION: '他のキーと区別するために、APIキーに一意の名前を入力してください。',
  API_KEY_NAME_PLACEHOLDER: '新しいAPIキー',
  API_KEY_CREATED: 'APIキーが作成されました',
  CREATE_API_KEY_SUCCESS: 'APIキーをコピーして安全な場所に保存してください。セキュリティ上の理由から、再度表示することはできません。',
  DELETE_API_KEY: 'APIキーを削除',
  DELETE_API_KEY_CONFIRM: 'このAPIキーを削除してもよろしいですか？',
  EXPIRES: '有効期限',
  NEVER_EXPIRES: '期限なし',
  NO_EXPIRATION: '有効期限なし',

  // マジックリンク
  MAGIC_LINK: 'マジックリンク',
  MAGIC_LINK_DESCRIPTION: 'メールアドレスを入力してマジックリンクを受け取ります',
  MAGIC_LINK_ACTION: 'マジックリンクを送信',
  MAGIC_LINK_EMAIL: 'メールを確認してマジックリンクを取得してください',

  // メールアドレス検証
  VERIFY_YOUR_EMAIL: 'メールアドレスを確認',
  VERIFY_YOUR_EMAIL_DESCRIPTION: 'メールアドレスを確認してください。受信トレイで確認メールを確認してください。メールが届いていない場合は、下のボタンをクリックして再送信してください。',
  RESEND_VERIFICATION_EMAIL: '確認メールを再送信',
  RESEND_CODE: 'コードを再送信',
  SEND_VERIFICATION_CODE: '確認コードを送信',

  // アカウント削除
  DELETE_ACCOUNT: 'アカウントを削除',
  DELETE_ACCOUNT_DESCRIPTION: 'アカウントとそのすべてのコンテンツを永続的に削除します。この操作は元に戻せないため、注意して続行してください。',
  DELETE_ACCOUNT_INSTRUCTIONS: 'アカウントの削除を確認してください。この操作は元に戻せないため、注意して続行してください。',
  DELETE_ACCOUNT_VERIFY: 'アカウントの削除を確認するためにメールを確認してください。',
  DELETE_ACCOUNT_SUCCESS: 'アカウントが削除されました。',

  // 利用規約とプライバシー
  BY_CONTINUING_YOU_AGREE: '続けることで、以下に同意したことになります',
  TERMS_OF_SERVICE: '利用規約',
  PRIVACY_POLICY: 'プライバシーポリシー',
  PROTECTED_BY_RECAPTCHA: 'このサイトはreCAPTCHAによって保護されています。',

  // フォーム検証メッセージ
  IS_REQUIRED: 'は必須です',
  IS_INVALID: 'が無効です',
  IS_THE_SAME: 'が同じです',
  NAME_REQUIRED: '名前は必須です',
  USERNAME_REQUIRED: 'ユーザー名は必須です',
  PHONE_REQUIRED: '電話番号は必須です',
  REQUIRED_FIELD: 'このフィールドは必須です',
  CONFIRM_PASSWORD_REQUIRED: 'パスワードの確認は必須です',

  // エラーメッセージ - 検証
  INVALID_EMAIL: '無効なメールアドレスです',
  INVALID_PHONE: '無効な電話番号です',
  INVALID_USERNAME: '無効なユーザー名です',
  INVALID_PASSWORD: 'パスワードは少なくとも8文字である必要があり、少なくとも1つの小文字、1つの大文字、1つの数字、および1つの特殊文字（@$!%*?&のいずれか）を含む必要があります',
  INVALID_CODE: '無効な確認コードです',
  INVALID_OTP: '無効なワンタイムパスワードです',

  // エラーメッセージ - ユーザー名
  USERNAME_TOO_SHORT: 'ユーザー名が短すぎます',
  USERNAME_TOO_LONG: 'ユーザー名が長すぎます',
  USERNAME_IS_ALREADY_TAKEN: 'ユーザー名は既に使用されています',

  // エラーメッセージ - パスワード
  PASSWORD_TOO_SHORT: 'パスワードは少なくとも8文字である必要があります',
  PASSWORD_TOO_LONG: 'パスワードが長すぎます',
  PASSWORDS_DONT_MATCH: 'パスワードが一致しません',
  PASSWORD_COMPROMISED: 'パスワードが侵害されています。別のパスワードを使用してください',

  // エラーメッセージ - アカウント状態
  EMAIL_NOT_VERIFIED: 'メールアドレスが確認されていません',
  PHONE_NOT_VERIFIED: '電話番号が確認されていません',
  PHONE_NUMBER_NOT_VERIFIED: '電話番号が確認されていません',
  EMAIL_VERIFICATION_REQUIRED: 'メールアドレスの確認が必要です',
  ACCOUNT_LOCKED: 'アカウントがロックされています',
  ACCOUNT_DISABLED: 'アカウントが無効化されています',

  // エラーメッセージ - 認証
  INVALID_CREDENTIALS: '無効な認証情報です',
  INVALID_USERNAME_OR_PASSWORD: 'ユーザー名またはパスワードが正しくありません',
  INVALID_EMAIL_OR_PASSWORD: 'メールアドレスまたはパスワードが正しくありません',
  INVALID_PHONE_OR_PASSWORD: '電話番号またはパスワードが正しくありません',
  INVALID_PHONE_NUMBER_OR_PASSWORD: '電話番号またはパスワードが正しくありません',
  AUTHENTICATION_FAILED: '認証に失敗しました',
  SESSION_EXPIRED: 'セッションが期限切れです',
  INVALID_SESSION_TOKEN: '無効なセッショントークンです',
  UNABLE_TO_CREATE_SESSION: 'セッションを作成できません',
  UNAUTHORIZED: '認証されていません',
  UNAUTHORIZED_SESSION: '認証されていないセッションです',

  // エラーメッセージ - OAuth
  INVALID_OAUTH_CONFIGURATION: '無効なOAuth設定です',
  PROVIDER_ALREADY_CONNECTED: 'このプロバイダーは既に接続されています',
  PROVIDER_NOT_FOUND: 'プロバイダーが見つかりません',
  INVALID_TOKEN: '無効なトークンです',
  ID_TOKEN_NOT_SUPPORTED: 'IDトークンはサポートされていません',

  // エラーメッセージ - OTP/確認コード
  OTP_EXPIRED: '確認コードの有効期限が切れています',
  OTP_NOT_FOUND: '確認コードが見つかりません',
  OTP_HAS_EXPIRED: '確認コードの有効期限が切れています',
  OTP_NOT_ENABLED: 'OTPが有効になっていません',
  INVALID_BACKUP_CODE: '無効なバックアップコードです',
  BACKUP_CODES_NOT_ENABLED: 'バックアップコードが有効になっていません',
  CHALLENGE_NOT_FOUND: '検証チャレンジが見つかりません',

  // エラーメッセージ - 二段階認証
  TWO_FACTOR_NOT_ENABLED: '二段階認証が有効になっていません',
  TOTP_NOT_ENABLED: 'TOTPが有効になっていません',
  INVALID_TWO_FACTOR_COOKIE: '無効な二段階認証Cookieです',
  TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: '試行回数が多すぎます。新しい確認コードを申請してください',

  // エラーメッセージ - 電話番号
  INVALID_PHONE_NUMBER: '無効な電話番号です',
  PHONE_NUMBER_EXIST: '電話番号は既に存在します',

  // エラーメッセージ - Passkey
  PASSKEY_NOT_FOUND: 'Passkeyが見つかりません',
  FAILED_TO_VERIFY_REGISTRATION: '登録の検証に失敗しました',
  FAILED_TO_UPDATE_PASSKEY: 'Passkeyの更新に失敗しました',
  YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY: 'このPasskeyを登録する権限がありません',

  // エラーメッセージ - 既に存在/使用中
  EMAIL_ALREADY_EXISTS: 'メールアドレスは既に使用されています',
  USERNAME_ALREADY_TAKEN: 'ユーザー名は既に使用されています',
  PHONE_ALREADY_EXISTS: '電話番号は既に使用されています',
  EMAIL_ALREADY_IN_USE: 'メールアドレスは既に使用されています',
  USER_ALREADY_EXISTS: 'ユーザーは既に存在します',

  // エラーメッセージ - 見つからない
  USER_NOT_FOUND: 'ユーザーが見つかりません',
  ACCOUNT_NOT_FOUND: 'アカウントが見つかりません',
  EMAIL_NOT_FOUND: 'メールアドレスが見つかりません',
  USER_EMAIL_NOT_FOUND: 'ユーザーのメールアドレスが見つかりません',
  CREDENTIAL_ACCOUNT_NOT_FOUND: '認証情報アカウントが見つかりません',

  // エラーメッセージ - 制限
  TOO_MANY_ATTEMPTS: '試行回数が多すぎます',
  TOO_MANY_REQUESTS: 'リクエストが多すぎます',
  RATE_LIMIT_EXCEEDED: 'レート制限を超えました',

  // エラーメッセージ - その他
  UNEXPECTED_ERROR: '予期しないエラーが発生しました',
  UNKNOWN_ERROR: '不明なエラー',
  SOMETHING_WENT_WRONG: '問題が発生しました',
  TRY_AGAIN: 'もう一度お試しください',
  OPERATION_FAILED: '操作に失敗しました',
  REQUEST_FAILED: 'リクエストに失敗しました',
  UNKNOWN: '不明',
  MISSING_RESPONSE: '応答がありません',
  VERIFICATION_FAILED: '検証に失敗しました',
  SERVICE_UNAVAILABLE: 'サービスが利用できません',
  MISSING_SECRET_KEY: 'シークレットキーがありません',

  // 成功メッセージ
  SUCCESS: '成功',
  CHANGES_SAVED: '変更が保存されました',
  PASSWORD_CHANGED: 'パスワードが変更されました',
  EMAIL_VERIFIED: 'メールアドレスが確認されました',
  PHONE_VERIFIED: '電話番号が確認されました',
  RESET_PASSWORD_SUCCESS: 'パスワードリセットが成功しました',

  // 検証関連
  VERIFY_EMAIL: 'メールアドレスを確認',
  VERIFY_PHONE: '電話番号を確認',
  VERIFY_EMAIL_SENT: '確認メールを送信しました',
  VERIFY_PHONE_SENT: '確認コードを送信しました',
  PASSWORD_RESET_SENT: 'パスワードリセットリンクを送信しました',
  PASSWORD_RESET_SUCCESS: 'パスワードリセット成功',
  PASSWORD_CHANGED_SUCCESS: 'パスワード変更成功',

  // 確認ダイアログ
  ARE_YOU_SURE: '本当によろしいですか？',
  THIS_ACTION_CANNOT_BE_UNDONE: 'この操作は元に戻せません',
  CONFIRM_DELETE: '削除を確認',
  CONFIRM_REMOVE: '削除を確認',

  // その他のエラーメッセージ
  FAILED_TO_CREATE_SESSION: 'セッションの作成に失敗しました',
  FAILED_TO_UPDATE_USER: 'ユーザーの更新に失敗しました',
  FAILED_TO_GET_SESSION: 'セッションの取得に失敗しました',
  FAILED_TO_GET_USER_INFO: 'ユーザー情報の取得に失敗しました',
  FAILED_TO_CREATE_USER: 'ユーザーの作成に失敗しました',
  COULD_NOT_CREATE_SESSION: 'セッションを作成できませんでした',
  EMAIL_CAN_NOT_BE_UPDATED: 'メールアドレスを更新できません',
  FAILED_TO_UNLINK_LAST_ACCOUNT: '最後のアカウントのリンク解除に失敗しました',
  BANNED_USER: 'ユーザーが禁止されました',
  USER_BANNED: 'ユーザーが禁止されました',
  ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY: '匿名ユーザーは再度匿名でログインできません',
  YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: 'ユーザーのパスワードを設定する権限がありません',
  YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: 'ユーザーを削除する権限がありません',
  YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: 'ユーザーのセッションを取り消す権限がありません',
  YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: 'ユーザーになりすます権限がありません',
  YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: 'ユーザーを禁止する権限がありません',
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: 'ユーザーのセッションをリストする権限がありません',
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: 'ユーザーをリストする権限がありません',
  YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: 'ユーザーを作成する権限がありません',
  YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: 'ユーザーの役割を変更する権限がありません',
  YOU_CANNOT_BAN_YOURSELF: '自分自身を禁止することはできません',
  SERVER_ONLY_PROPERTY: 'サーバー専用プロパティ',
  NO_VALUES_TO_UPDATE: '更新する値がありません',
  INVALID_METADATA_TYPE: '無効なメタデータタイプ',
  METADATA_DISABLED: 'メタデータが無効になっています',
  REFILL_INTERVAL_AND_AMOUNT_REQUIRED: '補充間隔と量が必要です',
  REFILL_AMOUNT_AND_INTERVAL_REQUIRED: '補充量と間隔が必要です',
  INVALID_NAME_LENGTH: '無効な名前の長さ',
  INVALID_PREFIX_LENGTH: '無効なプレフィックスの長さ',
  INVALID_REMAINING: '無効な残り',
  EXPIRES_IN_IS_TOO_LARGE: '有効期限が長すぎます',
  EXPIRES_IN_IS_TOO_SMALL: '有効期限が短すぎます',
  KEY_NOT_RECOVERABLE: 'キーは回復できません',
  USAGE_EXCEEDED: '使用量を超えました',
  KEY_EXPIRED: 'キーが期限切れです',
  KEY_DISABLED: 'キーが無効になっています',
  KEY_DISABLED_EXPIRATION: 'キーの無効期限が切れています',
  KEY_NOT_FOUND: 'キーが見つかりません',
  INVALID_API_KEY: '無効なAPIキー',
  INVALID_USER_ID_FROM_API_KEY: 'APIキーからのユーザーIDが無効です',
  INVALID_API_KEY_GETTER_RETURN_TYPE: 'APIキーゲッターの戻り値の型が無効です',
  APP: 'アプリ',
  USER: 'ユーザー',
} as const

export default betterAuthJa
