const isValid = (inp) => {
  let stack = [];
  if (inp.length == 0) return false;
  for (let i = 0; i < inp.length; i++) {
    if (inp[i] == "(" || inp[i] == "{" || inp[i] == "[") {
      stack.push(inp[i]);
    } else {
      if (stack.length == 0) return false;
      const lastElement = stack.pop();
      if (
        (inp[i] == ")" && lastElement !== "(") ||
        (inp[i] == "]" && lastElement !== "[") ||
        (inp[i] == "}" && lastElement !== "{")
      ) {
        return false;
      }
      console.log(stack)
    }
  }
  return stack.length == 0;
};

const inp = "{[()()]}";
console.log(isValid(inp));
