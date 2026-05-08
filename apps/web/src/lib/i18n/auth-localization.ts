/**
 * Neon Auth UI Localization 辅助函数
 * 将我们的消息格式转换为 Neon Auth 的 AuthLocalization 格式
 *
 * 根据 Better Auth UI 的 AuthLocalization API 参考文档：
 * https://better-auth-ui.com/api-reference/auth-localization
 */
import type { Messages } from './messages'
import type { Locale } from './shared'
import betterAuthEnBase from './messages/betterAuth/en'

/**
 * Neon Auth UI 需要的 localization 字段
 * 根据 Better Auth UI 的完整字段定义
 * https://better-auth-ui.com/api-reference/auth-localization
 */
export interface BetterAuthLocalization {
  // 基础认证
  SIGN_IN?: string
  SIGN_UP?: string
  SIGN_OUT?: string
  FORGOT_PASSWORD?: string
  RESET_PASSWORD?: string
  CHANGE_PASSWORD?: string

  // 表单字段
  EMAIL?: string
  PASSWORD?: string
  CONFIRM_PASSWORD?: string
  NAME?: string
  USERNAME?: string
  PHONE?: string
  CODE?: string

  // 表单占位符
  EMAIL_PLACEHOLDER?: string
  USERNAME_PLACEHOLDER?: string
  SIGN_IN_USERNAME_PLACEHOLDER?: string
  PASSWORD_PLACEHOLDER?: string
  NAME_PLACEHOLDER?: string
  PHONE_PLACEHOLDER?: string
  CONFIRM_PASSWORD_PLACEHOLDER?: string
  CURRENT_PASSWORD_PLACEHOLDER?: string
  NEW_PASSWORD_PLACEHOLDER?: string
  BACKUP_CODE_PLACEHOLDER?: string

  // 按钮和操作
  SUBMIT?: string
  CONTINUE?: string
  BACK?: string
  GO_BACK?: string
  CANCEL?: string
  SAVE?: string
  DELETE?: string
  EDIT?: string
  UPDATE?: string
  CREATE?: string
  REMOVE?: string
  ADD?: string
  UPLOAD?: string
  LINK?: string
  UNLINK?: string
  DONE?: string
  REVOKE?: string
  ACCEPT?: string
  REJECT?: string

  // 连接词
  OR?: string
  AND?: string
  OR_CONTINUE_WITH?: string

  // OAuth 相关
  SIGN_IN_WITH?: string
  SIGN_UP_WITH?: string
  PROVIDER_ALREADY_CONNECTED?: string
  PROVIDER_NOT_FOUND?: string
  INVALID_TOKEN?: string
  ID_TOKEN_NOT_SUPPORTED?: string

  // 账户切换
  ALREADY_HAVE_ACCOUNT?: string
  ALREADY_HAVE_AN_ACCOUNT?: string
  DONT_HAVE_ACCOUNT?: string
  DONT_HAVE_AN_ACCOUNT?: string
  REMEMBER_ME?: string
  SIGN_IN_ACTION?: string
  SIGN_UP_ACTION?: string
  RESET_PASSWORD_ACTION?: string
  FORGOT_PASSWORD_ACTION?: string

  // 页面描述
  SIGN_IN_DESCRIPTION?: string
  SIGN_IN_USERNAME_DESCRIPTION?: string
  SIGN_UP_DESCRIPTION?: string
  SIGN_UP_EMAIL?: string
  RESET_PASSWORD_DESCRIPTION?: string
  FORGOT_PASSWORD_DESCRIPTION?: string
  FORGOT_PASSWORD_EMAIL?: string
  FORGOT_PASSWORD_LINK?: string

  // 账户
  ACCOUNT?: string
  ACCOUNTS?: string
  ACCOUNTS_DESCRIPTION?: string
  ACCOUNTS_INSTRUCTIONS?: string
  ADD_ACCOUNT?: string
  SWITCH_ACCOUNT?: string
  PERSONAL_ACCOUNT?: string

  // 头像
  AVATAR?: string
  AVATAR_DESCRIPTION?: string
  AVATAR_INSTRUCTIONS?: string
  UPLOAD_AVATAR?: string
  DELETE_AVATAR?: string

  // 设置
  SETTINGS?: string
  SECURITY?: string
  UPDATED_SUCCESSFULLY?: string

