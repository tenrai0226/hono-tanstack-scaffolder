/**
 * Neon Auth UI 组件的中文简体翻译
 * 根据 Better Auth UI 的 AuthLocalization API 参考文档：
 * https://better-auth-ui.com/api-reference/auth-localization
 */
const betterAuthZhCn = {
  // 基础认证
  SIGN_IN: '登录',
  SIGN_UP: '注册',
  SIGN_OUT: '登出',
  FORGOT_PASSWORD: '忘记密码',
  RESET_PASSWORD: '重置密码',
  CHANGE_PASSWORD: '修改密码',

  // 表单字段
  EMAIL: '邮箱',
  PASSWORD: '密码',
  CONFIRM_PASSWORD: '确认密码',
  NAME: '姓名',
  USERNAME: '用户名',
  PHONE: '手机号',
  CODE: '验证码',

  // 表单占位符
  EMAIL_PLACEHOLDER: 'm@example.com',
  USERNAME_PLACEHOLDER: '用户名',
  SIGN_IN_USERNAME_PLACEHOLDER: '用户名或邮箱',
  PASSWORD_PLACEHOLDER: '密码',
  NAME_PLACEHOLDER: '姓名',
  PHONE_PLACEHOLDER: '手机号',
  CONFIRM_PASSWORD_PLACEHOLDER: '确认密码',
  CURRENT_PASSWORD_PLACEHOLDER: '当前密码',
  NEW_PASSWORD_PLACEHOLDER: '新密码',
  BACKUP_CODE_PLACEHOLDER: '备用代码。',

  // 按钮和操作
  SUBMIT: '提交',
  CONTINUE: '继续',
  BACK: '返回',
  GO_BACK: '返回',
  CANCEL: '取消',
  SAVE: '保存',
  DELETE: '删除',
  EDIT: '编辑',
  UPDATE: '更新',
  CREATE: '创建',
  REMOVE: '移除',
  ADD: '添加',
  UPLOAD: '上传',
  LINK: '链接',
  UNLINK: '取消链接',
  DONE: '完成',
  REVOKE: '撤销',
  ACCEPT: '接受',
  REJECT: '拒绝',

  // 连接词
  OR: '或',
  AND: '和',
  OR_CONTINUE_WITH: '或继续使用',

  // OAuth 相关
  SIGN_IN_WITH: '使用',
  SIGN_UP_WITH: '使用',

  // 账户切换
  ALREADY_HAVE_AN_ACCOUNT: '已有账户？',
  DONT_HAVE_AN_ACCOUNT: '还没有账户？',
  REMEMBER_ME: '记住我',
  SIGN_IN_ACTION: '登录',
  SIGN_UP_ACTION: '创建账户',
  RESET_PASSWORD_ACTION: '保存新密码',
  FORGOT_PASSWORD_ACTION: '发送重置链接',

  // 页面描述
  SIGN_IN_DESCRIPTION: '请在下方输入您的邮箱以登录账户',
  SIGN_IN_USERNAME_DESCRIPTION: '请在下方输入您的用户名或邮箱以登录账户',
  SIGN_UP_DESCRIPTION: '请输入您的信息以创建账户',
  SIGN_UP_EMAIL: '请检查您的邮箱以获取验证链接。',
  RESET_PASSWORD_DESCRIPTION: '请在下方输入您的新密码',
  FORGOT_PASSWORD_DESCRIPTION: '请输入您的邮箱以重置密码',
  FORGOT_PASSWORD_EMAIL: '请检查您的邮箱以获取密码重置链接。',
  FORGOT_PASSWORD_LINK: '忘记密码？',

  // 账户
  ACCOUNT: '账户',
  ACCOUNTS: '账户',
  ACCOUNTS_DESCRIPTION: '管理您当前已登录的账户。',
  ACCOUNTS_INSTRUCTIONS: '登录到其他账户。',
  ADD_ACCOUNT: '添加账户',
  SWITCH_ACCOUNT: '切换账户',
  PERSONAL_ACCOUNT: '个人账户',

  // 头像
  AVATAR: '头像',
  AVATAR_DESCRIPTION: '点击头像以从您的文件中上传自定义头像。',
  AVATAR_INSTRUCTIONS: '头像为可选项，但强烈推荐。',
  UPLOAD_AVATAR: '上传头像',
  DELETE_AVATAR: '删除头像',

  // 设置
  SETTINGS: '设置',
  SECURITY: '安全',
  UPDATED_SUCCESSFULLY: '更新成功',

  // 姓名
  NAME_DESCRIPTION: '请输入您的全名或显示名称。',
  NAME_INSTRUCTIONS: '最多使用 32 个字符。',

  // 用户名
  USERNAME_DESCRIPTION: '输入您想要用于登录的用户名。',
  USERNAME_INSTRUCTIONS: '最多使用 32 个字符。',
  OPTIONAL_BRACKETS: '（可选）',

  // 邮箱
  EMAIL_DESCRIPTION: '输入您想要用于登录的邮箱地址。',
  EMAIL_INSTRUCTIONS: '请输入有效的邮箱地址。',
  EMAIL_IS_THE_SAME: '邮箱相同',
  EMAIL_REQUIRED: '邮箱地址为必填项',
  EMAIL_VERIFICATION: '邮箱验证',
  EMAIL_VERIFICATION_DESCRIPTION: '请检查您的邮箱以获取验证码来完成注册。',
  EMAIL_VERIFICATION_SUCCESS: '邮箱验证成功。',
  EMAIL_VERIFY_CHANGE: '请检查您的邮箱以验证更改。',
  EMAIL_OTP: '邮箱验证码',
  EMAIL_OTP_DESCRIPTION: '输入您的邮箱以接收验证码',
  EMAIL_OTP_SEND_ACTION: '发送验证码',
  EMAIL_OTP_VERIFY_ACTION: '验证验证码',
  EMAIL_OTP_VERIFICATION_SENT: '请检查您的邮箱以获取验证码。',

  // 密码
  PASSWORD_REQUIRED: '密码为必填项',
  PASSWORDS_DO_NOT_MATCH: '密码不匹配',
  NEW_PASSWORD: '新密码',
  NEW_PASSWORD_REQUIRED: '新密码为必填项',
  CURRENT_PASSWORD: '当前密码',
  CHANGE_PASSWORD_DESCRIPTION: '请输入您的当前密码和新密码。',
  CHANGE_PASSWORD_INSTRUCTIONS: '至少使用 8 个字符。',
  CHANGE_PASSWORD_SUCCESS: '您的密码已更改。',
  SET_PASSWORD: '设置密码',
  SET_PASSWORD_DESCRIPTION: '点击下方按钮以接收设置账户密码的邮件。',
  USER_ALREADY_HAS_PASSWORD: '用户已有密码',

  // 两步验证
  TWO_FACTOR: '两步验证',
  TWO_FACTOR_DESCRIPTION: '请输入您的一次性密码以继续',
  TWO_FACTOR_ACTION: '验证验证码',
  TWO_FACTOR_CARD_DESCRIPTION: '为您的账户添加额外的安全层。',
  TWO_FACTOR_DISABLE_INSTRUCTIONS: '请输入您的密码以禁用两步验证。',
  TWO_FACTOR_ENABLE_INSTRUCTIONS: '请输入您的密码以启用两步验证',
  TWO_FACTOR_ENABLED: '两步验证已启用',
  TWO_FACTOR_DISABLED: '两步验证已禁用',
  TWO_FACTOR_PROMPT: '两步验证',
  TWO_FACTOR_TOTP_LABEL: '使用您的身份验证器扫描二维码',
  ENABLE_TWO_FACTOR: '启用两步验证',
  DISABLE_TWO_FACTOR: '禁用两步验证',
  TRUST_DEVICE: '信任此设备',
  FORGOT_AUTHENTICATOR: '忘记身份验证器？',
  CONTINUE_WITH_AUTHENTICATOR: '继续使用身份验证器',
  ONE_TIME_PASSWORD: '一次性密码',

  // 备用代码
  BACKUP_CODES: '备用代码',
  BACKUP_CODES_DESCRIPTION: '请将这些备用代码保存在安全的地方。如果您丢失了两步验证方法，可以使用它们访问您的账户。',
  BACKUP_CODE: '备用代码',
  BACKUP_CODE_REQUIRED: '备用代码为必填项',
  COPY_ALL_CODES: '复制所有代码',
  COPY_TO_CLIPBOARD: '复制到剪贴板',
  COPIED_TO_CLIPBOARD: '已复制到剪贴板',
  RECOVER_ACCOUNT: '恢复账户',
  RECOVER_ACCOUNT_DESCRIPTION: '请输入备用代码以访问您的账户',
  RECOVER_ACCOUNT_ACTION: '恢复账户',

  // 会话
  SESSIONS: '会话',
  SESSIONS_DESCRIPTION: '管理您的活动会话并撤销访问权限。',
  CURRENT_SESSION: '当前会话',
  SESSION_NOT_FRESH: '您的会话已过期。请重新登录。',

  // 提供商
  PROVIDERS: '提供商',
  PROVIDERS_DESCRIPTION: '将您的账户与第三方服务连接。',
  SOCIAL_ACCOUNT_ALREADY_LINKED: '社交账户已链接',
  DISABLED_CREDENTIALS_DESCRIPTION: '选择提供商以登录您的账户',

  // Passkeys
  PASSKEYS: 'Passkeys',
  PASSKEY: 'Passkey',
  PASSKEYS_DESCRIPTION: '管理您的 Passkeys 以确保安全访问。',
  PASSKEYS_INSTRUCTIONS: '无需密码即可安全访问您的账户。',
  ADD_PASSKEY: '添加 Passkey',

  // API 密钥
  API_KEYS: 'API 密钥',
  API_KEY: 'API 密钥',
  API_KEYS_DESCRIPTION: '管理您的 API 密钥以确保安全访问。',
  API_KEYS_INSTRUCTIONS: '生成 API 密钥以编程方式访问您的账户。',
  CREATE_API_KEY: '创建 API 密钥',
  CREATE_API_KEY_DESCRIPTION: '为您的 API 密钥输入唯一名称以区别于其他密钥。',
  API_KEY_NAME_PLACEHOLDER: '新 API 密钥',
  API_KEY_CREATED: 'API 密钥已创建',
  CREATE_API_KEY_SUCCESS: '请复制您的 API 密钥并将其保存在安全的地方。出于安全原因，我们无法再次显示。',
  DELETE_API_KEY: '删除 API 密钥',
  DELETE_API_KEY_CONFIRM: '您确定要删除此 API 密钥吗？',
  EXPIRES: '过期时间',
  NEVER_EXPIRES: '永不过期',
  NO_EXPIRATION: '无过期时间',

  // 魔法链接
  MAGIC_LINK: '魔法链接',
  MAGIC_LINK_DESCRIPTION: '输入您的邮箱以接收魔法链接',
  MAGIC_LINK_ACTION: '发送魔法链接',
  MAGIC_LINK_EMAIL: '请检查您的邮箱以获取魔法链接',

  // 邮箱验证
  VERIFY_YOUR_EMAIL: '验证您的邮箱',
  VERIFY_YOUR_EMAIL_DESCRIPTION: '请验证您的邮箱地址。请检查您的收件箱以获取验证邮件。如果您没有收到邮件，请点击下方按钮重新发送。',
  RESEND_VERIFICATION_EMAIL: '重新发送验证邮件',
  RESEND_CODE: '重新发送验证码',
  SEND_VERIFICATION_CODE: '发送验证码',

  // 删除账户
  DELETE_ACCOUNT: '删除账户',
  DELETE_ACCOUNT_DESCRIPTION: '永久删除您的账户及其所有内容。此操作无法撤销，请谨慎操作。',
  DELETE_ACCOUNT_INSTRUCTIONS: '请确认删除您的账户。此操作无法撤销，请谨慎操作。',
  DELETE_ACCOUNT_VERIFY: '请检查您的邮箱以验证删除账户。',
  DELETE_ACCOUNT_SUCCESS: '您的账户已被删除。',

  // 条款和隐私
  BY_CONTINUING_YOU_AGREE: '继续即表示您同意',
  TERMS_OF_SERVICE: '服务条款',
  PRIVACY_POLICY: '隐私政策',
  PROTECTED_BY_RECAPTCHA: '此网站受 reCAPTCHA 保护。',

  // 表单验证消息
  IS_REQUIRED: '为必填项',
  IS_INVALID: '无效',
  IS_THE_SAME: '相同',
  NAME_REQUIRED: '姓名为必填项',
  USERNAME_REQUIRED: '用户名为必填项',
  PHONE_REQUIRED: '手机号为必填项',
  REQUIRED_FIELD: '此字段为必填项',
  CONFIRM_PASSWORD_REQUIRED: '确认密码为必填项',

  // 错误消息 - 验证
  INVALID_EMAIL: '无效的邮箱地址',
  INVALID_PHONE: '无效的手机号',
  INVALID_USERNAME: '无效的用户名',
  INVALID_PASSWORD: '密码必须至少8位，且至少包含一个小写字母、一个大写字母、一个数字和一个特殊字符@$!%*?&之一）',
  INVALID_CODE: '无效的验证码',
  INVALID_OTP: '无效的一次性密码',

  // 错误消息 - 用户名
  USERNAME_TOO_SHORT: '用户名太短',
  USERNAME_TOO_LONG: '用户名太长',
  USERNAME_IS_ALREADY_TAKEN: '用户名已被使用',

  // 错误消息 - 密码
  PASSWORD_TOO_SHORT: '密码至少需要 8 个字符',
  PASSWORD_TOO_LONG: '密码过长',
  PASSWORDS_DONT_MATCH: '密码不匹配',
  PASSWORD_COMPROMISED: '密码已被泄露，请使用其他密码',

  // 错误消息 - 账户状态
  EMAIL_NOT_VERIFIED: '邮箱未验证',
  PHONE_NOT_VERIFIED: '手机号未验证',
  PHONE_NUMBER_NOT_VERIFIED: '手机号未验证',
  EMAIL_VERIFICATION_REQUIRED: '需要验证邮箱',
  ACCOUNT_LOCKED: '账户已锁定',
  ACCOUNT_DISABLED: '账户已禁用',

  // 错误消息 - 认证
  INVALID_CREDENTIALS: '无效的凭据',
  INVALID_USERNAME_OR_PASSWORD: '用户名或密码错误',
  INVALID_EMAIL_OR_PASSWORD: '邮箱或密码错误',
  INVALID_PHONE_OR_PASSWORD: '手机号或密码错误',
  INVALID_PHONE_NUMBER_OR_PASSWORD: '手机号或密码错误',
  AUTHENTICATION_FAILED: '认证失败',
  SESSION_EXPIRED: '会话已过期',
  INVALID_SESSION_TOKEN: '无效的会话令牌',
  UNABLE_TO_CREATE_SESSION: '无法创建会话',
  UNAUTHORIZED: '未授权',
  UNAUTHORIZED_SESSION: '未授权的会话',

  // 错误消息 - OAuth
  INVALID_OAUTH_CONFIGURATION: '无效的 OAuth 配置',
  PROVIDER_ALREADY_CONNECTED: '该提供商已连接',
  PROVIDER_NOT_FOUND: '提供商未找到',
  INVALID_TOKEN: '无效的令牌',
  ID_TOKEN_NOT_SUPPORTED: '不支持 ID 令牌',

  // 错误消息 - OTP/验证码
  OTP_EXPIRED: '验证码已过期',
  OTP_NOT_FOUND: '验证码未找到',
  OTP_HAS_EXPIRED: '验证码已过期',
  OTP_NOT_ENABLED: 'OTP 未启用',
  INVALID_BACKUP_CODE: '无效的备用代码',
  BACKUP_CODES_NOT_ENABLED: '备用代码未启用',
  CHALLENGE_NOT_FOUND: '验证挑战未找到',

  // 错误消息 - 两步验证
  TWO_FACTOR_NOT_ENABLED: '两步验证未启用',
  TOTP_NOT_ENABLED: 'TOTP 未启用',
  INVALID_TWO_FACTOR_COOKIE: '无效的两步验证 Cookie',
  TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: '尝试次数过多，请申请新验证码',

  // 错误消息 - 手机号
  INVALID_PHONE_NUMBER: '无效的手机号',
  PHONE_NUMBER_EXIST: '手机号已存在',

  // 错误消息 - Passkey
  PASSKEY_NOT_FOUND: 'Passkey 未找到',
  FAILED_TO_VERIFY_REGISTRATION: '验证注册失败',
  FAILED_TO_UPDATE_PASSKEY: '更新 Passkey 失败',
  YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY: '不允许注册此 Passkey',

  // 错误消息 - 已存在/已使用
  EMAIL_ALREADY_EXISTS: '邮箱已被使用',
  USERNAME_ALREADY_TAKEN: '用户名已被使用',
  PHONE_ALREADY_EXISTS: '手机号已被使用',
  EMAIL_ALREADY_IN_USE: '邮箱已被使用',
  USER_ALREADY_EXISTS: '用户已存在',

  // 错误消息 - 不存在/未找到
  USER_NOT_FOUND: '用户不存在',
  ACCOUNT_NOT_FOUND: '账户不存在',
  EMAIL_NOT_FOUND: '邮箱不存在',
  USER_EMAIL_NOT_FOUND: '用户邮箱不存在',
  CREDENTIAL_ACCOUNT_NOT_FOUND: '凭据账户不存在',

  // 错误消息 - 限制
  TOO_MANY_ATTEMPTS: '尝试次数过多',
  TOO_MANY_REQUESTS: '请求过于频繁',
  RATE_LIMIT_EXCEEDED: '请求频率超限',

  // 错误消息 - 其他
  UNEXPECTED_ERROR: '发生意外错误',
  UNKNOWN_ERROR: '未知错误',
  SOMETHING_WENT_WRONG: '出错了',
  TRY_AGAIN: '请重试',
  OPERATION_FAILED: '操作失败',
  REQUEST_FAILED: '请求失败',
  UNKNOWN: '未知',
  MISSING_RESPONSE: '缺少响应',
  VERIFICATION_FAILED: '验证失败',
  SERVICE_UNAVAILABLE: '服务不可用',
  MISSING_SECRET_KEY: '缺少密钥',

  // 成功消息
  SUCCESS: '成功',
  CHANGES_SAVED: '更改已保存',
  PASSWORD_CHANGED: '密码已修改',
  EMAIL_VERIFIED: '邮箱已验证',
  PHONE_VERIFIED: '手机号已验证',
  RESET_PASSWORD_SUCCESS: '密码重置成功',

  // 验证相关
  VERIFY_EMAIL: '验证邮箱',
  VERIFY_PHONE: '验证手机号',
  VERIFY_EMAIL_SENT: '验证邮件已发送',
  VERIFY_PHONE_SENT: '验证码已发送',
  PASSWORD_RESET_SENT: '密码重置链接已发送',
  PASSWORD_RESET_SUCCESS: '密码重置成功',
  PASSWORD_CHANGED_SUCCESS: '密码修改成功',

  // 确认对话框
  ARE_YOU_SURE: '确定吗？',
  THIS_ACTION_CANNOT_BE_UNDONE: '此操作无法撤销',
  CONFIRM_DELETE: '确认删除',
  CONFIRM_REMOVE: '确认移除',

  // 其他错误消息
  FAILED_TO_CREATE_SESSION: '无法创建会话',
  FAILED_TO_UPDATE_USER: '无法更新用户',
  FAILED_TO_GET_SESSION: '无法获取会话',
  FAILED_TO_GET_USER_INFO: '无法获取用户信息',
  FAILED_TO_CREATE_USER: '无法创建用户',
  COULD_NOT_CREATE_SESSION: '无法创建会话',
  EMAIL_CAN_NOT_BE_UPDATED: '无法更新邮箱',
  FAILED_TO_UNLINK_LAST_ACCOUNT: '无法取消链接最后一个账户',
  BANNED_USER: '用户已被封禁',
  USER_BANNED: '用户已被封禁',
  ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY: '匿名用户无法再次匿名登录',
  YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: '您无权设置用户的密码',
  YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: '您无权删除用户',
  YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: '您无权撤销用户的会话',
  YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: '您无权冒充用户',
  YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: '您无权封禁用户',
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: '您无权列出用户的会话',
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: '您无权列出用户',
  YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: '您无权创建用户',
  YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: '您无权更改用户的角色',
  YOU_CANNOT_BAN_YOURSELF: '您不能封禁自己',
  SERVER_ONLY_PROPERTY: '仅服务器属性',
  NO_VALUES_TO_UPDATE: '没有可更新的值',
  INVALID_METADATA_TYPE: '无效的元数据类型',
  METADATA_DISABLED: '元数据已禁用',
  REFILL_INTERVAL_AND_AMOUNT_REQUIRED: '需要补充间隔和数量',
  REFILL_AMOUNT_AND_INTERVAL_REQUIRED: '需要补充数量和间隔',
  INVALID_NAME_LENGTH: '无效的名称长度',
  INVALID_PREFIX_LENGTH: '无效的前缀长度',
  INVALID_REMAINING: '无效的剩余',
  EXPIRES_IN_IS_TOO_LARGE: '过期时间太长',
  EXPIRES_IN_IS_TOO_SMALL: '过期时间太短',
  KEY_NOT_RECOVERABLE: '密钥不可恢复',
  USAGE_EXCEEDED: '使用量超限',
  KEY_EXPIRED: '密钥已过期',
  KEY_DISABLED: '密钥已禁用',
  KEY_DISABLED_EXPIRATION: '密钥禁用过期',
  KEY_NOT_FOUND: '密钥未找到',
  INVALID_API_KEY: '无效的 API 密钥',
  INVALID_USER_ID_FROM_API_KEY: '从 API 密钥获取的用户 ID 无效',
  INVALID_API_KEY_GETTER_RETURN_TYPE: 'API 密钥 getter 返回类型无效',
  APP: '应用',
  USER: '用户',
} as const

export default betterAuthZhCn
