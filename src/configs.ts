import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || '';
export const TEST_CHANNELS = [
  process.env.TEST_CHANNEL_1 || '',
  process.env.TEST_CHANNEL_2 || '',
  process.env.TEST_CHANNEL_3 || '',
  process.env.TEST_CHANNEL_4 || ''
];