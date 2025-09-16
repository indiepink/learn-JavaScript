// 배열
const daysOfWeek = ["월요일", "화요일","수요일", "목요일", "금요일","토요일", "일요일"];

console.log(daysOfWeek);
console.log("오늘의 요일: " + daysOfWeek[1]);

const idol = ["장원영", "안유진", "리즈", "레이", "가을", "이서"];

//미션: "안유진"을 뽑아와서 콘솔에 찍어보기
console.log(idol[1]);

//미션: 마지막 멤버 뽑아와서 콘솔에 찍어보기
console.log(idol[(idol.length-1)]);


// 객체
// key와 value로 구성된 속성들의 묶음
const person = {  
  name : "송주령",
  isMale : false,
  mbti : "istj",
  favoriteFoods : ["떡볶이", "잡채","불고기", "제육볶음", "돈까스"]
  };

console.log("🚀 ~ person:", person);
console.log("name:", person["name"]);
console.log("남성여부:", person.isMale);
console.log("MBTI:", person.mbti);

// "잡채"라는 값 뽑아오기
console.log("두 번째로 좋아하는 음식:", person.favoriteFoods[1]);
