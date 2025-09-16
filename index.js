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


