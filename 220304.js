// https://newbizstart.notion.site/Algorithm-693053b8e3c9416e8df9b574782a77fa

// **011. 객체와 배열의 값**

// **`문제 설명`**

// 주어진 classmates는 "다람쥐초등학교" 학생들의 정보를 모아둔 배열입니다.

// 그런데 자세히 보니 "영희" 학생의 정보가 잘못 입력되어 있습니다.

// "영희"의 school 값을 "다람쥐초등학교"로 바꿔주세요.

const classmates = [
  {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  },
  {
    name: "영희",
    age: 8,
    school: "토끼초등학교",
  },
  {
    name: "짱구",
    age: 8,
    school: "다람쥐초등학교",
  },
];
classmates[1].school = "다람쥐초등학교";

console.log(classmates, "1번째문제");

// **013. 데이터 타입 구분**

// **`문제 설명`**

// 주어진 변수 str과 number의 데이터 타입을 확인하세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - 문자열과 숫자열은 어떻게 다른지 확인해 보세요.

let str = "3";
let number = 3;

typeof str;
typeof number;

console.log(typeof str);
console.log(typeof number);

// //=================================
// **014. 배열과 객체의 데이터 타입**

// **`문제 설명`**

// 주어진 변수 array과 object의 데이터 타입을 확인하세요.

// **`입력 인자`**

// - X

// - 배열과 객체는 어떤 타입으로 나오나요?
// - 배열과 객체를 더 정확하게 구분하려면 Array.isArray()를 사용해보세요.

let array = [];

let object = {};

result = typeof array;
console.log("4번문제 result", result);

object_typeof = typeof object;
console.log("4번문제", object_typeof);

boolean_type = Array.isArray(array);
console.log("4번문제-구분", boolean_type);

boolean_type2 = Array.isArray(object);
console.log("4번문제-구분", boolean_type2);

// ===================

// **016. 연산자 연습**

// **`문제 설명`**

// 각각의 연산 결과가 무엇인지 알아보세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - NaN은 Not-A-Number의 약자입니다.
// - - 연산자는 숫자에서만 정의되므로 모두 숫자로 반환합니다.
// - Javascript에서 + 연산자는 "더하기" 와 "연결"의 의미를 갖고 있습니다.

console.log(1 + "1"); //11
console.log(1 - "1"); //0
console.log("1" + "1"); // 11

"1" + "1";

1 * "1";

3 * "A";

1 + 1 + "1";

"1" + 1 + 1;

"11" - 1;

"11" + 1;

"홍" + "길동";

20 === "20";

20 == "20";
// 이십과 이십은 같

!true;

//=================

// **017. &&, ||**

// **`문제 설명`**

// 각각의 연산 결과가 무엇인지 알아보세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - &&와 || 주로 조건문에서 사용합니다.

console.log(20 >= 10 && 20 === 10); // and
console.log(20 === 10 || 10 === 10); // or

// (20 >= 10) && (20 === 10)

// (20 === 10) || (10 === 10)
//======================================================

// **18. 조건문 연습**

// **`문제 설명`**

// input1, input2에는 boolean 타입인 true, false가 입력됩니다.

// 둘 중에 하나라도 true라면 "true"

// 두 개 모두 false면 "false"라는 문구를 띄워주세요.

// **`입력 인자`**

// - input1 - boolean 타입인 true / false
// - input2 - boolean 타입인 true / false

// **`주의 사항`**

// - || (OR) 연산자 또는 &&(AND) 연산자를 이용해 보세요.

function boolean(input1, input2) {
  if (input1 === false && input2 === false) {
    console.log(false);
  } else {
    console.log(true);
  }
}

boolean(true, false); // true
boolean(false, true); // true
boolean(false, false); // false

//=================================================================

// **019. 홀짝**

// **`문제 설명`**

// 입력되는 숫자가 짝수인지 홀수인지 구별하는 함수를 만들려고 합니다.

// 입력된 값이 "짝수"이면 "Even", "홀수"이면 "Odd", 0이면 "Zero"라는 문구를 띄워주세요.

// **`입력 인자`**

// - num은 0 이상인 자연수

// **`주의 사항`**

// - if는 함수 안에서 사용됩니다.
// - console.log("Even")으로 입력하면 "Even"이라는 값이 출력됩니다.

function evenOdd(num) {
  if (num === 0) {
    console.log("Zero");
  } else if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

evenOdd(5);

//=====================================

// **020. 온도**

// **`문제 설명`**

// 입력되는 온도에 따라 문구를 띄워주는 온도계 함수를 만들려고 합니다.

// 입력된 값에 따라 알맞은 문구를 띄워주세요

// 18이하면 "조금 춥네요"

// 19~23이면 "날씨가 좋네요"

// 24이상이면 "조금 덥습니다"

// **`입력 인자`**

// - num은 10~30까지의 자연수

// **`주의 사항`**

// - && 연산자가 필요합니다.

function temperature(number) {
  if (number <= 18) {
    console.log("조금춥네요. 20번문제");
  } else if (number >= 19 && number <= 23) {
    console.log("날씨가 좋네요. 20번문제");
  } else {
    console.log("조금 덥습니다. 20번문제");
  }
}

temperature(23);
temperature(8);
temperature(55);
