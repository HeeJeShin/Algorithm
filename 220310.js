// https://newbizstart.notion.site/Algorithm-693053b8e3c9416e8df9b574782a77fa

// **021. 몇 일**

// **`문제 설명`**

// 입력되는 달(month)에 따라 각 달에 몇 일이 있는지 보여주는 함수를 만들려고 합니다.

// 각 조건에 해당하는 알맞은 값을 입력해주세요.

// **`입력 인자`**

// - month는 1~12의 숫자

// **`주의 사항`**

// - || 연산자가 필요합니다.
// - 2월은 28일로 계산합니다.

console.log("21번문제");
function days(month) {
  if (month === 2) {
    console.log(28);
  } else if (
    month === 2 ||
    month === 4 ||
    month === 6 ||
    month === 9 ||
    month === 11
  ) {
    console.log(30);
  } else {
    console.log(31);
  }
}

days(2);
days(3);
days(11);

//===============================================================

// **022. 미니 계산기**

// **`문제 설명`**

// 숫자 2개와 연산자를 입력받아 알맞게 계산하는 미니계산기 함수를 만들어주세요.

// num1과 num2는 숫자열, operator는 문자열로 입력됩니다.

// operator "+", "/", "-", "*" 이외의 값이 들어온다면

// "올바른 입력이 아닙니다"라는 문구를 띄워주세요.

// **`입력 인자`**

// - num1 - 0 이상의 자연수
// - num2 - 0 이상의 자연수
// - operator - "+",  "/",  "-",  "*", 혹은 다른 문자열

// **`주의 사항`**

// - operator에 올바르지 않은 연산자가 들어오는 경우를 조심하세요.

console.log("22번문제");

function calculator(num1, num2, operator) {
  if (operator === "+") {
    console.log(num1 + num2);
  } else if (operator === "/") {
    console.log(num1 / num2);
  } else if (operator === "-") {
    console.log(num1 - num2);
  } else if (operator === "*") {
    console.log(num1 * num2);
  } else {
    console.log("올바른 입력이 아닙니다.");
  }
}

calculator(1, 2, "+");
calculator(1, 2, "-");
calculator(2, 1, "/");
calculator(3, 2, "*");
calculator(1, 2, "=");

//========================================
// **023. 숫자 더하기**

// **`문제 설명`**

// 입력되는 수에 따라 0부터 해당 수까지의 합을 구하려고 합니다.

// num은 1이상의 자연수가 들어옵니다.

// 만약 num이 5라면 1 + 2 + 3 + 4 + 5를 구해야 합니다.

// **`입력 인자`**

// - num은 1이상의 자연수 입니다.

// **`주의 사항`**

// - for을 이용해서 문제를 풀어야 합니다.

function sum(num) {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result = result + i;
  }
  {
    console.log(result);
  }
}

sum(5); // 15
sum(3); // 6
