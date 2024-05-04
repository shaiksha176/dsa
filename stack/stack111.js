const isValid = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const top = stack[stack.length - 1];
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      stack.push(s[i]);
    } else if (
      (s[i] === "}" && top === "{") ||
      (s[i] === ")" && top === "(") ||
      (s[i] === "]" && top === "[")
    ) {
      stack.pop();
    } else {
      return false; // If there's any other character, it's invalid.
    }
  }

  // At the end, for a valid parentheses, the stack should be empty.
  return stack.length === 0;
};

console.log(isValid("()[]{}")); // This will correctly return true for a valid input.
