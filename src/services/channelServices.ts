import axios from 'axios';
import { TELEGRAM_TOKEN, TEST_CHANNELS } from '../configs';

export const sendMessage = async (message: string) => {
  const promises = TEST_CHANNELS.map(channel => {
    return axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: channel,
      text: message,
    }).then(() => {
      console.log(`Message sent to channel ${channel}`);
    }).catch(error => {
      console.error(`Failed to send message to channel ${channel}:`, error);
    });
  });

  try {
    await Promise.all(promises);
    console.log('All messages attempted to send');
  } catch (error) {
    console.error('Some messages may not have been sent:', error);
  }
};



