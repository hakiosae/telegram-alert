import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT;
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || '';
const TEST_CHANNEL_1 = process.env.TEST_CHANNEL_1 || '';
const TEST_CHANNEL_2 = process.env.TEST_CHANNEL_2 || '';
const TEST_CHANNEL_3 = process.env.TEST_CHANNEL_3 || '';
const TEST_CHANNEL_4 = process.env.TEST_CHANNEL_4 || '';

app.post('/tradingview-webhook', async (req, res) => {
  const { message, data } = req.body;
  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: TEST_CHANNEL_1,
      text: message,
    });
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: TEST_CHANNEL_2,
      text: message,
    });

    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: TEST_CHANNEL_3,
      text: message,
    });

    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: TEST_CHANNEL_4,
      text: message,
    });
    console.log('data: ', data);
    res.status(200).send('Alert sent to Telegram');

  } catch (error) {
    console.log('test, test');
    res.status(500).send('Error sending message to Telegram');
  }
});

app.listen(port, () => {
  console.log(`Express server is listening on ${port}`);
});
