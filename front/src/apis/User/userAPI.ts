// 1. 인스턴스에서 기본 요청 형식을 사용하기 위해 불러온다.
import { instance } from "@/apis/instance";
import { AddMessageConfirmParams } from "./Mutations/useAddMessageConfirm";

// 2. 사용할 함수 이름을 지정하고, 어떤 값을 가지고 전달할 건지 타입 지정 -> 어떤 형식
const addMessage = async (tel: string) => {
  // 어떤 형식으로 인스턴스를 사용할건지 작성 , 뒤에 올 url 값을 써준다.
  await instance.post("/users/message-auth", { tel }); // json의 값 body도 객체로 묶여져있기 때문에 넘길 정보도 {}로 묶어준다.
};

const addMessageConfirm = async (data: AddMessageConfirmParams) => {
  console.log("훅내부임", data);
  // data가 애초에 객체로 들어올때는 {data} 감싸주지 않고 그냥 data라고 작성하기 !!! -> 안감싸도 되냐고 마지막에 윤하하한테 검사받기 윤 하 하
  await instance.post("/users/auth-check", data);
};

export { addMessage, addMessageConfirm };
