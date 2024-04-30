// dotenv 모듈을 가져옵니다.
import dotenv from 'dotenv';
// dotenv를 사용하여 .env 파일에서 환경 변수를 로드합니다.
dotenv.config();

// process.env 객체에서 PORT 환경 변수를 읽어와서 export 합니다.
export const PORT = process.env.PORT;
// TELEGRAM_TOKEN 환경 변수를 읽어오고, 없으면 빈 문자열을 기본값으로 설정합니다.
export const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || '';
// CRYPTO_SIGNALS 환경 변수를 읽어오고, 없으면 빈 문자열을 기본값으로 설정합니다.
export const CRYPTO_SIGNALS = process.env.CRYPTO_SIGNALS || '';
// VOLUME_PATTERNS 환경 변수를 읽어오고, 없으면 빈 문자열을 기본값으로 설정합니다.
export const VOLUME_PATTERNS = process.env.VOLUME_PATTERNS || '';
// ALTCOIN_ALERTS 환경 변수를 읽어오고, 없으면 빈 문자열을 기본값으로 설정합니다.
export const ALTCOIN_ALERTS = process.env.ALTCOIN_ALERTS || '';
// LONGTERM_ZONES 환경 변수를 읽어오고, 없으면 빈 문자열을 기본값으로 설정합니다.
export const LONGTERM_ZONES = process.env.LONGTERM_ZONES || '';
