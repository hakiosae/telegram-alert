// axios 라이브러리를 불러옵니다.
import axios from 'axios';
// 설정 파일에서 TELEGRAM_TOKEN을 가져옵니다.
import { TELEGRAM_TOKEN } from '../configs';

// sendMessage 함수는 비동기적으로 메시지를 Telegram 채널에 보냅니다.
export const sendMessage = async (channel: string, message: string) => {
  try {
    // axios를 사용하여 Telegram API에 POST 요청을 보냅니다.
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: channel,  // 메시지를 받을 채널 ID
      text: message,     // 보낼 메시지 내용
    }, {
      timeout: 10000  // 요청 타임아웃을 10,000ms (10초)로 설정
    });

    // 메시지 전송 성공 시 로그 출력
    console.log(`Message sent to channel ${channel}`);
  } catch (error) {
    // 메시지 전송 실패 시 오류 로그 출력
    console.error(`Failed to send message to channel ${channel}:`, error);
  }
};
