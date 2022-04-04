
function solution(arr) {
  // 부분집합을 둘로 나누고 한쪽의 합과 다른쪽의 합이 같으면 YES 출력
  const total = arr.reduce((a, b) => a + b, 0);
  let result = "NO";
  let flag = 0;

  function dfs(i, sum) {
    if (flag) {
      return;
    }

    if (i === arr.length) {
      if (total / 2 === sum) {
        result = "YES";
        flag = 1;
      }
    } else {
      dfs(i + 1, sum + arr[i]);
      dfs(i + 1, sum);
    }
  }

  dfs(0, 0);

  return result;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));

