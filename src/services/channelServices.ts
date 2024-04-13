import axios from 'axios';
import { TELEGRAM_TOKEN, TEST_CHANNELS } from '../configs';

const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time));

export const sendMessage = async (message: string) => {
  for (const channel of TEST_CHANNELS) {
    try {
      await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        chat_id: channel,
        text: message,
      });
      console.log(`Message sent to channel ${channel}`);
      // 각 요청 후 1초 대기 (1000ms) - Rate Limiting 대응
      await delay(1000);
    } catch (error) {
      console.error(`Failed to send message to channel ${channel}:`, error);
    }
  }
};



