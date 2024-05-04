const isValid = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const top = stack[stack.length - 1];
    if (str[i] === "{" || str[i] === "[" || str[i] === "(") {
      stack.push(str[i]);
    } else if (
      (str[i] === "}" && top === "{") ||
      (str[i] === ")" && top === "(") ||
      (str[i] === "]" && top === "[")
    ) {
      stack.pop();
    } else {
      return false; // If there's any other character, it's invalid.
    }
  }

  // at the end, for a valid parantheses, stack should be empty

  return stack.length === 0;
};

console.log(isValid("()[]{}"));