  // 姓名
  NAME_DESCRIPTION?: string
  NAME_INSTRUCTIONS?: string

  // 用户名
  USERNAME_DESCRIPTION?: string
  USERNAME_INSTRUCTIONS?: string
  OPTIONAL_BRACKETS?: string

  // 邮箱
  EMAIL_DESCRIPTION?: string
  EMAIL_INSTRUCTIONS?: string
  EMAIL_IS_THE_SAME?: string
  EMAIL_VERIFICATION?: string
  EMAIL_VERIFICATION_DESCRIPTION?: string
  EMAIL_VERIFICATION_SUCCESS?: string
  EMAIL_VERIFY_CHANGE?: string
  EMAIL_OTP?: string
  EMAIL_OTP_DESCRIPTION?: string
  EMAIL_OTP_SEND_ACTION?: string
  EMAIL_OTP_VERIFY_ACTION?: string
  EMAIL_OTP_VERIFICATION_SENT?: string

  // 密码
  NEW_PASSWORD?: string
  NEW_PASSWORD_REQUIRED?: string
  CURRENT_PASSWORD?: string
  CHANGE_PASSWORD_DESCRIPTION?: string
  CHANGE_PASSWORD_INSTRUCTIONS?: string
  CHANGE_PASSWORD_SUCCESS?: string
  SET_PASSWORD?: string
  SET_PASSWORD_DESCRIPTION?: string
  USER_ALREADY_HAS_PASSWORD?: string
  PASSWORDS_DO_NOT_MATCH?: string

  // 两步验证
  TWO_FACTOR?: string
  TWO_FACTOR_DESCRIPTION?: string
  TWO_FACTOR_ACTION?: string
  TWO_FACTOR_CARD_DESCRIPTION?: string
  TWO_FACTOR_DISABLE_INSTRUCTIONS?: string
  TWO_FACTOR_ENABLE_INSTRUCTIONS?: string
  TWO_FACTOR_ENABLED?: string
  TWO_FACTOR_DISABLED?: string
  TWO_FACTOR_PROMPT?: string
  TWO_FACTOR_TOTP_LABEL?: string
  ENABLE_TWO_FACTOR?: string
  DISABLE_TWO_FACTOR?: string
  TRUST_DEVICE?: string
  FORGOT_AUTHENTICATOR?: string
  CONTINUE_WITH_AUTHENTICATOR?: string
  ONE_TIME_PASSWORD?: string

  // 备用代码
  BACKUP_CODES?: string
  BACKUP_CODES_DESCRIPTION?: string
  BACKUP_CODE?: string
  BACKUP_CODE_REQUIRED?: string
  COPY_ALL_CODES?: string
  COPY_TO_CLIPBOARD?: string
  COPIED_TO_CLIPBOARD?: string
  RECOVER_ACCOUNT?: string
  RECOVER_ACCOUNT_DESCRIPTION?: string
  RECOVER_ACCOUNT_ACTION?: string

  // 会话
  SESSIONS?: string
  SESSIONS_DESCRIPTION?: string
  CURRENT_SESSION?: string
  SESSION_NOT_FRESH?: string

  // 提供商
  PROVIDERS?: string
  PROVIDERS_DESCRIPTION?: string
  SOCIAL_ACCOUNT_ALREADY_LINKED?: string
  DISABLED_CREDENTIALS_DESCRIPTION?: string

  // Passkeys
  PASSKEYS?: string
  PASSKEY?: string
  PASSKEYS_DESCRIPTION?: string
  PASSKEYS_INSTRUCTIONS?: string
  ADD_PASSKEY?: string

  // API 密钥
  API_KEYS?: string
  API_KEY?: string
  API_KEYS_DESCRIPTION?: string
  API_KEYS_INSTRUCTIONS?: string
  CREATE_API_KEY?: string
  CREATE_API_KEY_DESCRIPTION?: string
  API_KEY_NAME_PLACEHOLDER?: string
  API_KEY_CREATED?: string
  CREATE_API_KEY_SUCCESS?: string
  DELETE_API_KEY?: string
  DELETE_API_KEY_CONFIRM?: string
  EXPIRES?: string
  NEVER_EXPIRES?: string
  NO_EXPIRATION?: string

