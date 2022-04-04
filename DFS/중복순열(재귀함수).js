
function solution(n, m) {
  const arr = Array.from({ length: m }, () => 0);
  const result = [];

  function dfs(i) {
    if (i === m) {
      result.push(arr.slice());
    } else {
      for (let j = 1; j <= n; j++) {
        arr[i] = j;
        dfs(i + 1);
      }
    }
  }
  dfs(0);
  return result;
}

console.log(solution(3, 2));