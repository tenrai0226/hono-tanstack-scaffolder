/**
 * Neon Auth UI component Korean translations
 * Based on Better Auth UI AuthLocalization API reference:
 * https://better-auth-ui.com/api-reference/auth-localization
 */
const betterAuthKo = {
  // Basic authentication
  SIGN_IN: '로그인',
  SIGN_UP: '회원가입',
  SIGN_OUT: '로그아웃',
  FORGOT_PASSWORD: '비밀번호 찾기',
  RESET_PASSWORD: '비밀번호 재설정',
  CHANGE_PASSWORD: '비밀번호 변경',

  // Form fields
  EMAIL: '이메일',
  PASSWORD: '비밀번호',
  CONFIRM_PASSWORD: '비밀번호 확인',
  NAME: '이름',
  USERNAME: '사용자 이름',
  PHONE: '전화번호',
  CODE: '코드',

  // Form placeholders
  EMAIL_PLACEHOLDER: 'm@example.com',
  USERNAME_PLACEHOLDER: '사용자 이름',
  SIGN_IN_USERNAME_PLACEHOLDER: '사용자 이름 또는 이메일',
  PASSWORD_PLACEHOLDER: '비밀번호',
  NAME_PLACEHOLDER: '이름',
  PHONE_PLACEHOLDER: '전화번호',
  CONFIRM_PASSWORD_PLACEHOLDER: '비밀번호 확인',
  CURRENT_PASSWORD_PLACEHOLDER: '현재 비밀번호',
  NEW_PASSWORD_PLACEHOLDER: '새 비밀번호',
  BACKUP_CODE_PLACEHOLDER: '백업 코드',

  // Buttons and actions
  SUBMIT: '제출',
  CONTINUE: '계속',
  BACK: '뒤로',
  GO_BACK: '뒤로가기',
  CANCEL: '취소',
  SAVE: '저장',
  DELETE: '삭제',
  EDIT: '수정',
  UPDATE: '업데이트',
  CREATE: '생성',
  REMOVE: '제거',
  ADD: '추가',
  UPLOAD: '업로드',
  LINK: '연결',
  UNLINK: '연결 해제',
  DONE: '완료',
  REVOKE: '취소',
  ACCEPT: '수락',
  REJECT: '거절',

  // Connectors
  OR: '또는',
  AND: '및',
  OR_CONTINUE_WITH: '또는 다음으로 계속',

  // OAuth related
  SIGN_IN_WITH: '다음으로 로그인:',
  SIGN_UP_WITH: '다음으로 가입:',

  // Account switching
  ALREADY_HAVE_AN_ACCOUNT: '이미 계정이 있으신가요?',
  DONT_HAVE_AN_ACCOUNT: '계정이 없으신가요?',
  REMEMBER_ME: '로그인 유지',
  SIGN_IN_ACTION: '로그인',
  SIGN_UP_ACTION: '계정 만들기',
  RESET_PASSWORD_ACTION: '새 비밀번호 저장',
  FORGOT_PASSWORD_ACTION: '재설정 링크 보내기',

  // Page descriptions
  SIGN_IN_DESCRIPTION: '계정에 로그인하려면 아래에 이메일을 입력하세요.',
  SIGN_IN_USERNAME_DESCRIPTION: '계정에 로그인하려면 아래에 사용자 이름 또는 이메일을 입력하세요.',
  SIGN_UP_DESCRIPTION: '계정을 만들려면 정보를 입력하세요.',
  SIGN_UP_EMAIL: '인증 링크가 포함된 이메일을 확인하세요.',
  RESET_PASSWORD_DESCRIPTION: '아래에 새 비밀번호를 입력하세요.',
  FORGOT_PASSWORD_DESCRIPTION: '비밀번호를 재설정하려면 이메일을 입력하세요.',
  FORGOT_PASSWORD_EMAIL: '비밀번호 재설정 링크가 포함된 이메일을 확인하세요.',
  FORGOT_PASSWORD_LINK: '비밀번호를 잊으셨나요?',

  // Account
  ACCOUNT: '계정',
  ACCOUNTS: '계정 목록',
  ACCOUNTS_DESCRIPTION: '현재 로그인된 계정을 관리합니다.',
  ACCOUNTS_INSTRUCTIONS: '추가 계정으로 로그인합니다.',
  ADD_ACCOUNT: '계정 추가',
  SWITCH_ACCOUNT: '계정 전환',
  PERSONAL_ACCOUNT: '개인 계정',

  // Avatar
  AVATAR: '아바타',
  AVATAR_DESCRIPTION: '아바타를 클릭하여 파일에서 맞춤 이미지로 업로드하세요.',
  AVATAR_INSTRUCTIONS: '아바타는 선택 사항이지만 설정할 것을 강력히 권장합니다.',
  UPLOAD_AVATAR: '아바타 업로드',
  DELETE_AVATAR: '아바타 삭제',

  // Settings
  SETTINGS: '설정',
  SECURITY: '보안',
  UPDATED_SUCCESSFULLY: '성공적으로 업데이트되었습니다.',

  // Name
  NAME_DESCRIPTION: '성명 또는 표시할 이름을 입력하세요.',
  NAME_INSTRUCTIONS: '최대 32자까지 입력할 수 있습니다.',

  // Username
  USERNAME_DESCRIPTION: '로그인에 사용할 사용자 이름을 입력하세요.',
  USERNAME_INSTRUCTIONS: '최대 32자까지 입력할 수 있습니다.',
  OPTIONAL_BRACKETS: '(선택사항)',

  // Email
  EMAIL_DESCRIPTION: '로그인에 사용할 이메일 주소를 입력하세요.',
  EMAIL_INSTRUCTIONS: '유효한 이메일 주소를 입력해 주세요.',
  EMAIL_IS_THE_SAME: '기존 이메일과 동일합니다.',
  EMAIL_REQUIRED: '이메일 주소는 필수입니다.',
  EMAIL_VERIFICATION: '이메일 인증',
  EMAIL_VERIFICATION_DESCRIPTION: '가입을 완료하려면 이메일에서 인증 코드를 확인하세요.',
  EMAIL_VERIFICATION_SUCCESS: '이메일 인증 완료.',
  EMAIL_VERIFY_CHANGE: '변경 사항을 인증하려면 이메일을 확인하세요.',
  EMAIL_OTP: '이메일 코드',
  EMAIL_OTP_DESCRIPTION: '코드를 받기 위해 이메일을 입력하세요.',
  EMAIL_OTP_SEND_ACTION: '코드 전송',
  EMAIL_OTP_VERIFY_ACTION: '코드 확인',
  EMAIL_OTP_VERIFICATION_SENT: '인증 코드가 전송되었습니다. 이메일을 확인해 주세요.',

  // Password
  PASSWORD_REQUIRED: '비밀번호는 필수입니다.',
  PASSWORDS_DO_NOT_MATCH: '비밀번호가 일치하지 않습니다.',
  NEW_PASSWORD: '새 비밀번호',
  NEW_PASSWORD_REQUIRED: '새 비밀번호가 필요합니다.',
  CURRENT_PASSWORD: '현재 비밀번호',
  CHANGE_PASSWORD_DESCRIPTION: '현재 비밀번호와 새 비밀번호를 입력하세요.',
  CHANGE_PASSWORD_INSTRUCTIONS: '최소 8자 이상 입력해 주세요.',
  CHANGE_PASSWORD_SUCCESS: '비밀번호가 변경되었습니다.',
  SET_PASSWORD: '비밀번호 설정',
  SET_PASSWORD_DESCRIPTION: '아래 버튼을 클릭하면 계정 비밀번호를 설정할 수 있는 이메일이 발송됩니다.',
  USER_ALREADY_HAS_PASSWORD: '사용자가 이미 비밀번호를 가지고 있습니다.',

  // Two-Factor Authentication
  TWO_FACTOR: '2단계 인증',
  TWO_FACTOR_DESCRIPTION: '계속하려면 일회용 비밀번호를 입력해 주세요.',
  TWO_FACTOR_ACTION: '코드 확인',
  TWO_FACTOR_CARD_DESCRIPTION: '계정에 추가적인 보안을 제공합니다.',
  TWO_FACTOR_DISABLE_INSTRUCTIONS: '2단계 인증을 비활성화하려면 비밀번호를 입력하세요.',
  TWO_FACTOR_ENABLE_INSTRUCTIONS: '2단계 인증을 활성화하려면 비밀번호를 입력하세요.',
  TWO_FACTOR_ENABLED: '2단계 인증이 활성화되었습니다.',
  TWO_FACTOR_DISABLED: '2단계 인증이 비활성화되었습니다.',
  TWO_FACTOR_PROMPT: '2단계 인증(2FA)',
  TWO_FACTOR_TOTP_LABEL: '인증 앱을 열어 QR 코드를 스캔하세요.',
  ENABLE_TWO_FACTOR: '2단계 인증 활성화',
  DISABLE_TWO_FACTOR: '2단계 인증 비활성화',
  TRUST_DEVICE: '이 기기 신뢰하기',
  FORGOT_AUTHENTICATOR: '인증기를 잊으셨나요?',
  CONTINUE_WITH_AUTHENTICATOR: '인증 앱으로 계속',
  ONE_TIME_PASSWORD: '일회용 비밀번호',

  // Backup Codes
  BACKUP_CODES: '백업 코드',
  BACKUP_CODES_DESCRIPTION: '이 백업 코드들을 안전한 곳에 보관하세요. 2단계 인증 방법을 분실했을 때 이 코드로 계정에 접속할 수 있습니다.',
  BACKUP_CODE: '백업 코드',
  BACKUP_CODE_REQUIRED: '백업 코드는 필수입니다.',
  COPY_ALL_CODES: '모든 코드 복사',
  COPY_TO_CLIPBOARD: '클립보드에 복사',
  COPIED_TO_CLIPBOARD: '클립보드에 복사됨',
  RECOVER_ACCOUNT: '계정 복구',
  RECOVER_ACCOUNT_DESCRIPTION: '계정에 접속하려면 백업 코드를 입력하세요.',
  RECOVER_ACCOUNT_ACTION: '계정 복구',

  // Sessions
  SESSIONS: '세션 관리',
  SESSIONS_DESCRIPTION: '활성 세션을 관리하고 접근을 취소할 수 있습니다.',
  CURRENT_SESSION: '현재 세션',
  SESSION_NOT_FRESH: '세션이 만료되었습니다. 다시 로그인해 주세요.',

  // Providers
  PROVIDERS: '연동 서비스 제공자',
  PROVIDERS_DESCRIPTION: '계정을 타사 서비스와 연결합니다.',
  SOCIAL_ACCOUNT_ALREADY_LINKED: '이미 연결된 소셜 계정입니다.',
  DISABLED_CREDENTIALS_DESCRIPTION: '계정에 로그인할 서비스 제공자를 선택하세요.',

  // Passkeys
  PASSKEYS: '패스키',
  PASSKEY: '패스키',
  PASSKEYS_DESCRIPTION: '안전한 접근을 위해 패스키를 관리하세요.',
  PASSKEYS_INSTRUCTIONS: '비밀번호 없이 계정에 안전하게 접속할 수 있습니다.',
  ADD_PASSKEY: '패스키 추가',

  // API Keys
  API_KEYS: 'API 키',
  API_KEY: 'API 키',
  API_KEYS_DESCRIPTION: '안전한 접근을 위해 API 키를 관리하세요.',
  API_KEYS_INSTRUCTIONS: '계정에 프로그래밍 방식으로 접근할 수 있는 API 키를 생성합니다.',
  CREATE_API_KEY: 'API 키 생성',
  CREATE_API_KEY_DESCRIPTION: '다른 키와 구별할 수 있도록 API 키의 고유한 이름을 입력하세요.',
  API_KEY_NAME_PLACEHOLDER: '새 API 키',
  API_KEY_CREATED: 'API 키가 생성되었습니다.',
  CREATE_API_KEY_SUCCESS: 'API 키를 복사하여 안전한 곳에 보관하세요. 보안을 위해 다시 볼 수 없습니다.',
  DELETE_API_KEY: 'API 키 삭제',
  DELETE_API_KEY_CONFIRM: '이 API 키를 삭제하시겠습니까?',
  EXPIRES: '만료',
  NEVER_EXPIRES: '만료 없음',
  NO_EXPIRATION: '없음(무제한)',

  // Magic Link
  MAGIC_LINK: '매직 링크',
  MAGIC_LINK_DESCRIPTION: '매직 링크를 받을 이메일 주소를 입력하세요.',
  MAGIC_LINK_ACTION: '매직 링크 전송',
  MAGIC_LINK_EMAIL: '이메일에서 매직 링크를 확인하세요.',

  // Email Verification
  VERIFY_YOUR_EMAIL: '이메일 인증',
  VERIFY_YOUR_EMAIL_DESCRIPTION: '이메일 주소를 인증해 주세요. 이메일 수신함에서 인증 메일을 확인하세요. 메일을 받지 못하셨다면 아래 버튼을 눌러 재전송해 주세요.',
  RESEND_VERIFICATION_EMAIL: '인증 이메일 재전송',
  RESEND_CODE: '코드 재전송',
  SEND_VERIFICATION_CODE: '인증 코드 전송',

  // Delete Account
  DELETE_ACCOUNT: '계정 삭제',
  DELETE_ACCOUNT_DESCRIPTION: '계정과 모든 콘텐츠를 영구적으로 삭제합니다. 이 변경사항은 취소할 수 없으므로 주의해서 진행해 주십시오.',
  DELETE_ACCOUNT_INSTRUCTIONS: '계정 삭제를 확인해 주세요. 이 작업은 취소할 수 없으므로 주의해 주십시오.',
  DELETE_ACCOUNT_VERIFY: '계정 삭제를 확인하기 위해 이메일을 체크해 주세요.',
  DELETE_ACCOUNT_SUCCESS: '계정이 성공적으로 삭제되었습니다.',

  // Terms and Privacy
  BY_CONTINUING_YOU_AGREE: '계속 진행하면 다음 내용에 동의하는 것으로 간주됩니다:',
  TERMS_OF_SERVICE: '이용약관',
  PRIVACY_POLICY: '개인정보 처리방침',
  PROTECTED_BY_RECAPTCHA: '이 사이트는 reCAPTCHA에 의해 보호됩니다.',

  // Form validation messages
  IS_REQUIRED: '은(는) 필수입니다.',
  IS_INVALID: '은(는) 유효하지 않습니다.',
  IS_THE_SAME: '은(는) 기존과 동일합니다.',
  NAME_REQUIRED: '이름은 필수입니다.',
  USERNAME_REQUIRED: '사용자 이름은 필수입니다.',
  PHONE_REQUIRED: '전화번호는 필수입니다.',
  REQUIRED_FIELD: '이 필드는 필수 사항입니다.',
  CONFIRM_PASSWORD_REQUIRED: '비밀번호 확인은 필수입니다.',

  // Error messages - validation
  INVALID_EMAIL: '유효하지 않은 이메일 주소입니다.',
  INVALID_PHONE: '유효하지 않은 전화번호입니다.',
  INVALID_USERNAME: '유효하지 않은 사용자 이름입니다.',
  INVALID_PASSWORD: '비밀번호는 최소 8자 이상이어야 하며 소문자, 대문자, 숫자, 특수 기호(@$!%*?&)를 각각 하나 이상 포함해야 합니다.',
  INVALID_CODE: '유효하지 않은 코드입니다.',
  INVALID_OTP: '유효하지 않은 OTP입니다.',

  // Error messages - username
  USERNAME_TOO_SHORT: '사용자 이름이 너무 짧습니다.',
  USERNAME_TOO_LONG: '사용자 이름이 너무 깁니다.',
  USERNAME_IS_ALREADY_TAKEN: '이미 사용 중인 사용자 이름입니다.',

  // Error messages - password
  PASSWORD_TOO_SHORT: '비밀번호는 최소 8자 이상이어야 합니다.',
  PASSWORD_TOO_LONG: '비밀번호가 너무 깁니다.',
  PASSWORDS_DONT_MATCH: '비밀번호가 일치하지 않습니다.',
  PASSWORD_COMPROMISED: '보안이 취약하거나 유출된 비밀번호입니다. 다른 비밀번호를 사용해 주세요.',

  // Error messages - account status
  EMAIL_NOT_VERIFIED: '이메일이 확인되지 않았습니다.',
  PHONE_NOT_VERIFIED: '전화번호가 확인되지 않았습니다.',
  PHONE_NUMBER_NOT_VERIFIED: '전화번호가 인증되지 않았습니다.',
  EMAIL_VERIFICATION_REQUIRED: '이메일 인증이 필요합니다.',
  ACCOUNT_LOCKED: '계정이 잠겼습니다.',
  ACCOUNT_DISABLED: '계정이 비활성화되었습니다.',

  // Error messages - authentication
  INVALID_CREDENTIALS: '잘못된 자격 증명입니다.',
  INVALID_USERNAME_OR_PASSWORD: '잘못된 사용자 이름 또는 비밀번호입니다.',
  INVALID_EMAIL_OR_PASSWORD: '잘못된 이메일 또는 비밀번호입니다.',
  INVALID_PHONE_OR_PASSWORD: '잘못된 전화번호 또는 비밀번호입니다.',
  INVALID_PHONE_NUMBER_OR_PASSWORD: '유효하지 않은 번호 또는 비밀번호입니다.',
  AUTHENTICATION_FAILED: '인증 실패',
  SESSION_EXPIRED: '세션이 만료되었습니다.',
  INVALID_SESSION_TOKEN: '유효하지 않은 세션 토큰입니다.',
  UNABLE_TO_CREATE_SESSION: '세션을 생성할 수 없습니다.',
  UNAUTHORIZED: '승인되지 않음',
  UNAUTHORIZED_SESSION: '승인되지 않은 세션',

  // Error messages - OAuth
  INVALID_OAUTH_CONFIGURATION: '유효하지 않은 OAuth 구성입니다.',
  PROVIDER_ALREADY_CONNECTED: '해당 서비스 제공자가 이미 연결되어 있습니다.',
  PROVIDER_NOT_FOUND: '제공자를 찾을 수 없습니다.',
  INVALID_TOKEN: '토큰이 올바르지 않습니다.',
  ID_TOKEN_NOT_SUPPORTED: '지원하지 않는 ID 토큰입니다.',

  // Error messages - OTP/verification code
  OTP_EXPIRED: 'OTP가 만료되었습니다.',
  OTP_NOT_FOUND: 'OTP를 찾을 수 없습니다.',
  OTP_HAS_EXPIRED: 'OTP의 시간이 지났습니다.',
  OTP_NOT_ENABLED: 'OTP가 활성화되지 않았습니다.',
  INVALID_BACKUP_CODE: '백업 코드가 일치하지 않습니다.',
  BACKUP_CODES_NOT_ENABLED: '백업 코드가 활성화되지 않았습니다.',
  CHALLENGE_NOT_FOUND: '챌린지를 찾을 수 없습니다.',

  // Error messages - two-factor authentication
  TWO_FACTOR_NOT_ENABLED: '2단계 인증이 활성화되지 않았습니다.',
  TOTP_NOT_ENABLED: 'TOTP가 활성화되지 않았습니다.',
  INVALID_TWO_FACTOR_COOKIE: '잘못된 2단계 인증 쿠키입니다.',
  TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: '요청 횟수를 초과했습니다. 새 코드를 다시 요청해 주세요.',

  // Error messages - phone number
  INVALID_PHONE_NUMBER: '올바르지 않은 전화번호입니다.',
  PHONE_NUMBER_EXIST: '이미 존재하는 전화번호입니다.',

  // Error messages - Passkey
  PASSKEY_NOT_FOUND: '패스키를 찾을 수 없습니다.',
  FAILED_TO_VERIFY_REGISTRATION: '가입을 확인하는데 실패했습니다.',
  FAILED_TO_UPDATE_PASSKEY: '패스키를 업데이트하는데 실패했습니다.',
  YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY: '이 패스키를 등록할 수 있는 권한이 없습니다.',

  // Error messages - already exists/in use
  EMAIL_ALREADY_EXISTS: '이미 존재하는 이메일입니다.',
  USERNAME_ALREADY_TAKEN: '다른 사용자가 이미 사용 중인 사용자 이름입니다.',
  PHONE_ALREADY_EXISTS: '전화번호가 이미 존재합니다.',
  EMAIL_ALREADY_IN_USE: '이미 사용되고 있는 이메일입니다.',
  USER_ALREADY_EXISTS: '이미 존재하는 사용자입니다.',

  // Error messages - not found
  USER_NOT_FOUND: '사용자를 찾을 수 없습니다.',
  ACCOUNT_NOT_FOUND: '계정을 찾을 수 없습니다.',
  EMAIL_NOT_FOUND: '이메일을 찾을 수 없습니다.',
  USER_EMAIL_NOT_FOUND: '사용자의 이메일을 찾을 수 없습니다.',
  CREDENTIAL_ACCOUNT_NOT_FOUND: '자격 증명 계정을 찾을 수 없습니다.',

  // Error messages - limits
  TOO_MANY_ATTEMPTS: '너무 많은 액세스 시도가 있었습니다.',
  TOO_MANY_REQUESTS: '너무 많은 요청이 발생했습니다.',
  RATE_LIMIT_EXCEEDED: '속도 제한을 초과했습니다.',

  // Error messages - other
  UNEXPECTED_ERROR: '기대하지 않은 오류가 발생했습니다.',
  UNKNOWN_ERROR: '알 수 없는 오류',
  SOMETHING_WENT_WRONG: '문제가 발생했습니다.',
  TRY_AGAIN: '다시 시도해 주세요.',
  OPERATION_FAILED: '작업에 실패했습니다.',
  REQUEST_FAILED: '요청에 실패했습니다.',
  UNKNOWN: '알 수 없음',
  MISSING_RESPONSE: '응답이 누락되었습니다.',
  VERIFICATION_FAILED: '인증에 실패했습니다.',
  SERVICE_UNAVAILABLE: '서비스를 사용할 수 없습니다.',
  MISSING_SECRET_KEY: '비밀 키가 누락되었습니다.',

  // Success messages
  SUCCESS: '성공',
  CHANGES_SAVED: '변경 사항이 저장되었습니다.',
  PASSWORD_CHANGED: '비밀번호가 변경되었습니다.',
  EMAIL_VERIFIED: '이메일 확인 완료.',
  PHONE_VERIFIED: '전화 확인 완료.',
  RESET_PASSWORD_SUCCESS: '비밀번호 재설정 성공.',

  // Verification related
  VERIFY_EMAIL: '이메일 인증',
  VERIFY_PHONE: '전화 인증',
  VERIFY_EMAIL_SENT: '인증 이메일이 전송되었습니다.',
  VERIFY_PHONE_SENT: '인증 코드가 전송되었습니다.',
  PASSWORD_RESET_SENT: '비밀번호 재설정 링크가 전송되었습니다.',
  PASSWORD_RESET_SUCCESS: '비밀번호 재설정에 성공했습니다.',
  PASSWORD_CHANGED_SUCCESS: '비밀번호가 성공적으로 변경되었습니다.',

  // Confirmation dialogs
  ARE_YOU_SURE: '정말로 계속하시겠습니까?',
  THIS_ACTION_CANNOT_BE_UNDONE: '이 변경 사항은 되돌릴 수 없습니다.',
  CONFIRM_DELETE: '삭제 확인',
  CONFIRM_REMOVE: '제거 확인',

  // Additional error messages from API
  FAILED_TO_CREATE_SESSION: '세션 생성에 실패했습니다.',
  FAILED_TO_UPDATE_USER: '사용자 업데이트에 실패했습니다.',
  FAILED_TO_GET_SESSION: '세션을 가져오는데 실패했습니다.',
  FAILED_TO_GET_USER_INFO: '사용자 정보를 가져오는데 실패했습니다.',
  FAILED_TO_CREATE_USER: '사용자를 생성하는데 실패했습니다.',
  COULD_NOT_CREATE_SESSION: '세션을 생성할 수 없습니다.',
  EMAIL_CAN_NOT_BE_UPDATED: '이메일을 업데이트할 수 없습니다.',
  FAILED_TO_UNLINK_LAST_ACCOUNT: '마지막 계정의 연동을 해제할 수 없습니다.',
  BANNED_USER: '차단된 사용자입니다.',
  USER_BANNED: '이 사용자는 차단되었습니다.',
  ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY: '익명 사용자는 다시 익명으로 로그인할 수 없습니다.',
  YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: '사용자의 비밀번호를 설정할 권한이 없습니다.',
  YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: '사용자를 삭제할 권한이 없습니다.',
  YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: '사용자 세션을 취소할 권한이 없습니다.',
  YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: '사용자를 가장할 수 있는 권한이 없습니다.',
  YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: '사용자를 차단할 수 있는 권한이 없습니다.',
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: '사용자 세션 목록을 볼 권한이 없습니다.',
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: '사용자 목록을 볼 권한이 없습니다.',
  YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: '사용자를 생성할 권한이 없습니다.',
  YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: '사용자의 역할을 변경할 권한이 없습니다.',
  YOU_CANNOT_BAN_YOURSELF: '자신을 차단할 수 없습니다.',
  SERVER_ONLY_PROPERTY: '서버 측 전용 속성입니다.',
  NO_VALUES_TO_UPDATE: '업데이트할 값이 없습니다.',
  INVALID_METADATA_TYPE: '잘못된 메타데이터 유형입니다.',
  METADATA_DISABLED: '메타데이터가 비활성화되었습니다.',
  REFILL_INTERVAL_AND_AMOUNT_REQUIRED: '리필 주기 및 금액이 필요합니다.',
  REFILL_AMOUNT_AND_INTERVAL_REQUIRED: '리필 양과 주기가 필요합니다.',
  INVALID_NAME_LENGTH: '이름 길이가 잘못되었습니다.',
  INVALID_PREFIX_LENGTH: '접두사 길이가 올바르지 않습니다.',
  INVALID_REMAINING: '잔여값이 유효하지 않습니다.',
  EXPIRES_IN_IS_TOO_LARGE: '만료 기간이 너무 깁니다.',
  EXPIRES_IN_IS_TOO_SMALL: '만료 기간이 너무 짧습니다.',
  KEY_NOT_RECOVERABLE: '이 키는 복구할 수 없습니다.',
  USAGE_EXCEEDED: '사용량을 초과했습니다.',
  KEY_EXPIRED: '키가 만료되었습니다.',
  KEY_DISABLED: '키가 비활성화되었습니다.',
  KEY_DISABLED_EXPIRATION: '비활성화된 키의 만료',
  KEY_NOT_FOUND: '키를 찾을 수 없습니다.',
  INVALID_API_KEY: '유효하지 않은 API 키입니다.',
  INVALID_USER_ID_FROM_API_KEY: 'API 키의 사용자 ID가 잘못되었습니다.',
  INVALID_API_KEY_GETTER_RETURN_TYPE: 'API 키 Getter의 반환 유형이 잘못되었습니다.',
  APP: '앱',
  USER: '사용자',
} as const

export default betterAuthKo
