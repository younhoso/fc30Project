import {api} from "./api/getProductData.js";
// 이 곳에 정답 코드를 작성해주세요.

const feachProductData = async () => {
  const result = await api.getProductData();
  console.log(result)
};

feachProductData();