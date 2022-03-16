//https://newbizstart.notion.site/Algorithm-693053b8e3c9416e8df9b574782a77fa

// **026. 홀수 문자열**

// **`문제 설명`**

// num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.

// num에 5일 경우에는 "135"입니다.

// **`입력 인자`**

// - num은 숫자열입니다.

// **`주의 사항`**

// - for을 이용해서 문제를 풀어야 합니다.
// - 짝수를 제외하는 조건을 추가해야 합니다.

// **`예상 결과`**

// ```jsx
// makeOdd(5) // 135
// makeOdd(7) // 1357
function makeOdd(num) {
  let str = "";
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 1) {
      str = str + i;
    }
  }
  console.log(str);
}
makeOdd(5);
makeOdd(7);
//====================================================
// **027. 가장 큰 수 찾기**

// **`문제 설명`**

// str은 무작위 숫자인 문자열입니다.  해당 문자열에서 가장 큰 수를 구하는 함수를 만들어야 합니다.

// 만약 str에 "12345"가 들어온다면 "5"를 나타내야 합니다.

// **`입력 인자`**

// - str은 문자열입니다.

// **`주의 사항`**

// - str에서 각각의 문자를 숫자로 바꿔서 계산해야 합니다.
// - 비교할 수 있는 기준값이 있어야 합니다.
// - 최댓값을 저장할 수 있는 변수가 있어야 합니다.

// function bigNum(str) {
//   let max = 0;
//   for (let i = 0; i <= str.length; i++) {
//     if (Number(str[i]) >= max) {
//       max = Number(str[i]);
//     }
//   }
//   console.log(max);
// }
function bigNum(str) {
  let max = 0;
  for (let i = 0; i <= str.length; i++) {
    if (Number(str[i]) >= max) {
      max = Number(str[i]);
    }
  }
  console.log(max);
}

bigNum(12345); // 5
bigNum(87135); // 8

//답이 이상하다.. 왜그러까??
