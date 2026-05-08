/**
 * Neon Auth UI 组件的中文繁体翻译
 * 根据 Better Auth UI 的 AuthLocalization API 参考文档：
 * https://better-auth-ui.com/api-reference/auth-localization
 */
const betterAuthZhTw = {
  // 基础认证
  SIGN_IN: '登入',
  SIGN_UP: '註冊',
  SIGN_OUT: '登出',
  FORGOT_PASSWORD: '忘記密碼',
  RESET_PASSWORD: '重置密碼',
  CHANGE_PASSWORD: '修改密碼',

  // 表单字段
  EMAIL: '郵箱',
  PASSWORD: '密碼',
  CONFIRM_PASSWORD: '確認密碼',
  NAME: '姓名',
  USERNAME: '使用者名稱',
  PHONE: '手機號',
  CODE: '驗證碼',

  // 表单占位符
  EMAIL_PLACEHOLDER: 'm@example.com',
  USERNAME_PLACEHOLDER: '使用者名稱',
  SIGN_IN_USERNAME_PLACEHOLDER: '使用者名稱或郵箱',
  PASSWORD_PLACEHOLDER: '密碼',
  NAME_PLACEHOLDER: '姓名',
  PHONE_PLACEHOLDER: '手機號',
  CONFIRM_PASSWORD_PLACEHOLDER: '確認密碼',
  CURRENT_PASSWORD_PLACEHOLDER: '目前密碼',
  NEW_PASSWORD_PLACEHOLDER: '新密碼',
  BACKUP_CODE_PLACEHOLDER: '備用代碼。',

  // 按钮和操作
  SUBMIT: '提交',
  CONTINUE: '繼續',
  BACK: '返回',
  GO_BACK: '返回',
  CANCEL: '取消',
  SAVE: '保存',
  DELETE: '刪除',
  EDIT: '編輯',
  UPDATE: '更新',
  CREATE: '建立',
  REMOVE: '移除',
  ADD: '新增',
  UPLOAD: '上傳',
  LINK: '連結',
  UNLINK: '取消連結',
  DONE: '完成',
  REVOKE: '撤銷',
  ACCEPT: '接受',
  REJECT: '拒絕',

  // 连接词
  OR: '或',
  AND: '和',
  OR_CONTINUE_WITH: '或繼續使用',

  // OAuth 相关
  SIGN_IN_WITH: '使用',
  SIGN_UP_WITH: '使用',

  // 账户切换
  ALREADY_HAVE_AN_ACCOUNT: '已有帳戶？',
  DONT_HAVE_AN_ACCOUNT: '還沒有帳戶？',
  REMEMBER_ME: '記住我',
  SIGN_IN_ACTION: '登入',
  SIGN_UP_ACTION: '建立帳戶',
  RESET_PASSWORD_ACTION: '保存新密碼',
  FORGOT_PASSWORD_ACTION: '發送重置連結',

  // 页面描述
  SIGN_IN_DESCRIPTION: '請在下方輸入您的郵箱以登入帳戶',
  SIGN_IN_USERNAME_DESCRIPTION: '請在下方輸入您的使用者名稱或郵箱以登入帳戶',
  SIGN_UP_DESCRIPTION: '請輸入您的資訊以建立帳戶',
  SIGN_UP_EMAIL: '請檢查您的郵箱以取得驗證連結。',
  RESET_PASSWORD_DESCRIPTION: '請在下方輸入您的新密碼',
  FORGOT_PASSWORD_DESCRIPTION: '請輸入您的郵箱以重置密碼',
  FORGOT_PASSWORD_EMAIL: '請檢查您的郵箱以取得密碼重置連結。',
  FORGOT_PASSWORD_LINK: '忘記密碼？',

  // 账户
  ACCOUNT: '帳戶',
  ACCOUNTS: '帳戶',
  ACCOUNTS_DESCRIPTION: '管理您目前已登入的帳戶。',
  ACCOUNTS_INSTRUCTIONS: '登入到其他帳戶。',
  ADD_ACCOUNT: '新增帳戶',
  SWITCH_ACCOUNT: '切換帳戶',
  PERSONAL_ACCOUNT: '個人帳戶',

  // 头像
  AVATAR: '頭像',
  AVATAR_DESCRIPTION: '點擊頭像以從您的檔案中上傳自訂頭像。',
  AVATAR_INSTRUCTIONS: '頭像為可選項，但強烈推薦。',
  UPLOAD_AVATAR: '上傳頭像',
  DELETE_AVATAR: '刪除頭像',

  // 设置
  SETTINGS: '設定',
  SECURITY: '安全',
  UPDATED_SUCCESSFULLY: '更新成功',

  // 姓名
  NAME_DESCRIPTION: '請輸入您的全名或顯示名稱。',
  NAME_INSTRUCTIONS: '最多使用 32 個字元。',

  // 用户名
  USERNAME_DESCRIPTION: '輸入您想要用於登入的使用者名稱。',
  USERNAME_INSTRUCTIONS: '最多使用 32 個字元。',
  OPTIONAL_BRACKETS: '（可選）',

  // 邮箱
  EMAIL_DESCRIPTION: '輸入您想要用於登入的郵箱地址。',
  EMAIL_INSTRUCTIONS: '請輸入有效的郵箱地址。',
  EMAIL_IS_THE_SAME: '郵箱相同',
  EMAIL_REQUIRED: '郵箱地址為必填項',
  EMAIL_VERIFICATION: '郵箱驗證',
  EMAIL_VERIFICATION_DESCRIPTION: '請檢查您的郵箱以取得驗證碼來完成註冊。',
  EMAIL_VERIFICATION_SUCCESS: '郵箱驗證成功。',
  EMAIL_VERIFY_CHANGE: '請檢查您的郵箱以驗證更改。',
  EMAIL_OTP: '郵箱驗證碼',
  EMAIL_OTP_DESCRIPTION: '輸入您的郵箱以接收驗證碼',
  EMAIL_OTP_SEND_ACTION: '發送驗證碼',
  EMAIL_OTP_VERIFY_ACTION: '驗證驗證碼',
  EMAIL_OTP_VERIFICATION_SENT: '請檢查您的郵箱以取得驗證碼。',

  // 密码
  PASSWORD_REQUIRED: '密碼為必填項',
  PASSWORDS_DO_NOT_MATCH: '密碼不匹配',
  NEW_PASSWORD: '新密碼',
  NEW_PASSWORD_REQUIRED: '新密碼為必填項',
  CURRENT_PASSWORD: '目前密碼',
  CHANGE_PASSWORD_DESCRIPTION: '請輸入您的目前密碼和新密碼。',
  CHANGE_PASSWORD_INSTRUCTIONS: '至少使用 8 個字元。',
  CHANGE_PASSWORD_SUCCESS: '您的密碼已更改。',
  SET_PASSWORD: '設定密碼',
  SET_PASSWORD_DESCRIPTION: '點擊下方按鈕以接收設定帳戶密碼的郵件。',
  USER_ALREADY_HAS_PASSWORD: '使用者已有密碼',

  // 两步验证
  TWO_FACTOR: '兩步驗證',
  TWO_FACTOR_DESCRIPTION: '請輸入您的一次性密碼以繼續',
  TWO_FACTOR_ACTION: '驗證驗證碼',
  TWO_FACTOR_CARD_DESCRIPTION: '為您的帳戶新增額外的安全層。',
  TWO_FACTOR_DISABLE_INSTRUCTIONS: '請輸入您的密碼以禁用兩步驗證。',
  TWO_FACTOR_ENABLE_INSTRUCTIONS: '請輸入您的密碼以啟用兩步驗證',
  TWO_FACTOR_ENABLED: '兩步驗證已啟用',
  TWO_FACTOR_DISABLED: '兩步驗證已禁用',
  TWO_FACTOR_PROMPT: '兩步驗證',
  TWO_FACTOR_TOTP_LABEL: '使用您的身份驗證器掃描 QR 碼',
  ENABLE_TWO_FACTOR: '啟用兩步驗證',
  DISABLE_TWO_FACTOR: '禁用兩步驗證',
  TRUST_DEVICE: '信任此裝置',
  FORGOT_AUTHENTICATOR: '忘記身份驗證器？',
  CONTINUE_WITH_AUTHENTICATOR: '繼續使用身份驗證器',
  ONE_TIME_PASSWORD: '一次性密碼',

  // 备用代码
  BACKUP_CODES: '備用代碼',
  BACKUP_CODES_DESCRIPTION: '請將這些備用代碼保存在安全的地方。如果您丟失了兩步驗證方法，可以使用它們存取您的帳戶。',
  BACKUP_CODE: '備用代碼',
  BACKUP_CODE_REQUIRED: '備用代碼為必填項',
  COPY_ALL_CODES: '複製所有代碼',
  COPY_TO_CLIPBOARD: '複製到剪貼簿',
  COPIED_TO_CLIPBOARD: '已複製到剪貼簿',
  RECOVER_ACCOUNT: '恢復帳戶',
  RECOVER_ACCOUNT_DESCRIPTION: '請輸入備用代碼以存取您的帳戶',
  RECOVER_ACCOUNT_ACTION: '恢復帳戶',

  // 会话
  SESSIONS: '會話',
  SESSIONS_DESCRIPTION: '管理您的活動會話並撤銷存取權限。',
  CURRENT_SESSION: '目前會話',
  SESSION_NOT_FRESH: '您的會話已過期。請重新登入。',

  // 提供商
  PROVIDERS: '提供商',
  PROVIDERS_DESCRIPTION: '將您的帳戶與第三方服務連結。',
  SOCIAL_ACCOUNT_ALREADY_LINKED: '社交帳戶已連結',
  DISABLED_CREDENTIALS_DESCRIPTION: '選擇提供商以登入您的帳戶',

  // Passkeys
  PASSKEYS: 'Passkeys',
  PASSKEY: 'Passkey',
  PASSKEYS_DESCRIPTION: '管理您的 Passkeys 以確保安全存取。',
  PASSKEYS_INSTRUCTIONS: '無需密碼即可安全存取您的帳戶。',
  ADD_PASSKEY: '新增 Passkey',

  // API 密钥
  API_KEYS: 'API 金鑰',
  API_KEY: 'API 金鑰',
  API_KEYS_DESCRIPTION: '管理您的 API 金鑰以確保安全存取。',
  API_KEYS_INSTRUCTIONS: '生成 API 金鑰以程式化存取您的帳戶。',
  CREATE_API_KEY: '建立 API 金鑰',
  CREATE_API_KEY_DESCRIPTION: '為您的 API 金鑰輸入唯一名稱以區別於其他金鑰。',
  API_KEY_NAME_PLACEHOLDER: '新 API 金鑰',
  API_KEY_CREATED: 'API 金鑰已建立',
  CREATE_API_KEY_SUCCESS: '請複製您的 API 金鑰並將其保存在安全的地方。出於安全原因，我們無法再次顯示。',
  DELETE_API_KEY: '刪除 API 金鑰',
  DELETE_API_KEY_CONFIRM: '您確定要刪除此 API 金鑰嗎？',
  EXPIRES: '過期時間',
  NEVER_EXPIRES: '永不過期',
  NO_EXPIRATION: '無過期時間',

  // 魔法链接
  MAGIC_LINK: '魔法連結',
  MAGIC_LINK_DESCRIPTION: '輸入您的郵箱以接收魔法連結',
  MAGIC_LINK_ACTION: '發送魔法連結',
  MAGIC_LINK_EMAIL: '請檢查您的郵箱以取得魔法連結',

  // 邮箱验证
  VERIFY_YOUR_EMAIL: '驗證您的郵箱',
  VERIFY_YOUR_EMAIL_DESCRIPTION: '請驗證您的郵箱地址。請檢查您的收件箱以取得驗證郵件。如果您沒有收到郵件，請點擊下方按鈕重新發送。',
  RESEND_VERIFICATION_EMAIL: '重新發送驗證郵件',
  RESEND_CODE: '重新發送驗證碼',
  SEND_VERIFICATION_CODE: '發送驗證碼',

  // 删除账户
  DELETE_ACCOUNT: '刪除帳戶',
  DELETE_ACCOUNT_DESCRIPTION: '永久刪除您的帳戶及其所有內容。此操作無法撤銷，請謹慎操作。',
  DELETE_ACCOUNT_INSTRUCTIONS: '請確認刪除您的帳戶。此操作無法撤銷，請謹慎操作。',
  DELETE_ACCOUNT_VERIFY: '請檢查您的郵箱以驗證刪除帳戶。',
  DELETE_ACCOUNT_SUCCESS: '您的帳戶已被刪除。',

  // 条款和隐私
  BY_CONTINUING_YOU_AGREE: '繼續即表示您同意',
  TERMS_OF_SERVICE: '服務條款',
  PRIVACY_POLICY: '隱私政策',
  PROTECTED_BY_RECAPTCHA: '此網站受 reCAPTCHA 保護。',

  // 表单验证消息
  IS_REQUIRED: '為必填項',
  IS_INVALID: '無效',
  IS_THE_SAME: '相同',
  NAME_REQUIRED: '姓名為必填項',
  USERNAME_REQUIRED: '使用者名稱為必填項',
  PHONE_REQUIRED: '手機號為必填項',
  REQUIRED_FIELD: '此欄位為必填項',
  CONFIRM_PASSWORD_REQUIRED: '確認密碼為必填項',

  // 错误消息 - 验证
  INVALID_EMAIL: '無效的郵箱地址',
  INVALID_PHONE: '無效的手機號',
  INVALID_USERNAME: '無效的使用者名稱',
  INVALID_PASSWORD: '密碼必須至少8位，且至少包含一個小寫字母、一個大寫字母、一個數字和一個特殊字元@$!%*?&之一）',
  INVALID_CODE: '無效的驗證碼',
  INVALID_OTP: '無效的一次性密碼',

  // 错误消息 - 用户名
  USERNAME_TOO_SHORT: '使用者名稱太短',
  USERNAME_TOO_LONG: '使用者名稱太長',
  USERNAME_IS_ALREADY_TAKEN: '使用者名稱已被使用',

  // 错误消息 - 密码
  PASSWORD_TOO_SHORT: '密碼至少需要 8 個字元',
  PASSWORD_TOO_LONG: '密碼過長',
  PASSWORDS_DONT_MATCH: '密碼不匹配',
  PASSWORD_COMPROMISED: '密碼已被洩露，請使用其他密碼',

  // 错误消息 - 账户状态
  EMAIL_NOT_VERIFIED: '郵箱未驗證',
  PHONE_NOT_VERIFIED: '手機號未驗證',
  PHONE_NUMBER_NOT_VERIFIED: '手機號未驗證',
  EMAIL_VERIFICATION_REQUIRED: '需要驗證郵箱',
  ACCOUNT_LOCKED: '帳戶已鎖定',
  ACCOUNT_DISABLED: '帳戶已禁用',

  // 错误消息 - 认证
  INVALID_CREDENTIALS: '無效的憑據',
  INVALID_USERNAME_OR_PASSWORD: '使用者名稱或密碼錯誤',
  INVALID_EMAIL_OR_PASSWORD: '郵箱或密碼錯誤',
  INVALID_PHONE_OR_PASSWORD: '手機號或密碼錯誤',
  INVALID_PHONE_NUMBER_OR_PASSWORD: '手機號或密碼錯誤',
  AUTHENTICATION_FAILED: '認證失敗',
  SESSION_EXPIRED: '會話已過期',
  INVALID_SESSION_TOKEN: '無效的會話令牌',
  UNABLE_TO_CREATE_SESSION: '無法建立會話',
  UNAUTHORIZED: '未授權',
  UNAUTHORIZED_SESSION: '未授權的會話',

  // 错误消息 - OAuth
  INVALID_OAUTH_CONFIGURATION: '無效的 OAuth 設定',
  PROVIDER_ALREADY_CONNECTED: '該提供商已連結',
  PROVIDER_NOT_FOUND: '提供商未找到',
  INVALID_TOKEN: '無效的令牌',
  ID_TOKEN_NOT_SUPPORTED: '不支援 ID 令牌',

  // 错误消息 - OTP/验证码
  OTP_EXPIRED: '驗證碼已過期',
  OTP_NOT_FOUND: '驗證碼未找到',
  OTP_HAS_EXPIRED: '驗證碼已過期',
  OTP_NOT_ENABLED: 'OTP 未啟用',
  INVALID_BACKUP_CODE: '無效的備用代碼',
  BACKUP_CODES_NOT_ENABLED: '備用代碼未啟用',
  CHALLENGE_NOT_FOUND: '驗證挑戰未找到',

  // 错误消息 - 两步验证
  TWO_FACTOR_NOT_ENABLED: '兩步驗證未啟用',
  TOTP_NOT_ENABLED: 'TOTP 未啟用',
  INVALID_TWO_FACTOR_COOKIE: '無效的兩步驗證 Cookie',
  TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: '嘗試次數過多，請申請新驗證碼',

  // 错误消息 - 手机号
  INVALID_PHONE_NUMBER: '無效的手機號',
  PHONE_NUMBER_EXIST: '手機號已存在',

  // 错误消息 - Passkey
  PASSKEY_NOT_FOUND: 'Passkey 未找到',
  FAILED_TO_VERIFY_REGISTRATION: '驗證註冊失敗',
  FAILED_TO_UPDATE_PASSKEY: '更新 Passkey 失敗',
  YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY: '不允許註冊此 Passkey',

  // 错误消息 - 已存在/已使用
  EMAIL_ALREADY_EXISTS: '郵箱已被使用',
  USERNAME_ALREADY_TAKEN: '使用者名稱已被使用',
  PHONE_ALREADY_EXISTS: '手機號已被使用',
  EMAIL_ALREADY_IN_USE: '郵箱已被使用',
  USER_ALREADY_EXISTS: '使用者已存在',

  // 错误消息 - 不存在/未找到
  USER_NOT_FOUND: '使用者不存在',
  ACCOUNT_NOT_FOUND: '帳戶不存在',
  EMAIL_NOT_FOUND: '郵箱不存在',
  USER_EMAIL_NOT_FOUND: '使用者郵箱不存在',
  CREDENTIAL_ACCOUNT_NOT_FOUND: '憑據帳戶不存在',

  // 错误消息 - 限制
  TOO_MANY_ATTEMPTS: '嘗試次數過多',
  TOO_MANY_REQUESTS: '請求過於頻繁',
  RATE_LIMIT_EXCEEDED: '請求頻率超限',

  // 错误消息 - 其他
  UNEXPECTED_ERROR: '發生意外錯誤',
  UNKNOWN_ERROR: '未知錯誤',
  SOMETHING_WENT_WRONG: '出錯了',
  TRY_AGAIN: '請重試',
  OPERATION_FAILED: '操作失敗',
  REQUEST_FAILED: '請求失敗',
  UNKNOWN: '未知',
  MISSING_RESPONSE: '缺少回應',
  VERIFICATION_FAILED: '驗證失敗',
  SERVICE_UNAVAILABLE: '服務不可用',
  MISSING_SECRET_KEY: '缺少密鑰',

  // 成功消息
  SUCCESS: '成功',
  CHANGES_SAVED: '更改已保存',
  PASSWORD_CHANGED: '密碼已修改',
  EMAIL_VERIFIED: '郵箱已驗證',
  PHONE_VERIFIED: '手機號已驗證',
  RESET_PASSWORD_SUCCESS: '密碼重置成功',

  // 验证相关
  VERIFY_EMAIL: '驗證郵箱',
  VERIFY_PHONE: '驗證手機號',
  VERIFY_EMAIL_SENT: '驗證郵件已發送',
  VERIFY_PHONE_SENT: '驗證碼已發送',
  PASSWORD_RESET_SENT: '密碼重置連結已發送',
  PASSWORD_RESET_SUCCESS: '密碼重置成功',
  PASSWORD_CHANGED_SUCCESS: '密碼修改成功',

  // 确认对话框
  ARE_YOU_SURE: '確定嗎？',
  THIS_ACTION_CANNOT_BE_UNDONE: '此操作無法撤銷',
  CONFIRM_DELETE: '確認刪除',
  CONFIRM_REMOVE: '確認移除',

  // 其他错误消息
  FAILED_TO_CREATE_SESSION: '無法建立會話',
  FAILED_TO_UPDATE_USER: '無法更新使用者',
  FAILED_TO_GET_SESSION: '無法取得會話',
  FAILED_TO_GET_USER_INFO: '無法取得使用者資訊',
  FAILED_TO_CREATE_USER: '無法建立使用者',
  COULD_NOT_CREATE_SESSION: '無法建立會話',
  EMAIL_CAN_NOT_BE_UPDATED: '無法更新郵箱',
  FAILED_TO_UNLINK_LAST_ACCOUNT: '無法取消連結最後一個帳戶',
  BANNED_USER: '使用者已被封禁',
  USER_BANNED: '使用者已被封禁',
  ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY: '匿名使用者無法再次匿名登入',
  YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: '您無權設定使用者的密碼',
  YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: '您無權刪除使用者',
  YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: '您無權撤銷使用者的會話',
  YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: '您無權冒充使用者',
  YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: '您無權封禁使用者',
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: '您無權列出使用者的會話',
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: '您無權列出使用者',
  YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: '您無權建立使用者',
  YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: '您無權更改使用者的角色',
  YOU_CANNOT_BAN_YOURSELF: '您不能封禁自己',
  SERVER_ONLY_PROPERTY: '僅伺服器屬性',
  NO_VALUES_TO_UPDATE: '沒有可更新的值',
  INVALID_METADATA_TYPE: '無效的中繼資料型別',
  METADATA_DISABLED: '中繼資料已禁用',
  REFILL_INTERVAL_AND_AMOUNT_REQUIRED: '需要補充間隔和數量',
  REFILL_AMOUNT_AND_INTERVAL_REQUIRED: '需要補充數量和間隔',
  INVALID_NAME_LENGTH: '無效的名稱長度',
  INVALID_PREFIX_LENGTH: '無效的前綴長度',
  INVALID_REMAINING: '無效的剩餘',
  EXPIRES_IN_IS_TOO_LARGE: '過期時間太長',
  EXPIRES_IN_IS_TOO_SMALL: '過期時間太短',
  KEY_NOT_RECOVERABLE: '密鑰不可恢復',
  USAGE_EXCEEDED: '使用量超限',
  KEY_EXPIRED: '密鑰已過期',
  KEY_DISABLED: '密鑰已禁用',
  KEY_DISABLED_EXPIRATION: '密鑰禁用過期',
  KEY_NOT_FOUND: '密鑰未找到',
  INVALID_API_KEY: '無效的 API 金鑰',
  INVALID_USER_ID_FROM_API_KEY: '從 API 金鑰取得的使用者 ID 無效',
  INVALID_API_KEY_GETTER_RETURN_TYPE: 'API 金鑰 getter 回傳型別無效',
  APP: '應用',
  USER: '使用者',
} as const

export default betterAuthZhTw
