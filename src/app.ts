// express 모듈을 가져옵니다.
import express from 'express';
// channelServices에서 sendMessage 함수를 가져옵니다.
import { sendMessage } from './services/channelServices.ts';
// configs.ts에서 여러 설정을 가져옵니다.
import { PORT, CRYPTO_SIGNALS, VOLUME_PATTERNS, ALTCOIN_ALERTS, LONGTERM_ZONES } from './configs.ts';

// Express 앱을 생성합니다.
const app = express();
// JSON 요청 본문을 파싱하기 위한 미들웨어를 사용합니다.
app.use(express.json());
// text/plain 타입의 텍스트 요청 본문을 처리하기 위한 미들웨어를 사용합니다.
app.use(express.text({ type: 'text/plain' }));

// '/crypto-signals' 경로로 POST 요청을 받을 때의 처리입니다.
app.post('/crypto-signals', async (req, res) => {
  const message = req.body;
  try {
    // Telegram으로 메시지를 보냅니다```typescript
    // CRYPTO_SIGNALS 채널로 메시지를 보내는 함수를 호출합니다.
    await sendMessage(CRYPTO_SIGNALS, message);
    // 메시지 전송 성공 시 200 상태 코드와 함께 응답을 보냅니다.
    res.status(200).send('Alert sent to Telegram');
  } catch (error) {
    // 오류 발생 시 오류 로그를 출력하고 500 상태 코드로 응답합니다.
    console.error('Error sending message to Telegram:', error);
    res.status(500).send('Error sending message to Telegram');
  }
});

// '/volume-patterns' 경로로 POST 요청을 받을 때의 처리입니다.
app.post('/volume-patterns', async (req, res) => {
  const message = req.body;
  try {
    // VOLUME_PATTERNS 채널로 메시지를 보내는 함수를 호출합니다.
    await sendMessage(VOLUME_PATTERNS, message);
    // 메시지 전송 성공 시 200 상태 코드와 함께 응답을 보냅니다.
    res.status(200).send('Alert sent to Telegram');
  } catch (error) {
    // 오류 발생 시 오류 로그를 출력하고 500 상태 코드로 응답합니다.
    console.error('Error sending message to Telegram:', error);
    res.status(500).send('Error sending message to Telegram');
  }
});

// '/altcoin-alerts' 경로로 POST 요청을 받을 때의 처리입니다.
app.post('/altcoin-alerts', async (req, res) => {
  const message = req.body;
  try {
    // ALTCOIN_ALERTS 채널로 메시지를 보내는 함수를 호출합니다.
    await sendMessage(ALTCOIN_ALERTS, message);
    // 메시지 전송 성공 시 200 상태 코드와 함께 응답을 보냅니다.
    res.status(200).send('Alert sent to Telegram');
  } catch (error) {
    // 오류 발생 시 오류 로그를 출력하고 500 상태 코드로 응답합니다.
    console.error('Error sending message to Telegram:', error);
    res.status(500).send('Error sending message to Telegram');
  }
});

// '/longterm-zones' 경로로 POST 요청을 받을 때의 처리입니다.
app.post('/longterm-zones', async (req, res) => {
  const message = req.body;
  try {
    // LONGTERM_ZONES 채널로 메시지를 보내는 함수를 호출합니다.
    await sendMessage(LONGTERM_ZONES, message);
    // 메시지 전송 성공 시 200 상태 코드와 함께 응답을 보냅니다.
    res.status(200).send('Alert sent to Telegram');
  } catch (error) {
    // 오류 발생 시 오류 로그를 출력하고 500 상태 코드로 응답합니다.
    console.error('Error sending message to Telegram:', error);
    res.status(500).send('Error sending message to Telegram');
  }
});

// Express 서버를 설정된 PORT에서 시작합니다.
app.listen(PORT, () => {
  // 서버가 시작되면 콘솔에 로그를 출력합니다.
  console.log(`Express server is listening on ${PORT}`);
});
