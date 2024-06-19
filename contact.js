function validateForm() {
  let n = document.forms["contactForm"]["name"].value;
  let e = document.forms["contactForm"]["email"].value;
  let m = document.forms["contactForm"]["text"].value;
  if (n == "") {
    alert("Name must be filled out");
    return false;
  }
  if (e == "") {
    alert("Email must be filled out");
    return false;
  }
  if (m == "") {
    alert("Message must be filled out");
    return false;
  }
}

