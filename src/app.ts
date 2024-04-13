import express from 'express';
import { sendMessage } from './services/channelServices';
import { PORT, TEST_CHANNELS_1, TEST_CHANNELS_2, TEST_CHANNELS_3, TEST_CHANNELS_4 } from './configs';


const app = express();
app.use(express.json());
app.use(express.text({ type: 'text/plain' }));

app.post('/tradingview-webhook', async (req, res) => {
  const message = req.body
  try {
    await sendMessage(TEST_CHANNELS_1, message);
    await sendMessage(TEST_CHANNELS_2, message);
    await sendMessage(TEST_CHANNELS_3, message);
    await sendMessage(TEST_CHANNELS_4, message);
    res.status(200).send('Alert sent to Telegram');
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    res.status(500).send('Error sending message to Telegram');
  }
});

app.listen(PORT, () => {
  console.log(`Express server is listening on ${PORT}`);
});
