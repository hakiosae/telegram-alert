import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_TOKEN || '';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '';

app.post('/tradingview-webhook', async (req, res) => {
  const { message } = req.body;
  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: Number(TELEGRAM_CHAT_ID),
      text: message,
    });
    res.status(200).send('Alert sent to Telegram');

  } catch (error) {
    res.status(500).send('Error sending message to Telegram');
  }
});

app.listen(port, () => {
  console.log(`Express server is listening on ${port}`);
});
