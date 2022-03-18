// https://newbizstart.notion.site/Algorithm-693053b8e3c9416e8df9b574782a77fa

// **028. random 숫자 만들기**

// **`문제 설명`**

// random 객체를 이용하여 1~100까지 무작위 숫자가 나오도록 하여

// number과 비교해야 합니다.

// number보다 큰 수면 Win, 작은 수면 Lose라는 문구를 띄워주세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - random 객체를 이용해야 합니다.
// - random 객체를 이용해서 나오는 수는 1~100 사이 입니다.

function random() {
  let number = 50;
  let random = Math.random() * 100;
  if (random >= number) {
    console.log("win");
  } else {
    console.log("Lose");
  }
}

random(); // Win
random(); // Lose
//==============================================
// **029. 나누기 함수 만들기**

// **`문제 설명`**

// 숫자열인 입력데이터 2개를 받아 나누기 기능을 하는 함수를 만들어야 합니다.

// **`입력 인자`**

// - 입력데이터 1 - 숫자열
// - 입력데이터 2 - 숫자열

// **`주의 사항`**

// - 표현식, 선언식, 화살표 함수로 모두 만들줄 알아야 합니다.
// - 함수의 이름과 입력데이터는 자유롭게 지어도 됩니다.

function divide(num1, num2) {
  return num1 / num2;
}

const divide = function (num1, num2) {
  return num1 / num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

//===========================================
// **030. 비밀번호 검증 함수**

// **`문제 설명`**

// 비밀번호 2개를 입력받아 대소문자 구분없이 비교하는 기능을 하는 함수를 화살표 함수를 이용해 만들어야 합니다.

// 추가 조건 1. 만약 비밀번호가 8~16자리가 아니라면, "비밀번호는 8~16"자리여야 합니다" 라는 문구를 띄워야 합니다.

// 추가 조건 2. 만약 두 개의 비밀번호 값이 서로 다르면 "비밀번호를 다시 확인해주세요" 라는 문구를 띄워야 합니다.

// **`입력 인자`**

// - 입력데이터 1 - 문자열
// - 입력데이터 2 - 문자열

// **`주의 사항`**

// - 화살표 함수로 만들어야합니다.
// - 함수와 입력데이터 이름은 자유롭게 지어도 됩니다.
const validation = (password1, password2) => {
  password1 = password1.toLowerCase();
  password2 = password2.toLowerCase();

  if (password1.length < 8 || password1.length > 16) {
    console.log("비밀번호는 8~16 자리여야 합니다");
  } else if (password1 !== password2) {
    console.log("비밀번호를 다시 확인해주세요");
  } else {
    console.log("회원가입을 축하합니다");
  }
};
