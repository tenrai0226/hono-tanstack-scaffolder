/**
 * Neon Auth UI component English translations
 * Based on Better Auth UI AuthLocalization API reference:
 * https://better-auth-ui.com/api-reference/auth-localization
 */
const betterAuthEn = {
  // Basic authentication
  SIGN_IN: 'Sign In',
  SIGN_UP: 'Sign Up',
  SIGN_OUT: 'Sign Out',
  FORGOT_PASSWORD: 'Forgot Password',
  RESET_PASSWORD: 'Reset Password',
  CHANGE_PASSWORD: 'Change Password',

  // Form fields
  EMAIL: 'Email',
  PASSWORD: 'Password',
  CONFIRM_PASSWORD: 'Confirm Password',
  NAME: 'Name',
  USERNAME: 'Username',
  PHONE: 'Phone',
  CODE: 'Code',

  // Form placeholders
  EMAIL_PLACEHOLDER: 'm@example.com',
  USERNAME_PLACEHOLDER: 'Username',
  SIGN_IN_USERNAME_PLACEHOLDER: 'Username or email',
  PASSWORD_PLACEHOLDER: 'Password',
  NAME_PLACEHOLDER: 'Name',
  PHONE_PLACEHOLDER: 'Phone',
  CONFIRM_PASSWORD_PLACEHOLDER: 'Confirm Password',
  CURRENT_PASSWORD_PLACEHOLDER: 'Current Password',
  NEW_PASSWORD_PLACEHOLDER: 'New Password',
  BACKUP_CODE_PLACEHOLDER: 'Backup Code.',

  // Buttons and actions
  SUBMIT: 'Submit',
  CONTINUE: 'Continue',
  BACK: 'Back',
  GO_BACK: 'Go back',
  CANCEL: 'Cancel',
  SAVE: 'Save',
  DELETE: 'Delete',
  EDIT: 'Edit',
  UPDATE: 'Update',
  CREATE: 'Create',
  REMOVE: 'Remove',
  ADD: 'Add',
  UPLOAD: 'Upload',
  LINK: 'Link',
  UNLINK: 'Unlink',
  DONE: 'Done',
  REVOKE: 'Revoke',
  ACCEPT: 'Accept',
  REJECT: 'Reject',

  // Connectors
  OR: 'Or',
  AND: 'And',
  OR_CONTINUE_WITH: 'Or continue with',

  // OAuth related
  SIGN_IN_WITH: 'Sign in with',
  SIGN_UP_WITH: 'Sign up with',

  // Account switching
  ALREADY_HAVE_AN_ACCOUNT: 'Already have an account?',
  DONT_HAVE_AN_ACCOUNT: 'Don\'t have an account?',
  REMEMBER_ME: 'Remember me',
  SIGN_IN_ACTION: 'Login',
  SIGN_UP_ACTION: 'Create an account',
  RESET_PASSWORD_ACTION: 'Save new password',
  FORGOT_PASSWORD_ACTION: 'Send reset link',

  // Page descriptions
  SIGN_IN_DESCRIPTION: 'Enter your email below to login to your account',
  SIGN_IN_USERNAME_DESCRIPTION: 'Enter your username or email below to login to your account',
  SIGN_UP_DESCRIPTION: 'Enter your information to create an account',
  SIGN_UP_EMAIL: 'Check your email for the verification link.',
  RESET_PASSWORD_DESCRIPTION: 'Enter your new password below',
  FORGOT_PASSWORD_DESCRIPTION: 'Enter your email to reset your password',
  FORGOT_PASSWORD_EMAIL: 'Check your email for the password reset link.',
  FORGOT_PASSWORD_LINK: 'Forgot your password?',

  // Account
  ACCOUNT: 'Account',
  ACCOUNTS: 'Accounts',
  ACCOUNTS_DESCRIPTION: 'Manage your currently signed in accounts.',
  ACCOUNTS_INSTRUCTIONS: 'Sign in to an additional account.',
  ADD_ACCOUNT: 'Add Account',
  SWITCH_ACCOUNT: 'Switch Account',
  PERSONAL_ACCOUNT: 'Personal Account',

  // Avatar
  AVATAR: 'Avatar',
  AVATAR_DESCRIPTION: 'Click on the avatar to upload a custom one from your files.',
  AVATAR_INSTRUCTIONS: 'An avatar is optional but strongly recommended.',
  UPLOAD_AVATAR: 'Upload Avatar',
  DELETE_AVATAR: 'Delete Avatar',

  // Settings
  SETTINGS: 'Settings',
  SECURITY: 'Security',
  UPDATED_SUCCESSFULLY: 'Updated successfully',

  // Name
  NAME_DESCRIPTION: 'Please enter your full name, or a display name.',
  NAME_INSTRUCTIONS: 'Please use 32 characters at maximum.',

  // Username
  USERNAME_DESCRIPTION: 'Enter the username you want to use to log in.',
  USERNAME_INSTRUCTIONS: 'Please use 32 characters at maximum.',
  OPTIONAL_BRACKETS: '(Optional)',

  // Email
  EMAIL_DESCRIPTION: 'Enter the email address you want to use to log in.',
  EMAIL_INSTRUCTIONS: 'Please enter a valid email address.',
  EMAIL_IS_THE_SAME: 'Email is the same',
  EMAIL_REQUIRED: 'Email address is required',
  EMAIL_VERIFICATION: 'Email Verification',
  EMAIL_VERIFICATION_DESCRIPTION: 'Please check your email for the verification code to complete your registration.',
  EMAIL_VERIFICATION_SUCCESS: 'Email verification successful.',
  EMAIL_VERIFY_CHANGE: 'Please check your email to verify the change.',
  EMAIL_OTP: 'Email Code',
  EMAIL_OTP_DESCRIPTION: 'Enter your email to receive a code',
  EMAIL_OTP_SEND_ACTION: 'Send code',
  EMAIL_OTP_VERIFY_ACTION: 'Verify code',
  EMAIL_OTP_VERIFICATION_SENT: 'Please check your email for the verification code.',

  // Password
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORDS_DO_NOT_MATCH: 'Passwords do not match',
  NEW_PASSWORD: 'New Password',
  NEW_PASSWORD_REQUIRED: 'New password is required',
  CURRENT_PASSWORD: 'Current Password',
  CHANGE_PASSWORD_DESCRIPTION: 'Enter your current password and a new password.',
  CHANGE_PASSWORD_INSTRUCTIONS: 'Please use 8 characters at minimum.',
  CHANGE_PASSWORD_SUCCESS: 'Your password has been changed.',
  SET_PASSWORD: 'Set Password',
  SET_PASSWORD_DESCRIPTION: 'Click the button below to receive an email to set up a password for your account.',
  USER_ALREADY_HAS_PASSWORD: 'User already has password',

  // Two-Factor Authentication
  TWO_FACTOR: 'Two-Factor',
  TWO_FACTOR_DESCRIPTION: 'Please enter your one-time password to continue',
  TWO_FACTOR_ACTION: 'Verify code',
  TWO_FACTOR_CARD_DESCRIPTION: 'Add an extra layer of security to your account.',
  TWO_FACTOR_DISABLE_INSTRUCTIONS: 'Please enter your password to disable 2FA.',
  TWO_FACTOR_ENABLE_INSTRUCTIONS: 'Please enter your password to enable 2FA',
  TWO_FACTOR_ENABLED: 'Two-factor authentication has been enabled',
  TWO_FACTOR_DISABLED: 'Two-Factor Authentication has been disabled',
  TWO_FACTOR_PROMPT: 'Two-Factor Authentication',
  TWO_FACTOR_TOTP_LABEL: 'Scan the QR Code with your Authenticator',
  ENABLE_TWO_FACTOR: 'Enable Two-Factor',
  DISABLE_TWO_FACTOR: 'Disable Two-Factor',
  TRUST_DEVICE: 'Trust this device',
  FORGOT_AUTHENTICATOR: 'Forgot authenticator?',
  CONTINUE_WITH_AUTHENTICATOR: 'Continue with Authenticator',
  ONE_TIME_PASSWORD: 'One-Time Password',

  // Backup Codes
  BACKUP_CODES: 'Backup Codes',
  BACKUP_CODES_DESCRIPTION: 'Save these backup codes in a secure place. You can use them to access your account if you lose your two-factor authentication method.',
  BACKUP_CODE: 'Backup Code',
  BACKUP_CODE_REQUIRED: 'Backup code is required',
  COPY_ALL_CODES: 'Copy all codes',
  COPY_TO_CLIPBOARD: 'Copy to clipboard',
  COPIED_TO_CLIPBOARD: 'Copied to clipboard',
  RECOVER_ACCOUNT: 'Recover Account',
  RECOVER_ACCOUNT_DESCRIPTION: 'Please enter a backup code to access your account',
  RECOVER_ACCOUNT_ACTION: 'Recover account',

  // Sessions
  SESSIONS: 'Sessions',
  SESSIONS_DESCRIPTION: 'Manage your active sessions and revoke access.',
  CURRENT_SESSION: 'Current Session',
  SESSION_NOT_FRESH: 'Your session is not fresh. Please sign in again.',

  // Providers
  PROVIDERS: 'Providers',
  PROVIDERS_DESCRIPTION: 'Connect your account with a third-party service.',
  SOCIAL_ACCOUNT_ALREADY_LINKED: 'Social account already linked',
  DISABLED_CREDENTIALS_DESCRIPTION: 'Choose a provider to login to your account',

  // Passkeys
  PASSKEYS: 'Passkeys',
  PASSKEY: 'Passkey',
  PASSKEYS_DESCRIPTION: 'Manage your passkeys for secure access.',
  PASSKEYS_INSTRUCTIONS: 'Securely access your account without a password.',
  ADD_PASSKEY: 'Add Passkey',

  // API Keys
  API_KEYS: 'API Keys',
  API_KEY: 'API Key',
  API_KEYS_DESCRIPTION: 'Manage your API keys for secure access.',
  API_KEYS_INSTRUCTIONS: 'Generate API keys to access your account programmatically.',
  CREATE_API_KEY: 'Create API Key',
  CREATE_API_KEY_DESCRIPTION: 'Enter a unique name for your API key to differentiate it from other keys.',
  API_KEY_NAME_PLACEHOLDER: 'New API Key',
  API_KEY_CREATED: 'API Key Created',
  CREATE_API_KEY_SUCCESS: 'Please copy your API key and store it in a safe place. For security reasons we cannot show it again.',
  DELETE_API_KEY: 'Delete API Key',
  DELETE_API_KEY_CONFIRM: 'Are you sure you want to delete this API key?',
  EXPIRES: 'Expires',
  NEVER_EXPIRES: 'Never Expires',
  NO_EXPIRATION: 'No Expiration',

  // Magic Link
  MAGIC_LINK: 'Magic Link',
  MAGIC_LINK_DESCRIPTION: 'Enter your email to receive a magic link',
  MAGIC_LINK_ACTION: 'Send magic link',
  MAGIC_LINK_EMAIL: 'Check your email for the magic link',

  // Email Verification
  VERIFY_YOUR_EMAIL: 'Verify Your Email',
  VERIFY_YOUR_EMAIL_DESCRIPTION: 'Please verify your email address. Check your inbox for the verification email. If you haven\'t received the email, click the button below to resend.',
  RESEND_VERIFICATION_EMAIL: 'Resend verification email',
  RESEND_CODE: 'Resend code',
  SEND_VERIFICATION_CODE: 'Send verification code',

  // Delete Account
  DELETE_ACCOUNT: 'Delete Account',
  DELETE_ACCOUNT_DESCRIPTION: 'Permanently remove your account and all of its contents. This action is not reversible, so please continue with caution.',
  DELETE_ACCOUNT_INSTRUCTIONS: 'Please confirm the deletion of your account. This action is not reversible, so please continue with caution.',
  DELETE_ACCOUNT_VERIFY: 'Please check your email to verify the deletion of your account.',
  DELETE_ACCOUNT_SUCCESS: 'Your account has been deleted.',

  // Terms and Privacy
  BY_CONTINUING_YOU_AGREE: 'By continuing, you agree to the',
  TERMS_OF_SERVICE: 'Terms of Service',
  PRIVACY_POLICY: 'Privacy Policy',
  PROTECTED_BY_RECAPTCHA: 'This site is protected by reCAPTCHA.',

  // Form validation messages
  IS_REQUIRED: 'is required',
  IS_INVALID: 'is invalid',
  IS_THE_SAME: 'is the same',
  NAME_REQUIRED: 'Name is required',
  USERNAME_REQUIRED: 'Username is required',
  PHONE_REQUIRED: 'Phone is required',
  REQUIRED_FIELD: 'This field is required',
  CONFIRM_PASSWORD_REQUIRED: 'Confirm password is required',

  // Error messages - validation
  INVALID_EMAIL: 'Invalid email address',
  INVALID_PHONE: 'Invalid phone number',
  INVALID_USERNAME: 'Invalid username',
  INVALID_PASSWORD: 'Password must be at least 8 characters, and must contain at least one lowercase letter, one uppercase letter, one number, and one special character (@$!%*?&)',
  INVALID_CODE: 'Invalid code',
  INVALID_OTP: 'Invalid OTP',

  // Error messages - username
  USERNAME_TOO_SHORT: 'Username is too short',
  USERNAME_TOO_LONG: 'Username is too long',
  USERNAME_IS_ALREADY_TAKEN: 'Username is already taken',

  // Error messages - password
  PASSWORD_TOO_SHORT: 'Password must be at least 8 characters',
  PASSWORD_TOO_LONG: 'Password is too long',
  PASSWORDS_DONT_MATCH: 'Passwords do not match',
  PASSWORD_COMPROMISED: 'Password has been compromised, please use a different password',

  // Error messages - account status
  EMAIL_NOT_VERIFIED: 'Email not verified',
  PHONE_NOT_VERIFIED: 'Phone not verified',
  PHONE_NUMBER_NOT_VERIFIED: 'Phone number not verified',
  EMAIL_VERIFICATION_REQUIRED: 'Email verification required',
  ACCOUNT_LOCKED: 'Account locked',
  ACCOUNT_DISABLED: 'Account disabled',

  // Error messages - authentication
  INVALID_CREDENTIALS: 'Invalid credentials',
  INVALID_USERNAME_OR_PASSWORD: 'Invalid username or password',
  INVALID_EMAIL_OR_PASSWORD: 'Invalid email or password',
  INVALID_PHONE_OR_PASSWORD: 'Invalid phone or password',
  INVALID_PHONE_NUMBER_OR_PASSWORD: 'Invalid phone number or password',
  AUTHENTICATION_FAILED: 'Authentication failed',
  SESSION_EXPIRED: 'Session expired',
  INVALID_SESSION_TOKEN: 'Invalid session token',
  UNABLE_TO_CREATE_SESSION: 'Unable to create session',
  UNAUTHORIZED: 'Unauthorized',
  UNAUTHORIZED_SESSION: 'Unauthorized session',

  // Error messages - OAuth
  INVALID_OAUTH_CONFIGURATION: 'Invalid OAuth configuration',
  PROVIDER_ALREADY_CONNECTED: 'Provider is already connected',
  PROVIDER_NOT_FOUND: 'Provider not found',
  INVALID_TOKEN: 'Invalid token',
  ID_TOKEN_NOT_SUPPORTED: 'ID token not supported',

  // Error messages - OTP/verification code
  OTP_EXPIRED: 'OTP expired',
  OTP_NOT_FOUND: 'OTP not found',
  OTP_HAS_EXPIRED: 'OTP has expired',
  OTP_NOT_ENABLED: 'OTP not enabled',
  INVALID_BACKUP_CODE: 'Invalid backup code',
  BACKUP_CODES_NOT_ENABLED: 'Backup codes not enabled',
  CHALLENGE_NOT_FOUND: 'Challenge not found',

  // Error messages - two-factor authentication
  TWO_FACTOR_NOT_ENABLED: 'Two-factor authentication not enabled',
  TOTP_NOT_ENABLED: 'TOTP not enabled',
  INVALID_TWO_FACTOR_COOKIE: 'Invalid two-factor cookie',
  TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: 'Too many attempts, please request a new code',

  // Error messages - phone number
  INVALID_PHONE_NUMBER: 'Invalid phone number',
  PHONE_NUMBER_EXIST: 'Phone number already exists',

  // Error messages - Passkey
  PASSKEY_NOT_FOUND: 'Passkey not found',
  FAILED_TO_VERIFY_REGISTRATION: 'Failed to verify registration',
  FAILED_TO_UPDATE_PASSKEY: 'Failed to update passkey',
  YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY: 'You are not allowed to register this passkey',

  // Error messages - already exists/in use
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  USERNAME_ALREADY_TAKEN: 'Username already taken',
  PHONE_ALREADY_EXISTS: 'Phone already exists',
  EMAIL_ALREADY_IN_USE: 'Email already in use',
  USER_ALREADY_EXISTS: 'User already exists',

  // Error messages - not found
  USER_NOT_FOUND: 'User not found',
  ACCOUNT_NOT_FOUND: 'Account not found',
  EMAIL_NOT_FOUND: 'Email not found',
  USER_EMAIL_NOT_FOUND: 'User email not found',
  CREDENTIAL_ACCOUNT_NOT_FOUND: 'Credential account not found',

  // Error messages - limits
  TOO_MANY_ATTEMPTS: 'Too many attempts',
  TOO_MANY_REQUESTS: 'Too many requests',
  RATE_LIMIT_EXCEEDED: 'Rate limit exceeded',

  // Error messages - other
  UNEXPECTED_ERROR: 'An unexpected error occurred',
  UNKNOWN_ERROR: 'Unknown error',
  SOMETHING_WENT_WRONG: 'Something went wrong',
  TRY_AGAIN: 'Please try again',
  OPERATION_FAILED: 'Operation failed',
  REQUEST_FAILED: 'Request failed',
  UNKNOWN: 'Unknown',
  MISSING_RESPONSE: 'Missing response',
  VERIFICATION_FAILED: 'Verification failed',
  SERVICE_UNAVAILABLE: 'Service unavailable',
  MISSING_SECRET_KEY: 'Missing secret key',

  // Success messages
  SUCCESS: 'Success',
  CHANGES_SAVED: 'Changes saved',
  PASSWORD_CHANGED: 'Password changed',
  EMAIL_VERIFIED: 'Email verified',
  PHONE_VERIFIED: 'Phone verified',
  RESET_PASSWORD_SUCCESS: 'Password reset successfully',

  // Verification related
  VERIFY_EMAIL: 'Verify Email',
  VERIFY_PHONE: 'Verify Phone',
  VERIFY_EMAIL_SENT: 'Verification email sent',
  VERIFY_PHONE_SENT: 'Verification code sent',
  PASSWORD_RESET_SENT: 'Password reset link sent',
  PASSWORD_RESET_SUCCESS: 'Password reset successful',
  PASSWORD_CHANGED_SUCCESS: 'Password changed successfully',

  // Confirmation dialogs
  ARE_YOU_SURE: 'Are you sure?',
  THIS_ACTION_CANNOT_BE_UNDONE: 'This action cannot be undone',
  CONFIRM_DELETE: 'Confirm Delete',
  CONFIRM_REMOVE: 'Confirm Remove',

  // Additional error messages from API
  FAILED_TO_CREATE_SESSION: 'Failed to create session',
  FAILED_TO_UPDATE_USER: 'Failed to update user',
  FAILED_TO_GET_SESSION: 'Failed to get session',
  FAILED_TO_GET_USER_INFO: 'Failed to get user info',
  FAILED_TO_CREATE_USER: 'Failed to create user',
  COULD_NOT_CREATE_SESSION: 'Could not create session',
  EMAIL_CAN_NOT_BE_UPDATED: 'Email can not be updated',
  FAILED_TO_UNLINK_LAST_ACCOUNT: 'Failed to unlink last account',
  BANNED_USER: 'Banned user',
  USER_BANNED: 'User banned',
  ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY: 'Anonymous users cannot sign in again anonymously',
  YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: 'You are not allowed to set user\'s password',
  YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: 'You are not allowed to delete users',
  YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: 'You are not allowed to revoke user\'s sessions',
  YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: 'You are not allowed to impersonate users',
  YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: 'You are not allowed to ban users',
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: 'You are not allowed to list user\'s sessions',
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: 'You are not allowed to list users',
  YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: 'You are not allowed to create users',
  YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: 'You are not allowed to change user\'s role',
  YOU_CANNOT_BAN_YOURSELF: 'You cannot ban yourself',
  SERVER_ONLY_PROPERTY: 'Server only property',
  NO_VALUES_TO_UPDATE: 'No values to update',
  INVALID_METADATA_TYPE: 'Invalid metadata type',
  METADATA_DISABLED: 'Metadata disabled',
  REFILL_INTERVAL_AND_AMOUNT_REQUIRED: 'Refill interval and amount required',
  REFILL_AMOUNT_AND_INTERVAL_REQUIRED: 'Refill amount and interval required',
  INVALID_NAME_LENGTH: 'Invalid name length',
  INVALID_PREFIX_LENGTH: 'Invalid prefix length',
  INVALID_REMAINING: 'Invalid remaining',
  EXPIRES_IN_IS_TOO_LARGE: 'Expires in is too large',
  EXPIRES_IN_IS_TOO_SMALL: 'Expires in is too small',
  KEY_NOT_RECOVERABLE: 'Key not recoverable',
  USAGE_EXCEEDED: 'Usage exceeded',
  KEY_EXPIRED: 'Key expired',
  KEY_DISABLED: 'Key disabled',
  KEY_DISABLED_EXPIRATION: 'Key disabled expiration',
  KEY_NOT_FOUND: 'Key not found',
  INVALID_API_KEY: 'Invalid API key',
  INVALID_USER_ID_FROM_API_KEY: 'Invalid user ID from API key',
  INVALID_API_KEY_GETTER_RETURN_TYPE: 'Invalid API key getter return type',
  APP: 'App',
  USER: 'User',
} as const

export default betterAuthEn