  // 魔法链接
  MAGIC_LINK?: string
  MAGIC_LINK_DESCRIPTION?: string
  MAGIC_LINK_ACTION?: string
  MAGIC_LINK_EMAIL?: string

  // 邮箱验证
  VERIFY_YOUR_EMAIL?: string
  VERIFY_YOUR_EMAIL_DESCRIPTION?: string
  RESEND_VERIFICATION_EMAIL?: string
  RESEND_CODE?: string
  SEND_VERIFICATION_CODE?: string

  // 删除账户
  DELETE_ACCOUNT?: string
  DELETE_ACCOUNT_DESCRIPTION?: string
  DELETE_ACCOUNT_INSTRUCTIONS?: string
  DELETE_ACCOUNT_VERIFY?: string
  DELETE_ACCOUNT_SUCCESS?: string

  // 条款和隐私
  BY_CONTINUING_YOU_AGREE?: string
  TERMS_OF_SERVICE?: string
  PRIVACY_POLICY?: string
  PROTECTED_BY_RECAPTCHA?: string

  // 表单验证消息
  IS_REQUIRED?: string
  IS_INVALID?: string
  IS_THE_SAME?: string
  CONFIRM_PASSWORD_REQUIRED?: string

  // 验证相关
  VERIFY_EMAIL?: string
  VERIFY_PHONE?: string
  VERIFY_EMAIL_SENT?: string
  VERIFY_PHONE_SENT?: string

  // 密码相关
  PASSWORD_RESET_SENT?: string
  PASSWORD_RESET_SUCCESS?: string
  PASSWORD_CHANGED_SUCCESS?: string

  // 错误消息 - 验证
  INVALID_EMAIL?: string
  INVALID_PHONE?: string
  INVALID_USERNAME?: string
  INVALID_PASSWORD?: string
  INVALID_CODE?: string
  INVALID_OTP?: string

  // 错误消息 - 用户名
  USERNAME_TOO_SHORT?: string
  USERNAME_TOO_LONG?: string
  USERNAME_IS_ALREADY_TAKEN?: string

  // 错误消息 - 密码
  PASSWORD_TOO_SHORT?: string
  PASSWORD_TOO_LONG?: string
  PASSWORDS_DONT_MATCH?: string
  PASSWORD_REQUIRED?: string
  PASSWORD_COMPROMISED?: string

  // 错误消息 - 字段验证
  REQUIRED_FIELD?: string
  EMAIL_REQUIRED?: string
  NAME_REQUIRED?: string
  USERNAME_REQUIRED?: string
  PHONE_REQUIRED?: string

  // 错误消息 - 账户状态
  EMAIL_NOT_VERIFIED?: string
  PHONE_NOT_VERIFIED?: string
  PHONE_NUMBER_NOT_VERIFIED?: string
  EMAIL_VERIFICATION_REQUIRED?: string
  ACCOUNT_LOCKED?: string
  ACCOUNT_DISABLED?: string

  // 错误消息 - 认证
  INVALID_CREDENTIALS?: string
  INVALID_USERNAME_OR_PASSWORD?: string
  INVALID_EMAIL_OR_PASSWORD?: string
  INVALID_PHONE_OR_PASSWORD?: string
  INVALID_PHONE_NUMBER_OR_PASSWORD?: string
  AUTHENTICATION_FAILED?: string
  SESSION_EXPIRED?: string
  INVALID_SESSION_TOKEN?: string
  UNABLE_TO_CREATE_SESSION?: string
  UNAUTHORIZED?: string
  UNAUTHORIZED_SESSION?: string

  // 错误消息 - OAuth
  INVALID_OAUTH_CONFIGURATION?: string

  // 错误消息 - OTP/验证码
  OTP_EXPIRED?: string
  OTP_NOT_FOUND?: string
  OTP_HAS_EXPIRED?: string
  OTP_NOT_ENABLED?: string
  INVALID_BACKUP_CODE?: string
  BACKUP_CODES_NOT_ENABLED?: string
  CHALLENGE_NOT_FOUND?: string

  // 错误消息 - 两步验证
  TWO_FACTOR_NOT_ENABLED?: string
  TOTP_NOT_ENABLED?: string
  INVALID_TWO_FACTOR_COOKIE?: string
  TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE?: string

  // 错误消息 - 手机号
  INVALID_PHONE_NUMBER?: string
  PHONE_NUMBER_EXIST?: string

