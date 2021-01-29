// APIを叩くためのライブラリ
import axios from 'axios';
import { BASE_URL, APP_ID } from 'rakuten/config';

// asyncを使うときは必ずPromiseとセット（非同期処理）
// 今回はconsole.logを出力するだけで戻り値（return）は不要のため、voidにする
export const searchHotels = async(keyword: string): Promise<void> => {
  try {
    const res = await axios.get(BASE_URL + '&applicationId=' + APP_ID + '&keyword=' + keyword)
    if (res.status === 200) {
      console.log(res.data.hotels)
    }
  } catch (e) {
    console.error(e)
  }
}