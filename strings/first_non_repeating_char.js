let s = "leetcode";
let str = {};
for (let i = 0; i < s.length; i++) {
  if (str[s[i]] == undefined) str[s[i]] = true;
  else str[s[i]] = false;
}

for (let i = 0; i < s.length; i++) {
  if (str[s[i]]) {
    console.log(i);
    break;
  }
}

console.log(str);
