import axios from 'axios';
import { TELEGRAM_TOKEN, TEST_CHANNELS } from '../configs.ts';

const sendMessage = async (message: string) => {
  const promises = TEST_CHANNELS.map(channel => {
    return axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: channel,
      text: message,
    });
  });

  try {
    await Promise.all(promises);
    console.log('All messages sent successfully');
  } catch (error) {
    console.error('Failed to send messages:', error);
    throw new Error('Error sending messages to Telegram');
  }
};

export { sendMessage };
