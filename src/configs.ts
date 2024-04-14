import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || '';
export const CRYPTO_SIGNALS = process.env.CRYPTO_SIGNALS || '';
export const VOLUME_PATTERNS = process.env.VOLUME_PATTERNS || '';
export const ALTCOIN_ALERTS = process.env.ALTCOIN_ALERTS || '';
export const LONGTERM_ZONES = process.env.LONGTERM_ZONES || '';