  // 错误消息 - Passkey
  PASSKEY_NOT_FOUND?: string
  FAILED_TO_VERIFY_REGISTRATION?: string
  FAILED_TO_UPDATE_PASSKEY?: string
  YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY?: string

  // 错误消息 - 已存在/已使用
  EMAIL_ALREADY_EXISTS?: string
  USERNAME_ALREADY_TAKEN?: string
  PHONE_ALREADY_EXISTS?: string
  EMAIL_ALREADY_IN_USE?: string
  USER_ALREADY_EXISTS?: string

  // 错误消息 - 不存在/未找到
  USER_NOT_FOUND?: string
  ACCOUNT_NOT_FOUND?: string
  EMAIL_NOT_FOUND?: string
  USER_EMAIL_NOT_FOUND?: string
  CREDENTIAL_ACCOUNT_NOT_FOUND?: string

  // 错误消息 - 限制
  TOO_MANY_ATTEMPTS?: string
  TOO_MANY_REQUESTS?: string
  RATE_LIMIT_EXCEEDED?: string

  // 错误消息 - 其他
  UNEXPECTED_ERROR?: string
  UNKNOWN_ERROR?: string
  SOMETHING_WENT_WRONG?: string
  TRY_AGAIN?: string
  OPERATION_FAILED?: string
  REQUEST_FAILED?: string
  UNKNOWN?: string
  MISSING_RESPONSE?: string
  VERIFICATION_FAILED?: string
  SERVICE_UNAVAILABLE?: string
  MISSING_SECRET_KEY?: string

  // 其他错误消息
  FAILED_TO_CREATE_SESSION?: string
  FAILED_TO_UPDATE_USER?: string
  FAILED_TO_GET_SESSION?: string
  FAILED_TO_GET_USER_INFO?: string
  FAILED_TO_CREATE_USER?: string
  COULD_NOT_CREATE_SESSION?: string
  EMAIL_CAN_NOT_BE_UPDATED?: string
  FAILED_TO_UNLINK_LAST_ACCOUNT?: string
  BANNED_USER?: string
  USER_BANNED?: string
  ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY?: string
  YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD?: string
  YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS?: string
  YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS?: string
  YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS?: string
  YOU_ARE_NOT_ALLOWED_TO_BAN_USERS?: string
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS?: string
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS?: string
  YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS?: string
  YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE?: string
  YOU_CANNOT_BAN_YOURSELF?: string
  SERVER_ONLY_PROPERTY?: string
  NO_VALUES_TO_UPDATE?: string
  INVALID_METADATA_TYPE?: string
  METADATA_DISABLED?: string
  REFILL_INTERVAL_AND_AMOUNT_REQUIRED?: string
  REFILL_AMOUNT_AND_INTERVAL_REQUIRED?: string
  INVALID_NAME_LENGTH?: string
  INVALID_PREFIX_LENGTH?: string
  INVALID_REMAINING?: string
  EXPIRES_IN_IS_TOO_LARGE?: string
  EXPIRES_IN_IS_TOO_SMALL?: string
  KEY_NOT_RECOVERABLE?: string
  USAGE_EXCEEDED?: string
  KEY_EXPIRED?: string
  KEY_DISABLED?: string
  KEY_DISABLED_EXPIRATION?: string
  KEY_NOT_FOUND?: string
  INVALID_API_KEY?: string
  INVALID_USER_ID_FROM_API_KEY?: string
  INVALID_API_KEY_GETTER_RETURN_TYPE?: string
  APP?: string
  USER?: string

  // 成功消息
  SUCCESS?: string
  CHANGES_SAVED?: string
  PASSWORD_CHANGED?: string
  EMAIL_VERIFIED?: string
  PHONE_VERIFIED?: string
  RESET_PASSWORD_SUCCESS?: string

  // 确认对话框
  ARE_YOU_SURE?: string
  THIS_ACTION_CANNOT_BE_UNDONE?: string
  CONFIRM_DELETE?: string
  CONFIRM_REMOVE?: string
}

/**
 * 将我们的消息格式转换为 Neon Auth 的 AuthLocalization 格式
 * 优化：使用 en 作为基础，直接合并传入的消息，而不是遍历字段名
 *
 * @param messages - 当前 locale 的消息对象
 * @param locale - 当前 locale
 * @returns Neon Auth 的 localization 对象，如果缺少字段则返回 undefined
 */
