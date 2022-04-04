
function solution(n) {
  const ch = Array.from({ length: n + 1 }, () => 0);

  function dfs(v) {
    if (v === n + 1) {
      const result = ch.reduce((acc, val, idx) => {
        if (val) acc.push(idx);
        return acc;
      }, []);
      console.log(result);
    } else {
      ch[v] = 1;
      dfs(v + 1);
      ch[v] = 0;
      dfs(v + 1);
    }
  }
  dfs(1);
}

solution(3);
