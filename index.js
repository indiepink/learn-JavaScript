// 변수
const username = "송주령똥꾸멍"; //상수(const): 변할 수 없는 값
console.log("🚀 ~ username:", username)

let usermbti = "ISTJ"; //변수(let): 변할 수 있는 값
console.log("🚀 ~ usermbti:", usermbti);

usermbti = "ESFJ"; // 수정
console.log("🚀 ~ 변경된 usermbti:", usermbti);

// 상수는 변경 불가능
// username = "인기스타송상훈";
// console.log("🚀 ~ 변경된 username:", username);


// 데이터 타입
const num = 12;
const str = "텍스트";
const bool =  true;
const empty = undefined; 
let empty2;

//데이터 타입 확인: typeof
console.log("num: "    + typeof num);    // number
console.log("str: "    + typeof str);    // string
console.log("bool: "   + typeof bool);   // boolean
console.log("empty: "  + typeof empty);  // undefined 
console.log("empty2: " + typeof empty2); // undefined

/** 
 * null과 undefined의 차이점
 * null: 개발자가 의도를 가지고 값을 비움
 * undefined: 개발자 의도와 상관없이 값이 없는 상태
*/

console.log("====================================================");

// 함수
// 함수 정의 & 선언
function greeting() {
  //실행할 로직들
  //console.log("반갑습니다! " + username + "님");  
  console.log(`반갑습니다! ${username}님 mbti는 ${usermbti}이시군요!`); 
}

// 화살표 함수
const greeting2 = () => {
  //실행할 로직들
  //console.log("반갑습니다! " + username + "님");  
  console.log(`반갑습니다! ${username}님 mbti는 ${usermbti}이시군요!`); 
}

// 함수 호출 & 실행
greeting();  // 일반 함수
greeting2(); // 화살표 함수

// 함수의 인자와 매개변수
const sum = (num1, num2) => {
  //실행할 로직
  //const result =  num1 + num2;
  // console.log("🚀 ~ sum ~ result:", result);

  // return 사용
  // const result =  num1 + num2; 
  // return result;
  return num1 + num2;
  console.log("return 끝!"); // return 이후 실행 안 됨
}

sum(11,22); // argument

// 미션: sayHello라는 함수 만들기
// 사용자 이름을 받아서 "반간습니다. OOO님"라는 텍스트를 console탭에 출력하는 기능 만들기

const sayHello = (name) => {
  console.log(`반갑습니다! ${name}님`);
}

sayHello("인기스타송상훈");

//return 
const add = sum(11, 22);
console.log("🚀 ~ add:", add);

const double = (num) => {
  return num * 2 ;
}  

const doubleResult = double(add);
console.log("🚀 ~ doubleResult:", doubleResult); // add(33) * 2 = 66


console.log("====================================================");

//조건문
const score = 70;

if (score >= 60) {
  // 조건식이 true인 경우에 실행할 코드
  console.log("합격");
} else {
  // 조건식이 false인 경우에 실행할 코드
  console.log("불합격");
}
  console.log("if문 종료!");

  let grade = "";

  if(score >= 90) {
    grade = "A등급";
  }else if(score >= 80) {
    grade = "B등급";
  }else if(score >= 70) {
    grade = "C등급";
  }else {
    grade ="D등급";
  }

  console.log(grade);


// 여기에 orderSandwich 함수를 작성하세요
// orderSandwich 함수는 type 매개변수를 받고 타입에 따라 다른 재료를 반환해야 합니다
const orderSandwich = (food = "basic") => {
  console.log(food);
  // if(food === "basic"){
  //   return "🥖 + 🥬 + 🍅 + 🧀 + 🥓";
  // }  else {
  //   return "🥖 + 🥬 + 🍅 + 🥑 + 🥒";
  // }

  // 삼항연산자
  return food === "basic" ? "🥖 + 🥬 + 🍅 + 🧀 + 🥓" : "🥖 + 🥬 + 🍅 + 🥑 + 🥒";
}

// 함수 테스트 - 아래 코드는 수정하지 마세요
console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich('basic'));
console.log("비건 샌드위치 주문: " + orderSandwich('vegan'));

/* 예상 결과:
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
비건 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🥑 + 🥒
*/

//미션
//age의 값이 18세 이상이면 adultType의 값은 "성인"
//age의 값이 18세 미만이면 adultType의 값은 "미성년자"
const age = 20;
const adultType = age >= 18 ? "성인" : "미성년자";

console.log(adultType);

// 자바스크립트에서 false로 간주되는 것들
//0, ''(빈문자열), null, undefined

if(0) {
  console.log ("true 입니다~");
} else {
  console.log ("false 입니다~");
}

const userInput = "";
if(userInput) {
  alert("입력해주셔서 감사합니다");
}else {
  alert("입력값을 작성해주세요!");
}
