import express from 'express';
import { sendMessage } from './services/channelServices.ts';
import { PORT } from './configs.ts';

const app = express();
app.use(express.json());
app.use(express.text({ type: 'text/plain' }));

app.post('/tradingview-webhook', async (req, res) => {
  const message = req.body
  try {
    await sendMessage(message);
    res.status(200).send('Alert sent to Telegram');
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    res.status(500).send('Error sending message to Telegram');
  }
});

app.listen(PORT, () => {
  console.log(`Express server is listening on ${PORT}`);
});
