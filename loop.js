const numbers = [245, 48, 96, 33];

// 반복문
// 특정 조건에 따라 똑같은 기능을 반복해서 수행하는 것
// for(let i = 0; i < 10; i++){
//   // 반복해서 실행할
//   console.log(`${i}번째 실행`);
// }

for(let i = 0; i < numbers.length; i++){
  // 반복해서 실행할
  console.log(`✨ ${i} : ${numbers[i]}`);
}

// forEach: 향상된 for문
numbers.forEach((value, index) => {
    // 반복해서 실행할
  console.log(`🎀 ${index} : ${value}`);
});


const ingredientList = ["🧀", "🍅","🥓","🥚"];
let sandwitch = "🥯";

// 각 재료들을 샌드위치에 추가
ingredientList.forEach((item) => {
  //sandwitch = sandwitch + item;  
  sandwitch += item;
})

console.log("🚀 ~  sandwitch:",  sandwitch);


// Q5. 반복문
// 문제: 5부터 1까지 카운트다운하는 for문을 작성하세요.
const arr = [];
for(i = 5; i > 0; i--){
  arr.push(i);
}

console.log(arr);


// 자주 사용하는 배열 함수
const students = ["alice", "bob", "david"];

// map: 기존 배열을 조작하여 새로운 배열을 리턴
// 기존 배열에 영향이 없음
const uppserStudents = students.map((student) => 
  student.toUpperCase()
);

console.log("🚀 ~ uppserStudents:", uppserStudents);


// Q6. 다음 코드에서 각 숫자에 1을 더한 새로운 배열을 만들어 주세요 (map)
const numbers2 = [1, 2, 3, 4, 5];
// 여기에 코드를 작성하세요.
const incrementedNumbers = numbers2.map((value)=>{
  return value + 1;
})

console.log(incrementedNumbers); // 예상 결과: [2, 3, 4, 5, 6]


// filter: 배열안의 요소들 중 조건을 만족하는 배열의 요소들로 새로운 배열을 리턴(조건식을 return구문에 작성)
// 조건에 부합하는 요소가 없는 경우 빈 배열 리턴

// 글자수가 4글자 이상인 요소들만 필터링
const filterStudent = students.filter((student) => student.length >=4);
console.log("🚀 ~ filterStudent:", filterStudent);


// Q7. 다음 코드에서 짝수만 필터링된 새로운 배열을 만들어 주세요 (filter)
const arrs = [1, 2, 3, 4, 5, 6];
const evenNumbers = arrs.filter((value) => value % 2 === 0);
console.log(evenNumbers); // 예상 결과: [2, 4, 6]


//find: 배열안의 요소들 중 조건을 만족하는 "첫 번째 요소를 리턴"
// 조건에 부합하지 않는 경우 undefinde 리턴
const findStudent = students.find((student) => student.length >=4);
console.log("🚀 ~ findStudent:", findStudent);


// 학생들의 정보가 담긴 배열
const sts = [
  { name: "Alice", age: 22, major: "Computer Science" },
  { name: "Bob", age: 21, major: "Mathematics" },
  { name: "Charlie", age: 23, major: "Physics" },
  { name: "David", age: 20, major: "Chemistry" },
  { name: "Eva", age: 22, major: "Biology" }
];

// Q8. 다음 코드에서 각 문제를 풀어보세요. (find)
// 1. 전공이 "Physics"인 학생을 찾으세요.
// 여기에 코드를 작성하세요.
const physicsStudent = sts.find((value) => value.major === "Physics");

console.log("전공이 Physics인 학생:", physicsStudent); // 예상 결과: { name: "Charlie", age: 23, major: "Physics" },

// 2. 이름이 "David"인 학생을 찾으세요.
// 여기에 코드를 작성하세요.
const davidStudent = sts.find((value)=> value.name === "David");

 console.log("이름이 David인 학생:", davidStudent); // 예상 결과:{ name: "David", age: 20, major: "Chemistry" },


//some/every (boolean 타입 리턴)
// some: 배열의 요소 중 하나라도 조건을 만족하면 true리턴, 아니면 false 리턴 
// every: 배열의 요소들의 모든 조건을 만족하면 true리턴, 아니면 false 리턴
const someStudent = students.some((student) => student.startsWith("a"));
console.log("🚀 ~ someStudent:", someStudent);

const everyStudent = students.every((student) => student.startsWith("a"));
console.log("🚀 ~ everyStudent:", everyStudent);

