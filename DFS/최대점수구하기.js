function solution(limitTime, scores, times) {
  let max = Number.MIN_SAFE_INTEGER;

  function dfs(i, totalTime, totalScore) {
    if (totalTime > limitTime) {
      return;
    }

    if (i === scores.length) {
      max = Math.max(max, totalScore);
    } else {
      // 풀었다
      dfs(i + 1, totalTime + times[i], totalScore + scores[i]);

      // 안풀었다
      dfs(i + 1, totalTime, totalScore);
    }
  }
  dfs(0, 0, 0);

  return max;
}

let scores = [10, 25, 15, 6, 7];
let times = [5, 12, 8, 3, 4];
console.log(solution(20, scores, times));
