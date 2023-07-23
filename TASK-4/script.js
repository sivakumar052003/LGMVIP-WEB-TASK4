function formatExpression(expr) {
var tokens = expr.match(/\d+\.\d+|\d+|[+\-*/]/g);

if (tokens && tokens[0] === "-") {
  tokens[0] = "\u2212";
}

for (var i = 1; i < tokens.length; i++) {
  if (
    tokens[i] === "-" &&
    ["+", "-", "*", "/", "("].includes(tokens[i - 1])
  ) {
    tokens[i] = "\u2212";
  }
}

return tokens.join("");
}

function calculate() {
var expression = form1.answer.value;
expression = formatExpression(expression);

try {
  expression = expression.replace(/\u2212/g, "-");
  form1.answer.value = eval(expression);
} catch (error) {
  form1.answer.value = "Error";
}
}