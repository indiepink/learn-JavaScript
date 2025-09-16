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




