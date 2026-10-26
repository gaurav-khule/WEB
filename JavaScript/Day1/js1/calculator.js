function calculate() {
  //   alert("What's suppppppp!!"); // printing some msg on screen
  //   confirm("Delete....?");
  //   prompt("Hey buddy!!");

  //   console.log(document);
  //   console.log(document.getElementById("x1"));
  //   console.log(document.getElementById("x1").value);

  let amount = document.getElementById("x1").value;
  let roi = document.getElementById("x2").value;
  let duration = document.getElementById("x3").value;

  //innerText will change the content

  if (amount == "" || roi == "" || duration == "") {
    document.getElementById("msg").innerText = "All values are required";
    document.getElementById("msg").style.color = "red";
  } else {
    // is not a number = NaN
    console.log(isNaN(amount));
    if (isNaN(amount) || isNaN(roi) || isNaN(duration)) {
      document.getElementById("msg").innerText = "All values must be a number";
      document.getElementById("msg").style.color = "red";
    } else if (amount <= 0 || roi <= 0 || duration <= 0) {
      document.getElementById("msg").innerText =
        "All values must be positive number";
      document.getElementById("msg").style.color = "red";
    } else {
      console.log(typeof amount);
      amount = parseInt(amount); // it takes number and igonre string input values
      roi = parseFloat(roi);
      duration = Number(duration); // It directly igone if any string found in given details
      let interest = (amount * roi * duration) / 100;
      let final = amount + interest;

      document.getElementById("msg").innerHTML =
        `<b>Interest<b>=${interest}<br/>
            <b>Final Amount<b>=${final}<br/>
            `;
      document.getElementById("msg").style.color = "green";
      //innerText is sued to present only text
      // innerHTMl is used to present text and HTML tags
    }
  }
}
