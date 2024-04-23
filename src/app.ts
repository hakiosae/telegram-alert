import express from 'express';
import { sendMessage } from './services/channelServices.ts';
import { PORT, CRYPTO_SIGNALS, VOLUME_PATTERNS, ALTCOIN_ALERTS, LONGTERM_ZONES } from './configs.ts';

const app = express();
app.use(express.json());
app.use(express.text({ type: 'text/plain' }));
app.use((req, res, next) => {
  const timeout = 10000;
  const timer = setTimeout(() => {
    res.status(503).send('Server timeout');
  }, timeout);

  res.on('finish', () => clearTimeout(timer));
  res.on('close', () => clearTimeout(timer));

  next();
});

app.post('/crypto-signals', async (req, res) => {
  const message = req.body
  try {
    await sendMessage(CRYPTO_SIGNALS, message);
    res.status(200).send('Alert sent to Telegram');
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    res.status(500).send('Error sending message to Telegram');
  }
});

app.post('/volume-patterns', async (req, res) => {
  const message = req.body
  try {
    await sendMessage(VOLUME_PATTERNS, message);
    res.status(200).send('Alert sent to Telegram');
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    res.status(500).send('Error sending message to Telegram');
  }
});

app.post('/altcoin-alerts', async (req, res) => {
  const message = req.body
  try {
    await sendMessage(ALTCOIN_ALERTS, message);
    res.status(200).send('Alert sent to Telegram');
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    res.status(500).send('Error sending message to Telegram');
  }
});

app.post('/longterm-zones', async (req, res) => {
  const message = req.body
  try {
    await sendMessage(LONGTERM_ZONES, message);
    res.status(200).send('Alert sent to Telegram');
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    res.status(500).send('Error sending message to Telegram');
  }
});


app.listen(PORT, () => {
  console.log(`Express server is listening on ${PORT}`);
});
