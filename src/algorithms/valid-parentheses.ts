// Valid Parentheses

function isValid(s: string): boolean {
  const stack: string[] = [];

  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (last !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// console.log(isValid("({[]})"));
