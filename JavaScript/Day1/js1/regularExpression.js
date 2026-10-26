// Dom Event Handling :-

console.log(document);
console.log(document.querySelector("button"));
document.querySelector("button").onclick = function () {
  let pancard = document.getElementById("x1").value;
  console.log(pancard);
  //   let regularExpr = "/^$/";
  // // <- its a bondary for regular expression
  // ^ it is use to identify first char sepereatly
  // $ it is use to identify last char sepereatly

  let regularExpr =
    // /^[a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z][0-9][0-9][0-9][\d][a-zA-Z]$/;
    /^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]$/;
  // one [] is fro one character
  // alternate way to type 0-9 is \d stands for digit
  let answer = regularExpr.test(pancard);
  let msg = answer ? "valid" : "invalid";
  document.getElementById("msg").innerHTML = msg;
};