export function getBetterAuthLocalization(
  messages: Messages,
  locale: Locale,
): any | undefined {
  const betterAuthFlat = (messages as any).betterAuth

  if (!betterAuthFlat) {
    console.warn(`Missing betterAuth localization for locale: ${locale}`)
    return undefined
  }

  // 对于非英文 locale，使用英文作为基础，然后用当前 locale 的消息覆盖
  const flat = {
    ...betterAuthEnBase,
    ...betterAuthFlat,
  }

  // 构建 Better Auth UI 期望的嵌套驼峰结构
  return {
    auth: {
      account: flat.ACCOUNT || 'Account',
      addAccount: flat.ADD_ACCOUNT || 'Add Account',
      alreadyHaveAnAccount: flat.ALREADY_HAVE_AN_ACCOUNT || 'Already have an account?',
      confirmPassword: flat.CONFIRM_PASSWORD || 'Confirm password',
      confirmPasswordPlaceholder: flat.CONFIRM_PASSWORD_PLACEHOLDER || 'Confirm your password',
      continueWith: flat.CONTINUE_WITH || 'Continue with {{provider}}',
      email: flat.EMAIL || 'Email',
      emailPlaceholder: flat.EMAIL_PLACEHOLDER || 'Enter your email',
      forgotPassword: flat.FORGOT_PASSWORD || 'Forgot Password',
      forgotPasswordLink: flat.FORGOT_PASSWORD_LINK || 'Forgot password?',
      hidePassword: flat.HIDE_PASSWORD || 'Hide password',
      invalidResetPasswordToken: flat.INVALID_RESET_PASSWORD_TOKEN || 'Invalid reset password token',
      magicLink: flat.MAGIC_LINK || 'Magic Link',
      magicLinkSent: flat.MAGIC_LINK_SENT || 'Magic link sent to your email',
      name: flat.NAME || 'Name',
      namePlaceholder: flat.NAME_PLACEHOLDER || 'Enter your name',
      needToCreateAnAccount: flat.DONT_HAVE_AN_ACCOUNT || 'Need to create an account?',
      newPassword: flat.NEW_PASSWORD || 'New password',
      newPasswordPlaceholder: flat.NEW_PASSWORD_PLACEHOLDER || 'Enter your new password',
      or: flat.OR || 'OR',
      passkey: flat.PASSKEY || 'Passkey',
      password: flat.PASSWORD || 'Password',
      passwordPlaceholder: flat.PASSWORD_PLACEHOLDER || 'Enter your password',
      passwordResetEmailSent: flat.PASSWORD_RESET_SENT || 'Password reset email sent',
      passwordResetSuccess: flat.PASSWORD_RESET_SUCCESS || 'Password reset successfully',
      passwordsDoNotMatch: flat.PASSWORDS_DO_NOT_MATCH || 'Passwords do not match',
      rememberMe: flat.REMEMBER_ME || 'Remember me',
      rememberYourPassword: flat.REMEMBER_YOUR_PASSWORD || 'Remember your password?',
      resend: flat.RESEND || 'Resend',
      resetPassword: flat.RESET_PASSWORD || 'Reset Password',
      sendMagicLink: flat.MAGIC_LINK_ACTION || 'Send Magic Link',
      sendResetLink: flat.FORGOT_PASSWORD_ACTION || 'Send reset link',
      showPassword: flat.SHOW_PASSWORD || 'Show password',
      signIn: flat.SIGN_IN || 'Sign In',
      signOut: flat.SIGN_OUT || 'Sign Out',
      signUp: flat.SIGN_UP || 'Sign Up',
      switchAccount: flat.SWITCH_ACCOUNT || 'Switch Account',
      username: flat.USERNAME || 'Username',
      usernameAvailable: flat.USERNAME_AVAILABLE || 'Username is available',
      usernameOrEmailPlaceholder: flat.SIGN_IN_USERNAME_PLACEHOLDER || 'Enter your username or email',
      usernamePlaceholder: flat.USERNAME_PLACEHOLDER || 'Enter your username',
      usernameTaken: flat.USERNAME_IS_ALREADY_TAKEN || 'Username is already taken. Please try another.',
      verificationEmailSent: flat.VERIFY_EMAIL_SENT || 'Verification email sent!',
      verifyYourEmail: flat.VERIFY_YOUR_EMAIL || 'Verify your email',
    },
    settings: {
      account: flat.ACCOUNT || 'Account',
      accountUnlinked: flat.ACCOUNT_UNLINKED || 'Account unlinked',
      active: flat.ACTIVE || 'Active',
      activeSessions: flat.ACTIVE_SESSIONS || 'Active sessions',
      avatar: flat.AVATAR || 'Avatar',
      currentSession: flat.CURRENT_SESSION || 'Current session',
      avatarChangedSuccess: flat.AVATAR_CHANGED_SUCCESS || 'Avatar changed successfully',
      avatarDeletedSuccess: flat.AVATAR_DELETED_SUCCESS || 'Avatar deleted successfully',
      changeAvatar: flat.CHANGE_AVATAR || 'Change avatar',
      deleteAvatar: flat.DELETE_AVATAR || 'Delete avatar',
      link: flat.LINK || 'Link',
      linkedAccounts: flat.LINKED_ACCOUNTS || 'Linked accounts',
      linkProvider: flat.LINK_PROVIDER || 'Link your {{provider}} account',
      appearance: flat.APPEARANCE || 'Appearance',
      cancel: flat.CANCEL || 'Cancel',
      changeEmail: flat.CHANGE_EMAIL || 'Change email',
      changeEmailSuccess: flat.CHANGE_EMAIL_SUCCESS || 'Check your email to confirm the change',
      changePassword: flat.CHANGE_PASSWORD || 'Change password',
      changePasswordSuccess: flat.CHANGE_PASSWORD_SUCCESS || 'Password changed successfully',
      currentPassword: flat.CURRENT_PASSWORD || 'Current password',
      currentPasswordPlaceholder: flat.CURRENT_PASSWORD_PLACEHOLDER || 'Enter your current password',
      dark: flat.DARK || 'Dark',
      dangerZone: flat.DANGER_ZONE || 'Danger zone',
      deleteUser: flat.DELETE_USER || 'Delete user',
      deleteUserDescription: flat.DELETE_ACCOUNT_DESCRIPTION || 'Permanently remove your account and all associated data. This cannot be undone.',
      deleteUserVerificationSent: flat.DELETE_ACCOUNT_VERIFY || 'Check your email to confirm account deletion.',
      deleteUserSuccess: flat.DELETE_ACCOUNT_SUCCESS || 'Your account has been deleted.',
      light: flat.LIGHT || 'Light',
      manageAccounts: flat.MANAGE_ACCOUNTS || 'Manage accounts',
      addPasskey: flat.ADD_PASSKEY || 'Add passkey',
      delete: flat.DELETE || 'Delete',
      passkeys: flat.PASSKEYS || 'Passkeys',
      passkeysDescription: flat.PASSKEYS_DESCRIPTION || 'Manage your passkeys for secure access.',
      passkeysInstructions: flat.PASSKEYS_INSTRUCTIONS || 'Securely access your account without a password.',
      profile: flat.PROFILE || 'Profile',
      profileUpdatedSuccess: flat.PROFILE_UPDATED_SUCCESS || 'Profile updated successfully',
      revoke: flat.REVOKE || 'Revoke',
      revokeSession: flat.REVOKE_SESSION || 'Revoke session',
      revokeSessionSuccess: flat.REVOKE_SESSION_SUCCESS || 'Session revoked successfully',
      saveChanges: flat.SAVE_CHANGES || 'Save changes',
      setPassword: flat.SET_PASSWORD || 'Set password',
      setPasswordDescription: flat.SET_PASSWORD_DESCRIPTION || 'You don\'t have a password yet. Request a reset link to set one up.',
      security: flat.SECURITY || 'Security',
      settings: flat.SETTINGS || 'Settings',
      system: flat.SYSTEM || 'System',
      theme: flat.THEME || 'Theme',
      unlinkProvider: flat.UNLINK_PROVIDER || 'Unlink {{provider}}',
      updateEmail: flat.UPDATE_EMAIL || 'Update email',
      updatePassword: flat.UPDATE_PASSWORD || 'Update password',
      uploadAvatar: flat.UPLOAD_AVATAR || 'Upload avatar',
    },
  }
}
